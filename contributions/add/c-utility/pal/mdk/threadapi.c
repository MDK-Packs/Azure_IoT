// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

#include "cmsis_os2.h"
#include "azure_c_shared_utility/threadapi.h"
#include "azure_c_shared_utility/xlogging.h"

THREADAPI_RESULT ThreadAPI_Create(THREAD_HANDLE* threadHandle, THREAD_START_FUNC func, void* arg)
{
    (void)threadHandle;
    (void)func;
    (void)arg;
    LogError("Multi-threading is not supported.");
    return THREADAPI_ERROR;
}

THREADAPI_RESULT ThreadAPI_Join(THREAD_HANDLE threadHandle, int *res)
{
    (void)threadHandle;
    (void)res;
    LogError("Multi-threading is not supported.");
    return THREADAPI_ERROR;
}

void ThreadAPI_Exit(int res)
{
    (void)res;
    LogError("Multi-threading is not supported.");
}

void ThreadAPI_Sleep(unsigned int milliseconds)
{
    osDelay(milliseconds);
}
