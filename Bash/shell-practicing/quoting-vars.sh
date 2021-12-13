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
