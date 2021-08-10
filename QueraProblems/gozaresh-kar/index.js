const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;
let sum = 0;
let n, k;

rl.on("line", (line) => {
  if (cnt === 0) {
    [n, k] = line.split(" ");
    n = Number(n);
    k = Number(k);
    cnt++;
  } else {
    let temp = Number(line);
    sum += temp;
    cnt++;
    if (cnt - 1 >= n) {
      if (sum >= k) console.log("YES");
      else console.log("NO");
    }
  }
});
