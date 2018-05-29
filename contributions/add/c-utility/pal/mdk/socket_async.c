// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

#include <stdbool.h>
#include <stdint.h>

#include "iot_socket.h"

#include "socket_async.h"
#include "azure_c_shared_utility/xlogging.h"

SOCKET_ASYNC_HANDLE socket_async_create(uint32_t serverIPv4, uint16_t port,
    bool is_UDP, SOCKET_ASYNC_OPTIONS_HANDLE options)
{
    SOCKET_ASYNC_HANDLE result;

    /* Codes_SRS_SOCKET_ASYNC_30_013: [ The is_UDP parameter shall be true for a UDP connection, and false for TCP. ]*/
    int sock = iotSocketCreate(IOT_SOCKET_AF_INET, is_UDP ? IOT_SOCKET_SOCK_DGRAM : IOT_SOCKET_SOCK_STREAM, 0);
    if (sock < 0)
    {
        /* Codes_SRS_SOCKET_ASYNC_30_010: [ If socket option creation fails, socket_async_create shall log an error and return SOCKET_ASYNC_INVALID_SOCKET. ]*/
        // An essentially impossible failure, not worth logging errno()
        LogError("create socket failed");
        result = SOCKET_ASYNC_INVALID_SOCKET;
    }
    else
    {
        bool setopt_ok;
        int setopt_return;
        // None of the currently defined options apply to UDP
        /* Codes_SRS_SOCKET_ASYNC_30_015: [ If is_UDP is true, the optional options parameter shall be ignored. ]*/
        if (!is_UDP)
        {
            if (options != NULL)
            {
                /* Codes_SRS_SOCKET_ASYNC_30_014: [ If the optional options parameter is non-NULL and is_UDP is false, and options->keep_alive is non-negative, socket_async_create shall set the socket options to the provided options values. ]*/
                if (options->keep_alive >= 0)
                {
                    // Ignored - not supported
                    //int keepAlive = 1; //enable keepalive
                    setopt_ok = true;
                    setopt_return = 0;
                }
                else
                {
                    /* Codes_SRS_SOCKET_ASYNC_30_015: [ If the optional options parameter is non-NULL and is_UDP is false, and options->keep_alive is negative, socket_async_create not set the socket keep-alive options. ]*/
                    // < 0 means use system defaults, so do nothing
                    setopt_ok = true;
                    setopt_return = 0;
                }
            }
            else
            {
                /* Codes_SRS_SOCKET_ASYNC_30_017: [ If the optional options parameter is NULL and is_UDP is false, socket_async_create shall disable TCP keep-alive. ]*/
                // Ignored - not supported
                //int keepAlive = 0; //disable keepalive
                setopt_ok = true;
                setopt_return = 0;
            }
        }
        else
        {
            setopt_ok = true;
            setopt_return = 0;
        }

        // NB: On full-sized (multi-process) systems it would be necessary to use the SO_REUSEADDR option to 
        // grab the socket from any earlier (dying) invocations of the process and then deal with any 
        // residual junk in the connection stream. This doesn't happen with embedded, so it doesn't need
        // to be defended against.

        if (!setopt_ok)
        {
            /* Codes_SRS_SOCKET_ASYNC_30_020: [ If socket option setting fails, socket_async_create shall log an error and return SOCKET_ASYNC_INVALID_SOCKET. ]*/
            // setsockopt has no real possibility of failing due to the way it's being used here, so there's no need 
            // to spend memory trying to log the not-really-possible errno.
            LogError("setsockopt failed: %d", setopt_return);
            result = SOCKET_ASYNC_INVALID_SOCKET;
        }
        else
        {
            /* Codes_SRS_SOCKET_ASYNC_30_019: [ The socket returned shall be non-blocking. ]*/
            int32_t bind_ret;
            int32_t nbio = 1;

            iotSocketSetOpt(sock, IOT_SOCKET_IO_FIONBIO, &nbio, sizeof(nbio));

            bind_ret = 0;  // bind is not needed (assume success)

            if (bind_ret != 0)
            {
                /* Codes_SRS_SOCKET_ASYNC_30_021: [ If socket binding fails, socket_async_create shall log an error and return SOCKET_ASYNC_INVALID_SOCKET. ]*/
                LogError("bind socket failed: %d", bind_ret);
                result = SOCKET_ASYNC_INVALID_SOCKET;
            }
            else
            {
                int connect_ret;

                connect_ret = iotSocketConnect(sock, &serverIPv4, sizeof(serverIPv4), port);
                if (connect_ret < 0)
                {
                    if (connect_ret != IOT_SOCKET_EINPROGRESS)
                    {
                        /* Codes_SRS_SOCKET_ASYNC_30_022: [ If socket connection fails, socket_async_create shall log an error and return SOCKET_ASYNC_INVALID_SOCKET. ]*/
                        LogError("Socket connect failed, not EINPROGRESS: %d", connect_ret);
                        result = SOCKET_ASYNC_INVALID_SOCKET;
                    }
                    else
                    {
                        // This is the normally expected code path for our non-blocking socket
                        /* Codes_SRS_SOCKET_ASYNC_30_018: [ On success, socket_async_create shall return the created and configured SOCKET_ASYNC_HANDLE. ]*/
                        result = sock;
                    }
                }
                else
                {
                    /* Codes_SRS_SOCKET_ASYNC_30_018: [ On success, socket_async_create shall return the created and configured SOCKET_ASYNC_HANDLE. ]*/
                    // This result would be a surprise because a non-blocking socket
                    // returns EINPROGRESS. But it could happen if this thread got
                    // blocked for a while by the system while the handshake proceeded,
                    // or for a UDP socket.
                    result = sock;
                }
            }
        }
    }

    return result;
}

int socket_async_is_create_complete(SOCKET_ASYNC_HANDLE sock, bool* is_complete)
{
    int result;
    if (is_complete == NULL)
    {
        /* Codes_SRS_SOCKET_ASYNC_30_026: [ If the is_complete parameter is NULL, socket_async_is_create_complete shall log an error and return FAILURE. ]*/
        LogError("is_complete is NULL");
        result = __FAILURE__;
    }
    else
    {
        uint32_t status;
        int ret = iotSocketGetStatus(sock, &status);
        if (ret == 0)
        {
            if (status & IOT_SOCKET_FLAG_ERROR)
            {
                /* Codes_SRS_SOCKET_ASYNC_30_028: [ On failure, the is_complete value shall be set to false and socket_async_create shall return FAILURE. ]*/
                LogError("Socket is in error");
                result = __FAILURE__;
            }
            else if (status & IOT_SOCKET_FLAG_WRITE)
            {
                /* Codes_SRS_SOCKET_ASYNC_30_027: [ On success, the is_complete value shall be set to the completion state and socket_async_create shall return 0. ]*/
                // Ready to read
                result = 0;
                *is_complete = true;
            }
            else{
                /* Codes_SRS_SOCKET_ASYNC_30_027: [ On success, the is_complete value shall be set to the completion state and socket_async_create shall return 0. ]*/
                // Not ready yet
                result = 0;
                *is_complete = false;
            }
        }
        else
        {
            /* Codes_SRS_SOCKET_ASYNC_30_028: [ On failure, the is_complete value shall be set to false and socket_async_create shall return FAILURE. ]*/
            LogError("Socket select failed: %d", ret);
            result = __FAILURE__;
        }
    }
    return result;
}

int socket_async_send(SOCKET_ASYNC_HANDLE sock, const void* buffer, size_t size, size_t* sent_count)
{
    int result;
    if (buffer == NULL)
    {
        /* Codes_SRS_SOCKET_ASYNC_30_033: [ If the buffer parameter is NULL, socket_async_send shall log the error return FAILURE. ]*/
        LogError("buffer is NULL");
        result = __FAILURE__;
    }
    else
    {
        if (sent_count == NULL)
        {
            /* Codes_SRS_SOCKET_ASYNC_30_034: [ If the sent_count parameter is NULL, socket_async_send shall log the error return FAILURE. ]*/
            LogError("sent_count is NULL");
            result = __FAILURE__;
        }
        else
            if (size == 0)
            {
                /* Codes_SRS_SOCKET_ASYNC_30_073: [ If the size parameter is 0, socket_async_send shall set sent_count to 0 and return 0. ]*/
                // This behavior is not always defined by the underlying API, so we make it predictable here
                *sent_count = 0;
                result = 0;
            }
            else
            {
                int32_t send_result = iotSocketSend(sock, buffer, (uint32_t)size);
                if (send_result < 0)
                {
                    if (send_result == IOT_SOCKET_EAGAIN)
                    {
                        /* Codes_SRS_SOCKET_ASYNC_30_036: [ If the underlying socket is unable to accept any bytes for transmission because its buffer is full, socket_async_send shall return 0 and the sent_count parameter shall receive the value 0. ]*/
                        // Nothing sent, try again later
                        *sent_count = 0;
                        result = 0;
                    }
                    else
                    {
                        /* Codes_SRS_SOCKET_ASYNC_30_037: [ If socket_async_send fails unexpectedly, socket_async_send shall log the error return FAILURE. ]*/
                        // Something bad happened
                        LogError("Unexpected send error: %d", send_result);
                        result = __FAILURE__;
                    }
                }
                else
                {
                    /* Codes_SRS_SOCKET_ASYNC_30_035: [ If the underlying socket accepts one or more bytes for transmission, socket_async_send shall return 0 and the sent_count parameter shall receive the number of bytes accepted for transmission. ]*/
                    // Sent at least part of the message
                    result = 0;
                    *sent_count = (size_t)send_result;
                }
            }
    }
    return result;
}

int socket_async_receive(SOCKET_ASYNC_HANDLE sock, void* buffer, size_t size, size_t* received_count)
{
    int result;
    if (buffer == NULL)
    {
        /* Codes_SRS_SOCKET_ASYNC_30_052: [ If the buffer parameter is NULL, socket_async_receive shall log the error and return FAILURE. ]*/
        LogError("buffer is NULL");
        result = __FAILURE__;
    }
    else
    {
        if (received_count == NULL)
        {
            /* Codes_SRS_SOCKET_ASYNC_30_053: [ If the received_count parameter is NULL, socket_async_receive shall log the error and return FAILURE. ]*/
            LogError("received_count is NULL");
            result = __FAILURE__;
        }
        else
            if (size == 0)
            {
                /* Codes_SRS_SOCKET_ASYNC_30_072: [ If the size parameter is 0, socket_async_receive shall log an error and return FAILURE. ]*/
                LogError("size is 0");
                result = __FAILURE__;
            }
            else
            {
                int32_t recv_result = iotSocketRecv(sock, buffer, (uint32_t)size);
                if (recv_result < 0)
                {
                    if (recv_result == IOT_SOCKET_EAGAIN)
                    {
                        /* Codes_SRS_SOCKET_ASYNC_30_055: [ If the underlying socket has no received bytes available, socket_async_receive shall return 0 and the received_count parameter shall receive the value 0. ]*/
                        // Nothing received, try again later
                        *received_count = 0;
                        result = 0;
                    }
                    else
                    {
                        /* Codes_SRS_SOCKET_ASYNC_30_056: [ If the underlying socket fails unexpectedly, socket_async_receive shall log the error and return FAILURE. ]*/
                        // Something bad happened
                        LogError("Unexpected recv error: %d", recv_result);
                        result = __FAILURE__;
                    }
                }
                else
                {
                    /* Codes_SRS_SOCKET_ASYNC_30_054: [ On success, the underlying socket shall set one or more received bytes into buffer, socket_async_receive shall return 0, and the received_count parameter shall receive the number of bytes received into buffer. ]*/
                    // Received some stuff
                    *received_count = (size_t)recv_result;
                    result = 0;
                }
            }
    }
    return result;
}

void socket_async_destroy(SOCKET_ASYNC_HANDLE sock)
{
    /* Codes_SRS_SOCKET_ASYNC_30_071: [ socket_async_destroy shall call the underlying close method on the supplied socket. ]*/
    iotSocketClose(sock);
}
