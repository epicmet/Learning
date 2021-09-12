// line 2 is added by me and is my solution.
let sym = Symbol('hasOwnProperty');
let map = {one: true, two: true, sym: true};

console.log(map.hasOwnProperty("one"));
// → true
