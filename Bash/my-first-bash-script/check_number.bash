#! /bin/bash

if [ $1 -gt 10 ]; then 
	echo "Greater than ten"
elif [ $1 -lt 10 ]; then
	echo "Less than ten"
else 
	echo "equals ten"
fi

