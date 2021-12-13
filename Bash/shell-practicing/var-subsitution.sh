hello="A B C  D"
echo $hello
echo "$hello"
echo '$hello'

echo "--- --- --- ---"

whatever=2\ dumb\ boys;
echo $whatever

echo "--- --- --- ---"

a=879
echo -n "Values of \"a\" in a loop: "
for a in 7 8 9 11; do
  echo -n "$a "
done

echo
echo "--- --- --- ---"

b=`echo Hello!`
echo $b
