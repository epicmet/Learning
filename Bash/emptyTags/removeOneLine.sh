#!/bin/bash

TARGET_FILE=$1

cat $TARGET_FILE | tr -d "\n" > new.html
sed -i -E "s/<script id=\"config\">(.*)<\/script>/<script id=\"config\"><\/script>/g" new.html
