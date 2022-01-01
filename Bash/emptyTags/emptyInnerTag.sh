#!/bin/bash

# Sample:
# <script id="config">
#   const script = document.createElement("script");
#   script.src = "";
#   //other code
# </script>

TAG=$1
CLOSING_TAG=${TAG% *}
TARGET_FILE=$2
SED_RES=$(sed -n "/<$TAG>/,/<\/$CLOSING_TAG>/p" "./$TARGET_FILE")

ONE_LINED=''
for LINE in "$SED_RES"; do
  ONE_LINED="$ONE_LINED$LINE"
done

FINAL=$(echo $ONE_LINED | sed "s/>.*</></g")
echo "$FINAL"
