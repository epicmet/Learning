The fact that we have functions as scopes lets us to hide some variables and decelerations, because should put variables where we need them and don't let them pollute other scopes where we don't need them.

There is a slight chance of `Collision` in our variables, where two variables with the same identifier (maybe from two libraries) exists in the same scope! well that's not good. We have some solution for this problem, `Global namespaces` or `Module management`. Using namespaces is easy just wrap your variables and function inside a namespaces specific to you library, this way you are not colliding with other variables.

```js
var MyReallyCoolLibrary = {
  awesome: "stuff",
  doSomething: function() { ... }
  doOtherThing: function() { ... }
}
```

The more modern way of avoiding collisions is `Module management`, it's no magic it just helps you inject your variables in what ever scope you need. We'll talk about it more.

Wrapping functions around some pieces of code is great but the function deceleration itself is polluting the global scope, to solve this problem we can use `IIFE`s.

```js
(function foo() { ... })()
```

This way the identifier `foo` can only be found in that `{ ... }` scope and does not bound to the enclosing scope of itself.

Generally avoid using anonymous function expressions and instead use the named function everywhere, because: anonymous function have no useful name to show on the call stack when an error happens, without a name if the function needs to refer to itself (for example in a recursive function) it should use deprecated `arguments.callee`, without a name or identifier unbinding from a event listener is impossible.

Block scoping happens when variables hijack the enclosing block as the scope, for example a if block. `with` and the `catch` block in `try/catch` are block scoped and variables define in those blocks just belong to that block and can not be accessed out of them. ES6 introduced a new keyword `let`. `let` attaches the variables to the enclosing block.

By using blocks we can help garbage collection do its job more efficient.

`const` is just like `let` but its value can not be changed after deceleration.
