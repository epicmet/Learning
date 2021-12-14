echo "This will print
in to lines"

echo

echo "But this one is \
on one line"

echo "\v\v\v\v\v"
echo -e "\v\v\v\v"

echo

echo -e "\042"

echo

echo $'\n'

echo $'\a'

quote=$'\042'
echo "$quote Quoted string $quote and this lies outside the quotes."
echo

ABC=$'\101\102\103\010'
echo $ABC
echo

echo \\\\\\\z
echo \\\z
echo `echo \\\\\\\z`
#            \ \ \ z
#               \z