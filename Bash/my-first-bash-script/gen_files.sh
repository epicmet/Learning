#! /bin/bash

DESTINATION=./temp
FILE_PREFIX=file

mkdir -p $DESTINATION
cd $DESTINATION
touch ${FILE_PREFIX}{1..10}.txt
echo done

