#! /bin/bash

friends=(Kyle Marc Jem Brian Sarah)

echo My Second friend is  ${friends[1]}

for friend in ${friends[*]}
do
	echo friend: $friend
done

echo I have ${#friends[*]} frineds

