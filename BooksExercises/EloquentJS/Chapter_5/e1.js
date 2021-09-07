let arrays = [[1, 2, 3], [4, 5], [6]];
// → [1, 2, 3, 4, 5, 6]

arrays = arrays.reduce((final, curr) => final.concat(curr), []);

console.log(arrays);
