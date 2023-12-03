<?php
echo "I see you found the foo page! Good job";
echo "<br>";

$name = "mahdi";
echo "Hi " . $name;
echo "<br>";

$age = '5' + '18';

echo "Age: "; 
var_dump($age);

const FOO = "CONSTANT";

echo FOO;
echo "<br>";

$numbers = [1,2,3,4];
print_r($numbers);
echo "<br>";
var_dump($numbers);
echo "<br>";

$fruits = array('apple', 'orange', 'pear');
echo $fruits[1];
echo "<br>";

$colors = [
  1 => 'red',
  4 => 'green',
  7 => 'blue'
];

echo $colors[4];
echo "<br>";

$hex = [
  'red' => '#f00',
  'green' => '#0f0',
  'blue' => '#00f'
];

echo $hex['blue'];
echo "<br>";

$person = [
  'first_name' => 'Mahdi',
  'last_name' => 'Aghaei',
  'email' => "foo@bar.com"
];

if(!empty($person)) {
  echo $person['first_name'];
  echo "<br>";
}

$people = [
  [
  'first_name' => 'Mahdi',
  'last_name' => 'Aghaei',
  'email' => "foo@bar.com"
  ],
  [
  'first_name' => 'Javad',
  'last_name' => 'Mousavi',
  'email' => 'bar@foo.com' 
  ],
];
echo json_encode($people);
echo "<br>";

echo $people[3]['last_name'] ?? null;

$json = json_decode("{\"foo\": \"bar\"}");
var_dump($json);
echo "<br>";

if(isset($json->foo)) {
  echo $json->foo;
} else {
  echo "foo is not set";
}
echo "<br>";

$t = date("H");
echo $t;
echo "<br>";
if($t < 12) {
  echo "good morning";
} else if($t < 17) {
  echo "good afternoon";
} else {
  echo "good evening";
}
echo "<br>";

$fav_color = "lavendar";
switch($fav_color) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
};
echo "<br>";

foreach($people as $person) {
  echo $person['first_name'];
  echo "<br>";
}

foreach($fruits as $index => $fruit) {
  echo $index . " - " . $fruit;
  echo "<br>";
}

echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";

function register_user($name, $email) {
  $user = [
    'name' => $name,
    'email' => $email
  ];
  echo json_encode($user);
}

register_user('mahdi', 'foo@bar.com');
echo "<br>";

function sum($n1, $n2 = 1) {
  return $n1 + $n2;
}

$sum_1 = sum(5, 10);
echo $sum_1;
echo "<br>";
$sum_2 = sum(5);
echo $sum_2;
echo "<br>";

$sub = function($n1, $n2) {
  return $n1 - $n2;
};
echo $sub(10, 5);
echo "<br>";

$divide = fn($n1, $n2) => $n1 / $n2;
echo $divide(10, 5);
echo "<br>";

$multiply = fn($n1) => fn($n2) => $n1 * $n2;
echo $multiply(5)(10);
echo "<br>";

echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";

$arr1 = [1,2,3];
$arr2 = [4,5,6];

if($arr1 == $arr2) {
  echo "equal";
} else {
  echo "not equal";
}
echo "<br>";
if($arr1 === $arr2) {
  echo "equal";
} else {
  echo "not equal";
}
echo "<br>";

$arr3 = $arr1;
if($arr1 == $arr3) {
  echo "equal";
} else {
  echo "not equal";
}
echo "<br>";
if($arr1 === $arr3) {
  echo "equal";
} else {
  echo "not equal";
}
echo "<br>";

$arr4 = [1,2,3];
if($arr1 == $arr4) {
  echo "equal";
} else {
  echo "not equal";
}
echo "<br>";
if($arr1 === $arr4) {
  echo "equal";
} else {
  echo "not equal";
}
echo "<br>";

echo "<br>";
echo "<br>";
echo "<br>";
echo "<br>";

$my_str = "Hello World";
echo substr($my_str, 0, 4);
echo "<br>";

$script = "<script>alert('foo');</script>";
echo htmlentities($script);
echo "<br>";

printf("%s is %d years old", "mahdi", 18);
echo "<br>";
