#! /bin/bash

DESTINATION=$1
read -p "please enter a fileprefix: " FILE_PREFIX

if [ -z $DESTINATION ]; then
	echo "no path provided, defaulting to ./temp"
	DESTINATION=temp
fi

mkdir -p $DESTINATION
cd $DESTINATION
touch ${FILE_PREFIX}{1..10}.txt
echo done

