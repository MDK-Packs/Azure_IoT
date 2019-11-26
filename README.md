# Azure_IoT
CMSIS Software Pack generator adding and merging contributions not yet available in upstream repo.

## Targeted public repositories (upstream): 
- Azure IoT SDKs and Libraries: https://github.com/Azure/azure-iot-sdk-c
- Azure C Shared Utility: https://github.com/Azure/azure-c-shared-utility
- Azure MQTT: https://github.com/Azure/azure-umqtt-c
- Azure uAMQP: https://github.com/Azure/azure-uamqp-c
- Parson: https://github.com/kgabis/parson

This repository provides a bash script to build a CMSIS-Pack. 
It fetches a preconfigured version of the upstream repositories, adds a set of
files contained in the directory named 'contributions', and creates a ZIP archive.  
The contributions directory contains the subfolder:
- 'add': containing files for inclusion into the pack that are not (yet) present in the upstream repository  

The aim is to make the files from the 'add' folder part of the upstream repository via pull-requests. 
Once all files are included in the upstream repository this repository will become obsolete.

## Prerequisites:
- git bash (Windows: https://gitforwindows.org/)
- ZIP archive creation utility (e.g. 7-Zip)
- Doxygen version 1.8.6 (https://sourceforge.net/projects/doxygen/files/rel-1.8.6/)

## Configuration:
In order to build the CMSIS-Pack, you need to run the bash shell script `./gen_pack.sh`
