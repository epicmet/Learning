List="one two three"

for a in $List
do
  echo "$a"
done

echo "---"

for a in "$List"
do
  echo "$a"
done

echo "---"

var="Two bites"
echo "\$var = "$var""
echo "\$var = '$var'"
echo
echo '\$var = $var'
echo '\$var = "$var"'