#!/bin/bash

# Version: 1.0 
# Date: 2018-05-25
# This bash script generates a CMSIS Software Pack:
#
# Requirements:
# bash shell
# curl
# zip (zip archiving utility) 
# 

# Upstream repositories
UPSTREAM_SDK_URL=https://api.github.com/repos/Azure/azure-iot-sdk-c
UPSTREAM_SDK_TAG=1.2.4
UPSTREAM_UAMQP_URL=https://api.github.com/repos/Azure/azure-uamqp-c
UPSTREAM_UAMQP_TAG=1.2.4
UPSTREAM_UMQTT_URL=https://api.github.com/repos/Azure/azure-umqtt-c
UPSTREAM_UMQTT_TAG=1.1.4
UPSTREAM_UTILITY_URL=https://api.github.com/repos/Azure/azure-c-shared-utility
UPSTREAM_UTILITY_TAG=1.1.4
UPSTREAM_PARSON_URL=https://api.github.com/repos/kgabis/parson
UPSTREAM_PARSON_TAG=master

# Pack Vendor
PACK_VENDOR=MDK-Packs
# Pack Name
PACK_NAME=Azure_IoT

# NO NEED TO EDIT BELOW
# Contributions merge
CONTRIB_MERGE=./contributions/merge
# Contributions additional folders/files
CONTRIB_ADD=./contributions/add

# Pack Destination Folder
PACK_DESTINATION=./

# Pack Build Folder
PACK_BUILD=./build

# Pack build utilities Repository
UTILITIES_URL=https://github.com/ARM-software/CMSIS_5/blob/master/
UTILITIES_TAG=1.0.0
UTILITIES_DIR=./Utilities
UTILITIES_OS=Win32
if [ $UTILITIES_OS = "Win32" ]; then
  ZIP="/c/Program\ Files/7-Zip/7z.exe"
else
  ZIP=zip
fi

# if not present, fetch utilities
if [ ! -d $UTILITIES_DIR ]; then
  mkdir $UTILITIES_DIR
  pushd $UTILITIES_DIR
  mkdir $UTILITIES_OS
  # PackChk
  curl -L $UTILITIES_URL/CMSIS/Utilities/$UTILITIES_OS/PackChk.exe?raw=true -o $UTILITIES_OS/PackChk.exe
  popd
fi

#if $PACK_BUILD folder does not exist create it and fetch content
if [ ! -d $PACK_BUILD ]; then
  mkdir $PACK_BUILD
  pushd $PACK_BUILD
  curl -L $UPSTREAM_SDK_URL/tarball/$UPSTREAM_SDK_TAG | tar xz --strip=1
  pushd c-utility
  curl -L $UPSTREAM_UTILITY_URL/tarball/$UPSTREAM_UTILITY_TAG | tar xz --strip=1
  popd  
  pushd uamqp
  curl -L $UPSTREAM_UAMQP_URL/tarball/$UPSTREAM_UAMQP_TAG | tar xz --strip=1
  popd  
  pushd umqtt
  curl -L $UPSTREAM_UMQTT_URL/tarball/$UPSTREAM_UMQTT_TAG | tar xz --strip=1
  popd
  pushd deps/parson
  curl -L $UPSTREAM_PARSON_URL/tarball/$UPSTREAM_PARSON_TAG | tar xz --strip=1
  popd
  popd
fi

# Remove some unused files
rm -f  $PACK_BUILD/.gitattributes
rm -f  $PACK_BUILD/.gitignore
rm -f  $PACK_BUILD/.gitmodules
rm -rf $PACK_BUILD/.github
rm -f  $PACK_BUILD/dependencies*
rm -rf $PACK_BUILD/build_all
rm -rf $PACK_BUILD/certs
rm -rf $PACK_BUILD/configs
rm -f  $PACK_BUILD/c-utility/.gitattributes
rm -f  $PACK_BUILD/c-utility/.gitignore
rm -f  $PACK_BUILD/c-utility/.gitmodules
rm -f  $PACK_BUILD/c-utility/dependencies*
rm -rf $PACK_BUILD/c-utility/archive
rm -rf $PACK_BUILD/c-utility/build_all
rm -rf $PACK_BUILD/c-utility/configs
rm -rf $PACK_BUILD/c-utility/jenkins
rm -rf $PACK_BUILD/c-utility/testtools
rm -rf $PACK_BUILD/c-utility/tools
rm -rf $PACK_BUILD/doc
rm -f  $PACK_BUILD/deps/parson/.gitignore
rm -rf $PACK_BUILD/iothub_client/build
rm -rf $PACK_BUILD/iothub_service_client
rm -rf $PACK_BUILD/jenkins
rm -rf $PACK_BUILD/network_e2e
rm -rf $PACK_BUILD/provisioning_client
rm -rf $PACK_BUILD/provisioning_service_client
rm -rf $PACK_BUILD/serializer/build
rm -rf $PACK_BUILD/testtools
rm -rf $PACK_BUILD/tools
rm -f  $PACK_BUILD/uamqp/.gitattributes
rm -f  $PACK_BUILD/uamqp/.gitignore
rm -f  $PACK_BUILD/uamqp/.gitmodules
rm -f  $PACK_BUILD/uamqp/dependencies*
rm -rf $PACK_BUILD/uamqp/build_all
rm -rf $PACK_BUILD/uamqp/configs
rm -rf $PACK_BUILD/uamqp/deps
rm -rf $PACK_BUILD/uamqp/design
rm -rf $PACK_BUILD/uamqp/jenkins
rm -rf $PACK_BUILD/uamqp/tools
rm -rf $PACK_BUILD/uamqp/uamqp_generator
rm -f  $PACK_BUILD/umqtt/.gitattributes
rm -f  $PACK_BUILD/umqtt/.gitignore
rm -f  $PACK_BUILD/umqtt/.gitmodules
rm -f  $PACK_BUILD/umqtt/dependencies*
rm -rf $PACK_BUILD/umqtt/build_all
rm -rf $PACK_BUILD/umqtt/configs
rm -rf $PACK_BUILD/umqtt/deps
rm -rf $PACK_BUILD/umqtt/jenkins
rm -rf $PACK_BUILD/umqtt/tools

# Merge contributions into $PACK_BUILD
# add (must not overwrite)
cp -vr $CONTRIB_ADD/* $PACK_BUILD/

# Merge (will overwrite existing files)
#cp -vrf $CONTRIB_MERGE/* $PACK_BUILD/

# License file
cp -f  $PACK_BUILD/LICENSE $PACK_BUILD/LICENSE.txt 

# Add newline at end of files
echo "" >> $PACK_BUILD/c-utility/inc/azure_c_shared_utility/tls_config.h
echo "" >> $PACK_BUILD/c-utility/src/constmap.c
echo "" >> $PACK_BUILD/c-utility/src/map.c
echo "" >> $PACK_BUILD/c-utility/src/singlylinkedlist.c
echo "" >> $PACK_BUILD/iothub_client/inc/iothub_client_retry_control.h
echo "" >> $PACK_BUILD/iothub_client/inc/iothubtransport_amqp_device.h
echo "" >> $PACK_BUILD/iothub_client/inc/uamqp_messaging.h
echo "" >> $PACK_BUILD/iothub_client/src/iothub_client_retry_control.c
echo "" >> $PACK_BUILD/iothub_client/src/iothubtransport_amqp_device.c
echo "" >> $PACK_BUILD/iothub_client/src/message_queue.c
echo "" >> $PACK_BUILD/serializer/src/datamarshaller.c
echo "" >> $PACK_BUILD/serializer/src/datapublisher.c
echo "" >> $PACK_BUILD/umqtt/inc/azure_umqtt_c/mqttconst.h

# Run Pack Check and generate PackName file
$UTILITIES_DIR/$UTILITIES_OS/PackChk.exe $PACK_BUILD/$PACK_VENDOR.$PACK_NAME.pdsc -n PackName.txt
errorlevel=$?

if [ $errorlevel -ne 0 ]; then
  echo "build aborted: pack check failed"
  exit
fi

PACKNAME=`cat PackName.txt`
rm -rf PackName.txt

# Archiving
# $ZIP a $PACKNAME
pushd $PACK_BUILD
/c/Program\ Files/7-Zip/7z.exe a ../$PACKNAME -tzip
popd
errorlevel=$?
if [ $errorlevel -ne 0 ]; then
  echo "build aborted: archiving failed"
  exit
fi

echo "build of pack succeeded"
# Clean up
echo "cleaning up"
rm -rf $PACK_BUILD
rm -rf $UTILITIES_DIR
