a=2344
echo "a = $a"

echo

b=${a/23/BB}
echo "b = $b"
let "b += 1" # integer value of string is 0
echo "b = $b"
declare -i b # does not make any difference
echo "b = $b"

echo

c=BB44
d=${c/BB/23}
let "d += 1"
echo "d = $d"

echo

e='' # or e="" or e=
echo "e = $e"
let "e += 1" # null (and undeclared variables) values will transform into integer. Do not rely on it
echo "e = $e"

