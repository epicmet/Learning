#! /bin/bash

DESTINATION=$1
read -p "please enter a fileprefix: " FILE_PREFIX

mkdir -p $DESTINATION
cd $DESTINATION
touch ${FILE_PREFIX}{1..10}.txt
echo done

