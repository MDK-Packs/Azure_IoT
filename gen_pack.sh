#!/bin/bash
# Version: 1.2
# Date: 2020-12-21
# This bash script generates a CMSIS Software Pack:
#
# Pre-requisites:
# - bash shell (for Windows: install git for Windows)
# - 7z in path (zip archiving utility)
#   e.g. Ubuntu: sudo apt-get install p7zip-full p7zip-rar)
# - PackChk is taken from latest install CMSIS Pack installed in $CMSIS_PACK_ROOT
# - xmllint in path (XML schema validation; available only for Linux)

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
UPSTREAM_PARSON_TAG=2be6991

# Contributions merge
CONTRIB_MERGE=./contributions/merge
# Contributions additional folders/files
CONTRIB_ADD=./contributions/add

############### EDIT BELOW ###############
# Extend Path environment variable locally
#

OS=$(uname -s)
case $OS in
  'Linux')
    if [ -z ${CMSIS_PACK_ROOT+x} ] ; then
      CMSIS_PACK_ROOT="/home/$USER/.arm/Packs"
    fi
    CMSIS_TOOLSDIR="$(ls -drv ${CMSIS_PACK_ROOT}/ARM/CMSIS/* | head -1)/CMSIS/Utilities/Linux64"
    ;;
  'WindowsNT'|MINGW*|CYGWIN*)
    if [ -z ${CMSIS_PACK_ROOT+x} ] ; then
      CMSIS_PACK_ROOT="$LOCALAPPDATA/Arm/Packs"
    fi
    CMSIS_PACK_ROOT="/$(echo ${CMSIS_PACK_ROOT} | sed -e 's/\\/\//g' -e 's/://g' -e 's/\"//g')"
    CMSIS_TOOLSDIR="$(ls -drv ${CMSIS_PACK_ROOT}/ARM/CMSIS/* | head -1)/CMSIS/Utilities/Win32"
    ;;
  'Darwin') 
    echo "Error: CMSIS Tools not available for Mac at present."
    exit 1
    ;;
  *)
    echo "Error: unrecognized OS $OS"
    exit 1
    ;;
esac

PATH_TO_ADD="$CMSIS_TOOLSDIR"

[[ ":$PATH:" != *":$PATH_TO_ADD}:"* ]] && PATH="${PATH}:${PATH_TO_ADD}"
echo $PATH_TO_ADD appended to PATH
echo " "

# Pack warehouse directory - destination 
PACK_WAREHOUSE=./output

# Temporary pack build directory
PACK_BUILD=./build

############ DO NOT EDIT BELOW ###########
echo Starting CMSIS-Pack Generation: `date`
# Zip utility check 
ZIP=7z
type -a "${ZIP}"
errorlevel=$?
if [ $errorlevel -gt 0 ]
  then
  echo "Error: No 7zip Utility found"
  echo "Action: Add 7zip to your path"
  echo " "
  exit
fi

# Pack checking utility check
PACKCHK=PackChk
type -a ${PACKCHK}
errorlevel=$?
if [ $errorlevel != 0 ]
  then
  echo "Error: No PackChk Utility found"
  echo "Action: Add PackChk to your path"
  echo "Hint: Included in CMSIS Pack:"
  echo "$CMSIS_PACK_ROOT/ARM/CMSIS/<version>/CMSIS/Utilities/<os>/"
  echo " "
  exit
fi
echo " "

# Locate Package Description file
# check whether there is more than one pdsc file
pushd $CONTRIB_ADD
NUM_PDSCS=`ls -1 *.pdsc | wc -l`
PACK_DESCRIPTION_FILE=`ls *.pdsc`
popd
if [ ${NUM_PDSCS} -lt 1 ]
  then
  echo "Error: No *.pdsc file found in current directory"
  echo " "
  exit
elif [ ${NUM_PDSCS} -gt 1 ]
  then
  echo "Error: Only one PDSC file allowed in directory structure:"
  echo "Found:"
  echo "$PACK_DESCRIPTION_FILE"
  echo "Action: Delete unused pdsc files"
  echo " "
  exit
fi

SAVEIFS=$IFS
IFS=.
set ${PACK_DESCRIPTION_FILE}
# Pack Vendor
PACK_VENDOR=$1
# Pack Name
PACK_NAME=$2
echo "Generating Pack Version: for $PACK_VENDOR.$PACK_NAME"
echo " "
IFS=$SAVEIFS

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

\
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

# Run Schema Check (for Linux only):
# sudo apt-get install libxml2-utils

if [ $(uname -s) = "Linux" ]
  then
  echo "Running schema check for ${PACK_VENDOR}.${PACK_NAME}.pdsc"
  xmllint --noout --schema "${CMSIS_TOOLSDIR}/../PACK.xsd" "${PACK_BUILD}/${PACK_VENDOR}.${PACK_NAME}.pdsc"
  errorlevel=$?
  if [ $errorlevel -ne 0 ]; then
    echo "build aborted: Schema check of $PACK_VENDOR.$PACK_NAME.pdsc against PACK.xsd failed"
    echo " "
    exit
  fi
else
  echo "Use MDK PackInstaller to run schema validation for $PACK_VENDOR.$PACK_NAME.pdsc"
fi

# Run Pack Check and generate PackName file with version
"${PACKCHK}" "${PACK_BUILD}/${PACK_VENDOR}.${PACK_NAME}.pdsc" \
  -i "${CMSIS_PACK_ROOT}/.Web/ARM.CMSIS.pdsc" \
  -i "${CMSIS_PACK_ROOT}/.Web/ARM.mbedTLS.pdsc" \
  -i "${CMSIS_PACK_ROOT}/.Web/MDK-Packs.IoT_Socket.pdsc" \
  -x M396 -x M382 \
  -n PackName.txt
errorlevel=$?
if [ $errorlevel -ne 0 ]; then
  echo "build aborted: pack check failed"
  echo " "
  exit
fi

PACKNAME=$(cat PackName.txt)
rm -rf PackName.txt

# Archiving
# $ZIP a $PACKNAME
echo "creating pack file $PACKNAME"
#if $PACK_WAREHOUSE directory does not exist create it
if [ ! -d "$PACK_WAREHOUSE" ]; then
  mkdir -p "$PACK_WAREHOUSE"
fi
pushd "$PACK_WAREHOUSE" > /dev/null
PACK_WAREHOUSE=$(pwd)
popd  > /dev/null
pushd "$PACK_BUILD" > /dev/null
PACK_BUILD=$(pwd)
"$ZIP" a "$PACK_WAREHOUSE/$PACKNAME" -tzip
popd  > /dev/null
errorlevel=$?
if [ $errorlevel -ne 0 ]; then
  echo "build aborted: archiving failed"
  exit
fi

echo "build of pack succeeded"
# Clean up
echo "cleaning up ..."

rm -rf "$PACK_BUILD"
echo " "

echo Completed CMSIS-Pack Generation: $(date)
