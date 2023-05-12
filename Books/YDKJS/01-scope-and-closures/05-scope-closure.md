Whenever a function is returned form another function, the returned function has closure over the variables and decelerations defined in the outer function. In other words if you envoke the returned function in some other context it still has access to those variables and decelerations in the first function.

```js
function foo() {
  var counter = 0;

  function bar() {
    console.log("count is:", count);
    count++;
  }

  return bar;
}

var baz = foo();

baz(); // Closure here!
```

One famous example of closure is this foo loop:

```js
for (var i = 0; i <= 5; i++) {
  setTimout(function timer() {
    console.log(i);
  }, i * 1000);
}
```

the out put of the snippet above would be five `5`s with one second between each! The reason is the `timer` function has closure over the `i` variable and when ever the time has come to envoke the `timer` function, it reaches out and retrieves the value for `i` (before the first setTimeout the for loop has finished and `i` is 5).

To solve this we should attach the `timer` closure to another function scope:

```js
for (var i = 0; i <= 5; i++) {
  (function (j) {
    setTimout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

Closure lets us use cool module patterns

```js
var foo = (function CoolModule() {
  var somthing = "cool";
  var another = [1, 2, 3];

  function doSomthing() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join("!"));
  }

  return {
    doSomthing,
    doAnother,
  };
})();

foo.doSomthing(); // cool
foo.doAnother(); // 1!2!3
```
