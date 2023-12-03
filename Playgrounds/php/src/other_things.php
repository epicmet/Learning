<?php
// foreach ($_SERVER as $key => $value) {
//   if(is_array($value)) {
//     echo "$key : ";
//     print_r($value);
//   } else {
//     echo "$key : $value";
//   }
//   echo "<br>";
//   echo "<br>";
// }

if(isset($_POST['submit'])) {
  echo filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
  echo "<br>";
  echo htmlspecialchars($_POST['age']);
  echo "<br>";
}
?>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" name="name" />
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="text" name="age" />
  </div>
  <input type="submit" value="Submit" name="submit"/>
</form>
