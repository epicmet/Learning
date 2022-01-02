TAG=$1
CLOSING_TAG=${TAG% *}
TARGET_FILE=$2


cat $TARGET_FILE | sed -e "/<$TAG>/, /<\/$CLOSING_TAG>/ d " > new.html