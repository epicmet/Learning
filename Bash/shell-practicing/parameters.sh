#!/bin/bash

echo "The name of this script is \"$0\"" # reletive path
echo "The name of this script is \"`basename $0`\"" # only the file name (see `man basename`)

echo

echo $#
echo $*

echo

args=$#
lastarg=${!args}
echo $lastarg
# OR echo ${!#}

echo

variable=$1_
echo "variable = $variable"