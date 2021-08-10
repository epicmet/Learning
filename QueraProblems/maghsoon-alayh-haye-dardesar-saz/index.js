const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let n = Number(line);

  let divisorsArr = new Array(n);
  for (let k = 0; k < n; k++) {
    divisorsArr[k] = [];
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisorsArr[i - 1].push(j);
      }
    }
  }

  let res = [].concat(...divisorsArr);
  let sum = res.reduce((a, b) => a + b);

  console.log(`${res.length} ${sum}`);
});
