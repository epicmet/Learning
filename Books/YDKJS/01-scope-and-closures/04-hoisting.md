Variables that we define in a scope can be accessed for the whole scope no matter where we defined them. This means metaphorically the variables hoist up to the top of their scope.

```js
a = 2;

var a;

console.log(a); // 2
```

The snippet above would look something like this:

```js
var a;

a = 2;

console.log(a); // 2
```

Look at this:

```js
console.log(a); // undefined

var a = 2;
```

this one would be like this:

```js
var a;

console.log(a);

a = 2;
```

Function decelerations hoist too.

```js
foo(); // 10

function foo() {
  console.log(10);
}
```

But not the function expression.

```js
foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
  ...
}
```

When combining function with variables, function have the upper hand:

```js
foo(); // 1

var foo;

function foo() {
  console.log(1);
}

foo = function () {
  console.log(2);
};
```

In the snippet above the `var` deceleration is ignored. Also if there are multiple function decelerations with the same identifier the latest one would overwrite every one of them.

For `let` and `const` there are different rules for hoisting that we will see shortly in future.
