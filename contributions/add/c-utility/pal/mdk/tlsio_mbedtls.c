// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

#include <stdlib.h>

#include "mbedtls/config.h"
#include "mbedtls/debug.h"
#include "mbedtls/ssl.h"
#include "mbedtls/entropy.h"
#include "mbedtls/ctr_drbg.h"
#include "mbedtls/error.h"
#include "mbedtls/certs.h"
#include "mbedtls/entropy_poll.h"
#include "mbedtls/net_sockets.h"

#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include "socket_async.h"
#include "dns_async.h"
#include "azure_c_shared_utility/gballoc.h"
#include "azure_c_shared_utility/tlsio.h"
#include "azure_c_shared_utility/tlsio_mbedtls.h"
#include "azure_c_shared_utility/tlsio_options.h"
#include "azure_c_shared_utility/singlylinkedlist.h"
#include "azure_c_shared_utility/crt_abstractions.h"
#include "azure_c_shared_utility/shared_util_options.h"

// DEPRECATED: debug functions do not belong in the tree.
//#define MBED_TLS_DEBUG_ENABLE

// The TLSIO_RECEIVE_BUFFER_SIZE has very little effect on performance, and is kept small
// to minimize memory consumption.
#define TLSIO_RECEIVE_BUFFER_SIZE 64

#define MAX_VALID_PORT 0xffff

typedef struct
{
    unsigned char* bytes;
    size_t size;
    size_t unsent_size;
    ON_SEND_COMPLETE on_send_complete;
    void* callback_context;
} PENDING_TRANSMISSION;

typedef enum TLSIO_STATE_TAG
{
    TLSIO_STATE_CLOSED,
    TLSIO_STATE_OPENING_WAITING_DNS,
    TLSIO_STATE_OPENING_WAITING_SOCKET,
    TLSIO_STATE_OPENING_WAITING_SSL,
    TLSIO_STATE_OPEN,
    TLSIO_STATE_CLOSING,
    TLSIO_STATE_ERROR
} TLSIO_STATE;

typedef struct TLS_IO_INSTANCE_TAG
{
    ON_BYTES_RECEIVED on_bytes_received;
    ON_IO_OPEN_COMPLETE on_io_open_complete;
    ON_IO_ERROR on_io_error;
    void* on_bytes_received_context;
    void* on_io_open_complete_context;
    void* on_io_error_context;
    TLSIO_STATE tlsio_state;
    mbedtls_entropy_context entropy;
    mbedtls_ctr_drbg_context ctr_drbg;
    mbedtls_ssl_context ssl;
    mbedtls_ssl_config config;
    mbedtls_x509_crt trusted_certs;
    mbedtls_ssl_session ssn;
    DNS_ASYNC_HANDLE dns;
    char* hostname;
    uint16_t port;
    SOCKET_ASYNC_HANDLE sock;
    SINGLYLINKEDLIST_HANDLE pending_transmission_list;
    TLSIO_OPTIONS options;
} TLS_IO_INSTANCE;

bool is_an_opening_state(TLSIO_STATE state)
{
    return state == TLSIO_STATE_OPENING_WAITING_DNS ||
        state == TLSIO_STATE_OPENING_WAITING_SOCKET ||
        state == TLSIO_STATE_OPENING_WAITING_SSL;
}

static void enter_tlsio_error_state(TLS_IO_INSTANCE* tls_io_instance)
{
    if (tls_io_instance->tlsio_state != TLSIO_STATE_ERROR)
    {
        tls_io_instance->tlsio_state = TLSIO_STATE_ERROR;
        if (tls_io_instance->on_io_error != NULL)
        {
            tls_io_instance->on_io_error(tls_io_instance->on_io_error_context);
        }
    }
}

static void enter_open_error_state(TLS_IO_INSTANCE* tls_io_instance)
{
    // save instance variables in case the framework destroys this object before we exit
    ON_IO_OPEN_COMPLETE on_open_complete = tls_io_instance->on_io_open_complete;
    void* on_open_complete_context = tls_io_instance->on_io_open_complete_context;
    enter_tlsio_error_state(tls_io_instance);   
    on_open_complete(on_open_complete_context, IO_OPEN_ERROR);
}

// Return true if a message was available to remove
static bool process_and_destroy_head_message(TLS_IO_INSTANCE* tls_io_instance, IO_SEND_RESULT send_result)
{
    bool result;
    LIST_ITEM_HANDLE head_pending_io;
    if (send_result == IO_SEND_ERROR)
    {
        enter_tlsio_error_state(tls_io_instance);
    }
    head_pending_io = singlylinkedlist_get_head_item(tls_io_instance->pending_transmission_list);
    if (head_pending_io != NULL)
    {
        PENDING_TRANSMISSION* head_message = (PENDING_TRANSMISSION*)singlylinkedlist_item_get_value(head_pending_io);
        // Must remove the item from the list before calling the callback because 
        if (singlylinkedlist_remove(tls_io_instance->pending_transmission_list, head_pending_io) != 0)
        {
            // This particular situation is a bizarre and unrecoverable internal error
            enter_tlsio_error_state(tls_io_instance);
            LogError("Failed to remove message from list");
        }
        // on_send_complete is checked for NULL during PENDING_TRANSMISSION creation
        head_message->on_send_complete(head_message->callback_context, send_result);

        free(head_message->bytes);
        free(head_message);
        result = true;
    }
    else
    {
        result = false;
    }
    return result;
}

static int on_io_recv(void *context, unsigned char *buf, size_t sz)
{
    TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)context;
    size_t received_count;
    int result;

    if (socket_async_receive(tls_io_instance->sock, buf, sz, &received_count) == 0)
    {
        if (received_count > 0)
        {
            result = received_count;
        }
        else
        {
            result = MBEDTLS_ERR_SSL_WANT_READ;
        }
    }
    else
    {
        enter_tlsio_error_state(tls_io_instance);
        result = MBEDTLS_ERR_NET_RECV_FAILED;
    }

    return result;
}

static int on_io_send(void *context, const unsigned char *buf, size_t sz)
{
    TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)context;
    size_t sent_count;
    int result;

    if (socket_async_send(tls_io_instance->sock, buf, sz, &sent_count) == 0)
    {
        if (sent_count > 0)
        {
            result = sent_count;
        }
        else
        {
            result = MBEDTLS_ERR_SSL_WANT_WRITE;
        }
    }
    else
    {
        enter_tlsio_error_state(tls_io_instance);
        result = MBEDTLS_ERR_NET_SEND_FAILED;
    }

    return result;
}

// DEPRECATED: debug functions do not belong in the tree.
#if defined (MBED_TLS_DEBUG_ENABLE)
void mbedtls_debug(void *ctx, int level, const char *file, int line, const char *str)
{
    ((void)level);
    printf("%s (%d): %s\r\n", file, line, str);
}
#endif

static int tlsio_entropy_poll(void *v, unsigned char *output, size_t len, size_t *olen)
{
    srand(time(NULL));
    char *c = (char*)malloc(len);
    memset(c, 0, len);
    for (uint16_t i = 0; i < len; i++) {
        c[i] = rand() % 256;
    }
    memmove(output, c, len);
    *olen = len;

    free(c);
    return(0);
}

static void mbedtls_init(void *instance, const char *host) {
    TLS_IO_INSTANCE *result = (TLS_IO_INSTANCE *)instance;
    char *pers = "azure_iot_client";

    // mbedTLS initialize...
    mbedtls_entropy_init(&result->entropy);
    mbedtls_ctr_drbg_init(&result->ctr_drbg);
    mbedtls_ssl_init(&result->ssl);
    mbedtls_ssl_session_init(&result->ssn);
    mbedtls_ssl_config_init(&result->config);
    mbedtls_x509_crt_init(&result->trusted_certs);
    mbedtls_entropy_add_source(&result->entropy, tlsio_entropy_poll, NULL, 128, 0);
    mbedtls_ctr_drbg_seed(&result->ctr_drbg, mbedtls_entropy_func, &result->entropy, (const unsigned char *)pers, strlen(pers));
    mbedtls_ssl_config_defaults(&result->config, MBEDTLS_SSL_IS_CLIENT, MBEDTLS_SSL_TRANSPORT_STREAM, MBEDTLS_SSL_PRESET_DEFAULT);
    mbedtls_ssl_conf_rng(&result->config, mbedtls_ctr_drbg_random, &result->ctr_drbg);
    mbedtls_ssl_conf_authmode(&result->config, MBEDTLS_SSL_VERIFY_REQUIRED);
    mbedtls_ssl_conf_min_version(&result->config, MBEDTLS_SSL_MAJOR_VERSION_3, MBEDTLS_SSL_MINOR_VERSION_3);          // v1.2
    mbedtls_ssl_set_bio(&result->ssl, instance, on_io_send, on_io_recv, NULL);
    mbedtls_ssl_set_hostname(&result->ssl, host);
    mbedtls_ssl_set_session(&result->ssl, &result->ssn);

    // DEPRECATED: debug functions do not belong in the tree.
#if defined (MBED_TLS_DEBUG_ENABLE)
    mbedtls_ssl_conf_dbg(&result->config, mbedtls_debug, stdout);
    mbedtls_debug_set_threshold(1);
#endif

    mbedtls_ssl_setup(&result->ssl, &result->config);
}

CONCRETE_IO_HANDLE tlsio_mbedtls_create(void* io_create_parameters)
{
    TLS_IO_INSTANCE* result;

    if (io_create_parameters == NULL)
    {
        LogError("NULL tls_io_config");
        result = NULL;
    }
    else
    {
        TLSIO_CONFIG* tls_io_config = (TLSIO_CONFIG*)io_create_parameters;
        if (tls_io_config->hostname == NULL)
        {
            LogError("NULL tls_io_config->hostname");
            result = NULL;
        }
        else if (tls_io_config->port < 0 || tls_io_config->port > MAX_VALID_PORT)
        {
            LogError("tls_io_config->port out of range");
            result = NULL;
        }
        else
        {
            result = malloc(sizeof(TLS_IO_INSTANCE));
            if (result == NULL)
            {
                /* Codes_SRS_TLSIO_30_011: [ If any resource allocation fails, tlsio_create shall return NULL. ]*/
                LogError("malloc failed");
            }
            else
            {
                int ms_result;
                memset(result, 0, sizeof(TLS_IO_INSTANCE));
                result->port = (uint16_t)tls_io_config->port;
                result->tlsio_state = TLSIO_STATE_CLOSED;
                result->sock = SOCKET_ASYNC_INVALID_SOCKET;
                result->hostname = NULL;
                result->dns = NULL;
                result->pending_transmission_list = NULL;
                tlsio_options_initialize(&result->options, TLSIO_OPTION_BIT_TRUSTED_CERTS);
                ms_result = mallocAndStrcpy_s(&result->hostname, tls_io_config->hostname);
                if (ms_result != 0)
                {
                    LogError("malloc failed");
                    tlsio_mbedtls_destroy(result);
                    result = NULL;
                }
                else
                {
                    // Create the message queue
                    result->pending_transmission_list = singlylinkedlist_create();
                    if (result->pending_transmission_list == NULL)
                    {
                        LogError("Failed singlylinkedlist_create");
                        tlsio_mbedtls_destroy(result);
                        result = NULL;
                    }
                    else
                    {
                        // mbeTLS initialize
                        mbedtls_init((void *)result, tls_io_config->hostname);
                    }
                }
            }
        }
    }

    return (CONCRETE_IO_HANDLE)result;
}

static void internal_close(TLS_IO_INSTANCE* tls_io_instance)
{
    // mbedTLS cleanup...
    mbedtls_ssl_close_notify(&tls_io_instance->ssl);
    mbedtls_ssl_free(&tls_io_instance->ssl);
    mbedtls_ssl_config_free(&tls_io_instance->config);
    mbedtls_x509_crt_free(&tls_io_instance->trusted_certs);
    mbedtls_ctr_drbg_free(&tls_io_instance->ctr_drbg);
    mbedtls_entropy_free(&tls_io_instance->entropy);

    if (tls_io_instance->dns != NULL)
    {
        dns_async_destroy(tls_io_instance->dns);
        tls_io_instance->dns = NULL;
    }
    if (tls_io_instance->sock >= 0)
    {
        // The underlying socket API does not support waiting for close
        // to complete, so it isn't possible to do so.
        socket_async_destroy(tls_io_instance->sock);
        tls_io_instance->sock = -1;
    }

    while (process_and_destroy_head_message(tls_io_instance, IO_SEND_CANCELLED));
    // singlylinkedlist_destroy gets called in the main destroy

    tls_io_instance->on_bytes_received = NULL;
    tls_io_instance->on_io_error = NULL;
    tls_io_instance->on_bytes_received_context = NULL;
    tls_io_instance->on_io_error_context = NULL;
    tls_io_instance->tlsio_state = TLSIO_STATE_CLOSED;
    tls_io_instance->on_io_open_complete = NULL;
    tls_io_instance->on_io_open_complete_context = NULL;
}

void tlsio_mbedtls_destroy(CONCRETE_IO_HANDLE tls_io)
{
    if (tls_io == NULL)
    {
        LogError("NULL tlsio");
    }
    else
    {
        TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)tls_io;
        if (tls_io_instance->tlsio_state != TLSIO_STATE_CLOSED)
        {
            LogError("tlsio_mbedtls_destroy called while not in TLSIO_STATE_CLOSED.");
            internal_close(tls_io_instance);
        }
        if (tls_io_instance->hostname != NULL)
        {
            free(tls_io_instance->hostname);
        }
        
        tlsio_options_release_resources(&tls_io_instance->options);

        if (tls_io_instance->pending_transmission_list != NULL)
        {
            /* Pending messages were cleared in internal_close */
            singlylinkedlist_destroy(tls_io_instance->pending_transmission_list);
        }

        free(tls_io_instance);
    }
}

int tlsio_mbedtls_open(CONCRETE_IO_HANDLE tls_io, ON_IO_OPEN_COMPLETE on_io_open_complete, void* on_io_open_complete_context, ON_BYTES_RECEIVED on_bytes_received, void* on_bytes_received_context, ON_IO_ERROR on_io_error, void* on_io_error_context)
{
    int result;
    if (on_io_open_complete == NULL)
    {
        LogError("Required parameter on_io_open_complete is NULL");
        result = __FAILURE__;
    }
    else
    {
        if (tls_io == NULL)
        {
            result = __FAILURE__;
            LogError("NULL tlsio");
        }
        else
        {
            if (on_bytes_received == NULL)
            {
                LogError("Required parameter on_bytes_received is NULL");
                result = __FAILURE__;
            }
            else
            {
                if (on_io_error == NULL)
                {
                    LogError("Required parameter on_io_error is NULL");
                    result = __FAILURE__;
                }
                else
                {
                    TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)tls_io;

                    if (tls_io_instance->tlsio_state != TLSIO_STATE_CLOSED)
                    {
                        LogError("Invalid tlsio_state. Expected state is TLSIO_STATE_CLOSED.");
                        result = __FAILURE__;
                    }
                    else
                    {
                        tls_io_instance->dns = dns_async_create(tls_io_instance->hostname, NULL);
                        if (tls_io_instance->dns == NULL)
                        {
                            LogError("dns_async_create failed");
                            result = __FAILURE__;
                        }
                        else
                        {
                            /* Codes_SRS_TLSIO_30_034: [ The tlsio_open shall store the provided on_bytes_received, on_bytes_received_context, on_io_error, on_io_error_context, on_io_open_complete, and on_io_open_complete_context parameters for later use as specified and tested per other line entries in this document. ]*/
                            tls_io_instance->on_bytes_received = on_bytes_received;
                            tls_io_instance->on_bytes_received_context = on_bytes_received_context;

                            tls_io_instance->on_io_error = on_io_error;
                            tls_io_instance->on_io_error_context = on_io_error_context;

                            tls_io_instance->on_io_open_complete = on_io_open_complete;
                            tls_io_instance->on_io_open_complete_context = on_io_open_complete_context;

                            // All the real work happens in dowork
                            tls_io_instance->tlsio_state = TLSIO_STATE_OPENING_WAITING_DNS;
                            result = 0;
                        }
                    }
                }
            }
        }
    }

    return result;
}

int tlsio_mbedtls_close(CONCRETE_IO_HANDLE tls_io, ON_IO_CLOSE_COMPLETE on_io_close_complete, void* callback_context)
{
    int result;

    if (tls_io == NULL)
    {
        LogError("NULL tlsio");
        result = __FAILURE__;
    }
    else
    {
        if (on_io_close_complete == NULL)
        {
            LogError("NULL on_io_close_complete");
            result = __FAILURE__;
        }
        else
        {
            TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)tls_io;

            if (tls_io_instance->tlsio_state != TLSIO_STATE_OPEN &&
                tls_io_instance->tlsio_state != TLSIO_STATE_ERROR)
            {
                // LogInfo rather than LogError because this is an unusual but not erroneous situation
                LogInfo("tlsio_mbedtls_close has been called when in neither TLSIO_STATE_OPEN nor TLSIO_STATE_ERROR.");
            }

            if (is_an_opening_state(tls_io_instance->tlsio_state))
            {
                tls_io_instance->on_io_open_complete(tls_io_instance->on_io_open_complete_context, IO_OPEN_CANCELLED);
            }
            // This adapter does not support asynchronous closing
            internal_close(tls_io_instance);
            on_io_close_complete(callback_context);
            result = 0;
        }
    }

    return result;
}

static void dowork_poll_dns(TLS_IO_INSTANCE* tls_io_instance)
{
    bool dns_is_complete = dns_async_is_lookup_complete(tls_io_instance->dns);

    if (dns_is_complete)
    {
        uint32_t host_ipV4_address = dns_async_get_ipv4(tls_io_instance->dns);
        dns_async_destroy(tls_io_instance->dns);
        tls_io_instance->dns = NULL;
        if (host_ipV4_address == 0)
        {
            // Transition to TSLIO_STATE_ERROR
            // The DNS failure has already been logged
            enter_open_error_state(tls_io_instance);
        }
        else
        {
            SOCKET_ASYNC_HANDLE sock = socket_async_create(host_ipV4_address, tls_io_instance->port, false, NULL);
            if (sock < 0)
            {
                // This is a communication interruption rather than a program bug
                /* Codes_SRS_TLSIO_30_082: [ If the connection process fails for any reason, tlsio_dowork shall log an error, call on_io_open_complete with the on_io_open_complete_context parameter provided in tlsio_open and IO_OPEN_ERROR, and enter TLSIO_STATE_EX_ERROR. ]*/
                enter_open_error_state(tls_io_instance);
            }
            else
            {
                // The socket has been created successfully, so now wait for it to
                // finish the TCP handshake.
                tls_io_instance->sock = sock;
                tls_io_instance->tlsio_state = TLSIO_STATE_OPENING_WAITING_SOCKET;
            }
        }
    }
}

static void dowork_poll_socket(TLS_IO_INSTANCE* tls_io_instance)
{
    bool is_complete;
    int result = socket_async_is_create_complete(tls_io_instance->sock, &is_complete);
    if (result != 0)
    {
        // Transition to TSLIO_STATE_ERROR
        LogInfo("socket_async_is_create_complete failure");
        enter_open_error_state(tls_io_instance);
    }
    else
    {
        if (is_complete)
        {
            tls_io_instance->tlsio_state = TLSIO_STATE_OPENING_WAITING_SSL;
        }
    }
}

static void dowork_poll_open_ssl(TLS_IO_INSTANCE* tls_io_instance)
{
    int result;

    result = mbedtls_ssl_handshake(&tls_io_instance->ssl);
    if (result == 0)
    {
        // Connect succeeded
        tls_io_instance->tlsio_state = TLSIO_STATE_OPEN;
        tls_io_instance->on_io_open_complete(tls_io_instance->on_io_open_complete_context, IO_OPEN_OK);
    }
    else
    {
        if ((result != MBEDTLS_ERR_SSL_WANT_READ) && (result != MBEDTLS_ERR_SSL_WANT_WRITE))
        {
            LogInfo("Error from mbedtls_ssl_handshake: %d", result);
            enter_open_error_state(tls_io_instance);
        }
    }
}

static void dowork_read(TLS_IO_INSTANCE* tls_io_instance)
{
    // TRANSFER_BUFFER_SIZE is not very important because if the message is bigger
    // then the framework just calls dowork repeatedly until it gets everything. So
    // a bigger buffer would just use memory without buying anything.
    // Putting this buffer in a small function also allows it to exist on the stack
    // rather than adding to heap fragmentation.
    unsigned char buffer[TLSIO_RECEIVE_BUFFER_SIZE];
    int rcv_bytes;

    if (tls_io_instance->tlsio_state == TLSIO_STATE_OPEN)
    {
        // Pump all of the bytes currently available out
        do
        {
            rcv_bytes = mbedtls_ssl_read(&tls_io_instance->ssl, buffer, sizeof(buffer));
            if (rcv_bytes > 0)
            {
                // tls_io_instance->on_bytes_received was already checked for NULL
                // in the call to tlsio_openssl_open_async
                tls_io_instance->on_bytes_received(tls_io_instance->on_bytes_received_context, buffer, rcv_bytes);
            }
            else
            {
                switch (rcv_bytes)
                {
                case MBEDTLS_ERR_SSL_WANT_READ:
                case MBEDTLS_ERR_SSL_WANT_WRITE:
                    break;
                default:
                    enter_tlsio_error_state(tls_io_instance);
                    break;
                }
            }
        }
        while (rcv_bytes > 0);
    }
}

static void dowork_send(TLS_IO_INSTANCE* tls_io_instance)
{
    LIST_ITEM_HANDLE first_pending_io = singlylinkedlist_get_head_item(tls_io_instance->pending_transmission_list);
    if (first_pending_io != NULL)
    {
        PENDING_TRANSMISSION* pending_message = (PENDING_TRANSMISSION*)singlylinkedlist_item_get_value(first_pending_io);
        uint8_t* buffer = ((uint8_t*)pending_message->bytes) +
            pending_message->size - pending_message->unsent_size;
        int write_result = mbedtls_ssl_write(&tls_io_instance->ssl, buffer, pending_message->unsent_size);

        if (write_result > 0)
        {
            pending_message->unsent_size -= write_result;
            if (pending_message->unsent_size == 0)
            {
                // The whole message has been sent successfully
                process_and_destroy_head_message(tls_io_instance, IO_SEND_OK);
            }
            else
            {
                // Repeat the send on the next pass with the rest of the message
                // This empty else compiles to nothing but helps readability
            }
        }
        else
        {
            // SSL_write returned non-success. It may just be busy, or it may be broken.
            if ((write_result != MBEDTLS_ERR_SSL_WANT_READ) && (write_result != MBEDTLS_ERR_SSL_WANT_WRITE))
            {
                // This is an unexpected error, and we need to bail out. Probably lost internet connection.
                LogInfo("Error from mbedtls_ssl_write: %d", write_result);
                process_and_destroy_head_message(tls_io_instance, IO_SEND_ERROR);
            }
        }
    }
    else
    {
        /* If there are no enqueued messages available, dowork_send shall do nothing. */
    }
}

void tlsio_mbedtls_dowork(CONCRETE_IO_HANDLE tls_io)
{
    if (tls_io == NULL)
    {
        LogError("NULL tlsio");
    }
    else
    {
        TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)tls_io;

        // This switch statement handles all of the state transitions during the opening process
        switch (tls_io_instance->tlsio_state)
        {
        case TLSIO_STATE_CLOSED:
            // Waiting to be opened, nothing to do
            break;
        case TLSIO_STATE_OPENING_WAITING_DNS:
            dowork_poll_dns(tls_io_instance);
            break;
        case TLSIO_STATE_OPENING_WAITING_SOCKET:
            dowork_poll_socket(tls_io_instance);
            break;
        case TLSIO_STATE_OPENING_WAITING_SSL:
            dowork_poll_open_ssl(tls_io_instance);
            break;
        case TLSIO_STATE_OPEN:
            dowork_read(tls_io_instance);
            dowork_send(tls_io_instance);
            break;
        case TLSIO_STATE_ERROR:
            // There's nothing valid to do here but wait to be retried
            break;
        default:
            LogError("Unexpected internal tlsio state");
            break;
        }
    }
}

int tlsio_mbedtls_send(CONCRETE_IO_HANDLE tls_io, const void* buffer, size_t size, ON_SEND_COMPLETE on_send_complete, void* callback_context)
{
    int result;
    if (on_send_complete == NULL)
    {
        result = __FAILURE__;
        LogError("NULL on_send_complete");
    }
    else
    {
        if (tls_io == NULL)
        {
            result = __FAILURE__;
            LogError("NULL tlsio");
        }
        else
        {
            if (buffer == NULL)
            {
                result = __FAILURE__;
                LogError("NULL buffer");
            }
            else
            {
                if (size == 0)
                {
                    result = __FAILURE__;
                    LogError("0 size");
                }
                else
                {
                    TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)tls_io;
                    if (tls_io_instance->tlsio_state != TLSIO_STATE_OPEN)
                    {
                        result = __FAILURE__;
                        LogError("tlsio_mbedtls_send without a prior successful open");
                    }
                    else
                    {
                        PENDING_TRANSMISSION* pending_transmission = (PENDING_TRANSMISSION*)malloc(sizeof(PENDING_TRANSMISSION));
                        if (pending_transmission == NULL)
                        {
                            result = __FAILURE__;
                            LogError("malloc failed");
                        }
                        else
                        {
                            pending_transmission->bytes = (unsigned char*)malloc(size);

                            if (pending_transmission->bytes == NULL)
                            {
                                LogError("malloc failed");
                                free(pending_transmission);
                                result = __FAILURE__;
                            }
                            else
                            {
                                pending_transmission->size = size;
                                pending_transmission->unsent_size = size;
                                pending_transmission->on_send_complete = on_send_complete;
                                pending_transmission->callback_context = callback_context;
                                (void)memcpy(pending_transmission->bytes, buffer, size);

                                if (singlylinkedlist_add(tls_io_instance->pending_transmission_list, pending_transmission) == NULL)
                                {
                                    LogError("Unable to add socket to pending list.");
                                    free(pending_transmission->bytes);
                                    free(pending_transmission);
                                    result = __FAILURE__;
                                }
                                else
                                {
                                    dowork_send(tls_io_instance);
                                    result = 0;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}

int tlsio_mbedtls_setoption(CONCRETE_IO_HANDLE tls_io, const char* optionName, const void* value)
{
    TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)tls_io;
    int result;
    if (tls_io_instance == NULL)
    {
        LogError("NULL tlsio");
        result = __FAILURE__;
    }
    else
    {
        TLSIO_OPTIONS_RESULT options_result = tlsio_options_set(&tls_io_instance->options, optionName, value);
        if (options_result != TLSIO_OPTIONS_RESULT_SUCCESS)
        {
            LogError("Failed tlsio_options_set");
            result = __FAILURE__;
        }
        else
        {
            if (strcmp(OPTION_TRUSTED_CERT, optionName) == 0)
            {
                if (mbedtls_x509_crt_parse(&tls_io_instance->trusted_certs, (const unsigned char *)tls_io_instance->options.trusted_certs, (int)(strlen(tls_io_instance->options.trusted_certs) + 1)) == 0)
                {
                    mbedtls_ssl_conf_ca_chain(&tls_io_instance->config, &tls_io_instance->trusted_certs, NULL);
                }
            }
            result = 0;
        }
    }
    return result;
}

OPTIONHANDLER_HANDLE tlsio_mbedtls_retrieveoptions(CONCRETE_IO_HANDLE handle)
{
    TLS_IO_INSTANCE* tls_io_instance = (TLS_IO_INSTANCE*)handle;
    OPTIONHANDLER_HANDLE result;
    if (tls_io_instance == NULL)
    {
        LogError("NULL tlsio");
        result = NULL;
    }
    else
    {
        result = tlsio_options_retrieve_options(&tls_io_instance->options, tlsio_mbedtls_setoption);
    }
    return result;
}

static const IO_INTERFACE_DESCRIPTION tlsio_mbedtls_interface_description =
{
    tlsio_mbedtls_retrieveoptions,
    tlsio_mbedtls_create,
    tlsio_mbedtls_destroy,
    tlsio_mbedtls_open,
    tlsio_mbedtls_close,
    tlsio_mbedtls_send,
    tlsio_mbedtls_dowork,
    tlsio_mbedtls_setoption
};

const IO_INTERFACE_DESCRIPTION* tlsio_mbedtls_get_interface_description(void)
{
    return &tlsio_mbedtls_interface_description;
}
