// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

#include "iot_socket.h"

#include "dns_async.h"
#include "azure_c_shared_utility/gballoc.h"
#include "azure_c_shared_utility/crt_abstractions.h"
#include "azure_c_shared_utility/xlogging.h"

typedef struct
{
    char* hostname;
    uint32_t ip_v4;
    bool is_complete;
    bool is_failed;
} DNS_ASYNC_INSTANCE;

DNS_ASYNC_HANDLE dns_async_create(const char* hostname, DNS_ASYNC_OPTIONS* options)
{
    /* Codes_SRS_DNS_ASYNC_30_012: [ The optional options parameter shall be ignored. ]*/
    DNS_ASYNC_INSTANCE* result;
    (void)options;
    if (hostname == NULL)
    {
        /* Codes_SRS_DNS_ASYNC_30_011: [ If the hostname parameter is NULL, dns_async_create shall log an error and return NULL. ]*/
        LogError("NULL hostname");
        result = NULL;
    }
    else
    {
        result = malloc(sizeof(DNS_ASYNC_INSTANCE));
        if (result == NULL)
        {
            /* Codes_SRS_DNS_ASYNC_30_014: [ On any failure, dns_async_create shall log an error and return NULL. ]*/
            LogError("malloc instance failed");
            result = NULL;
        }
        else
        {
            int ms_result;
            result->is_complete = false;
            result->is_failed = false;
            result->ip_v4 = 0;
            /* Codes_SRS_DNS_ASYNC_30_010: [ dns_async_create shall make a copy of the hostname parameter to allow immediate deletion by the caller. ]*/
            ms_result = mallocAndStrcpy_s(&result->hostname, hostname);
            if (ms_result != 0)
            {
                /* Codes_SRS_DNS_ASYNC_30_014: [ On any failure, dns_async_create shall log an error and return NULL. ]*/
                free(result);
                result = NULL;
            }
        }
    }
    return result;
}

/* Codes_SRS_DNS_ASYNC_30_021: [ dns_async_is_create_complete shall perform the asynchronous work of DNS lookup and log any errors. ]*/
bool dns_async_is_lookup_complete(DNS_ASYNC_HANDLE dns_in)
{
    DNS_ASYNC_INSTANCE* dns = (DNS_ASYNC_INSTANCE*)dns_in;

    bool result;
    if (dns == NULL)
    {
        /* Codes_SRS_DNS_ASYNC_30_020: [ If the dns parameter is NULL, dns_async_is_create_complete shall log an error and return false. ]*/
        LogError("NULL dns");
        result = false;
    }
    else
    {
        if (dns->is_complete)
        {
            /* Codes_SRS_DNS_ASYNC_30_024: [ If dns_async_is_create_complete has previously returned true, dns_async_is_create_complete shall do nothing and return true. ]*/
            result = true;
        }
        else
        {
            int32_t ret;
            uint32_t len = sizeof(uint32_t);

            /* Codes_SRS_DNS_ASYNC_30_021: [ dns_async_is_create_complete shall perform the asynchronous work of DNS lookup and log any errors. ]*/
            // Only make one attempt at lookup for this
            // synchronous implementation
            dns->is_complete = true;

            ret = iotSocketGetHostByName(dns->hostname, IOT_SOCKET_AF_INET, (uint8_t*)&dns->ip_v4, &len);

            if (ret == 0)
            {
                dns->is_failed = false;
            }
            else
            {
                /* Codes_SRS_DNS_ASYNC_30_033: [ If dns_async_is_create_complete has returned true and the lookup process has failed, dns_async_get_ipv4 shall return 0. ]*/
                LogInfo("Failed DNS lookup for %s: %d", dns->hostname, ret);
                dns->is_failed = true;
            }
            // This synchronous implementation is incapable of being incomplete, so SRS_DNS_ASYNC_30_023 does not ever happen
            /* Codes_SRS_DNS_ASYNC_30_023: [ If the DNS lookup process is not yet complete, dns_async_is_create_complete shall return false. ]*/
            /* Codes_SRS_DNS_ASYNC_30_022: [ If the DNS lookup process has completed, dns_async_is_create_complete shall return true. ]*/
            result = true;
        }
    }

    return result;
}

void dns_async_destroy(DNS_ASYNC_HANDLE dns_in)
{
    DNS_ASYNC_INSTANCE* dns = (DNS_ASYNC_INSTANCE*)dns_in;
    if (dns == NULL)
    {
        /* Codes_SRS_DNS_ASYNC_30_050: [ If the dns parameter is NULL, dns_async_destroy shall log an error and do nothing. ]*/
        LogError("NULL dns");
    }
    else
    {
        /* Codes_SRS_DNS_ASYNC_30_051: [ dns_async_destroy shall delete all acquired resources and delete the DNS_ASYNC_HANDLE. ]*/
        free(dns->hostname);
        free(dns);
    }
}

uint32_t dns_async_get_ipv4(DNS_ASYNC_HANDLE dns_in)
{
    DNS_ASYNC_INSTANCE* dns = (DNS_ASYNC_INSTANCE*)dns_in;
    uint32_t result;
    if (dns == NULL)
    {
        /* Codes_SRS_DNS_ASYNC_30_030: [ If the dns parameter is NULL, dns_async_get_ipv4 shall log an error and return 0. ]*/
        LogError("NULL dns");
        result = 0;
    }
    else
    {
        if (dns->is_complete)
        {
            if (dns->is_failed)
            {
                /* Codes_SRS_DNS_ASYNC_30_033: [ If dns_async_is_create_complete has returned true and the lookup process has failed, dns_async_get_ipv4 shall return 0. ]*/
                result = 0;
            }
            else
            {
                /* Codes_SRS_DNS_ASYNC_30_032: [ If dns_async_is_create_complete has returned true and the lookup process has succeeded, dns_async_get_ipv4 shall return the discovered IPv4 address. ]*/
                result = dns->ip_v4;
            }
        }
        else
        {
            /* Codes_SRS_DNS_ASYNC_30_031: [ If dns_async_is_create_complete has not yet returned true, dns_async_get_ipv4 shall log an error and return 0. ]*/
            LogError("dns_async_get_ipv4 when not complete");
            result = 0;
        }
    }
    return result;
}
