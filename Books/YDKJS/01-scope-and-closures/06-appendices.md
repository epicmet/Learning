Dynamic scope is another form of scope as oppose to lexical scope that where the function is envoking is important and not where it is defined.

_THIS IS JUST DEMONSTRATION_

```js
var a = 1;

function foo() {
  console.log(a);
}

function bar() {
  var a = 2;
  foo(); // 2 !!
}

bar();
```

Many tools that transform the ES6 javascript to for example ES3 (where there is no `let`) use the `catch` block. They transform this:

```js
{
  let a = 2;
  console.log(a);
}
```

To:

```js
try {
  throw 2;
} catch (a) {
  console.log(a);
}
```
