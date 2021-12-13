#!/bin/bash

DATE=`date`
LOGGED_USERS=`who`
UPTIME=`uptime`

if [ ! -e "info.txt" ]; then
  {
    echo -n "Todays date is : "
    echo $DATE

    echo -n "Logged in users: "
    echo $LOGGED_USERS

    echo -n "System Uptime is: "
    echo $UPTIME
  } > info.txt  
else 
  echo "Could not save information because there is already a file named info.txt in this directory"
  exit 1
fi

exit 0