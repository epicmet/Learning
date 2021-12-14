# I dont understand this shit yet

let "num = (( 0 && 1 ))"
echo $num   # 0
# But ...
let "num = (( 0 && 1 ))"
echo $?     # 1

echo

let "num = (( 200 || 11 ))"
echo $num   # 1
let "num = (( 200 || 11 ))"
echo $?     # 0

echo "---"

echo "Testing \"0\""
if [ 0 ]      # zero
then
  echo "0 is true."
else          # Or else ...
  echo "0 is false."
fi            # 0 is true.

echo

echo "Testing \"1\""
if [ 1 ]
then
  echo "1 is true."
else
  echo "1 is false."
fi

echo

echo "Testing \"-1\""
if [ -1 ]
then
  echo "-1 is true."
else
  echo "-1 is false."
fi

echo

echo "Testing \"NULL\""
if [ ]
then
  echo "NULL is true."
else
  echo "NULL is false."
fi

echo

echo "Testing \"xyz\""
if [ xyz ]
then
  echo "Random string is true."
else
  echo "Random string is false."
fi

echo

echo "Testing \"\$xyz\""
if [ $xyz ]
then
  echo "Uninitialized variable is true."
else
  echo "Uninitialized variable is false."
fi

echo

echo "Testing \"-n \$xyz\""
if [ -n "$xyz" ]
then
  echo "Uninitialized variable is true."
else
  echo "Uninitialized variable is false."
fi

echo


xyz=          # Initialized, but set to null value.

echo "Testing \"-n \$xyz\""
if [ -n "$xyz" ]
then
  echo "Null variable is true."
else
  echo "Null variable is false."
fi


echo

echo "Testing \"false\""
if [ "false" ]
then
  echo "\"false\" is true."
else
  echo "\"false\" is false."
fi

echo

echo "Testing \"\$false\""
if [ "$false" ]
then
  echo "\"\$false\" is true."
else
  echo "\"\$false\" is false."
fi

echo 

echo "Testing \"\$true\""
if [ "$true" ]
then
  echo "\"\$true\" is true."
else
  echo "\"\$true\" is false."
fi

echo '---'

decimal=15
octal=017
hex=0x0f

if [ $decimal -eq $octal ]; then
  echo "$deciaml equals to $octal"
else
  echo "$decimal is not equal to $octal"
fi
echo
if [[ $decimal -eq $octal ]]; then
  echo "$decimal equals to $octal"
else
  echo "$decimal is not equal to $octal"
fi