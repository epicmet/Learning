#!/bin/bash

DATE=`date`
LOGGED_USERS=`who`
UPTIME=`uptime`

echo -n "Todays date is : "
echo $DATE

echo -n "Logged in users: "
echo $LOGGED_USERS

echo -n "System Uptime is: "
echo $UPTIME

if [ ! -e "info.txt" ]; then
  echo "Date: $DATE" >> info.txt
  echo "Logged users: $LOGGED_USERS" >> info.txt
  echo "Uptime: $UPTIME" >> info.txt
else 
  echo "Could not save information because there is already a file named info.txt in this directory"
  exit 1
fi

exit 0