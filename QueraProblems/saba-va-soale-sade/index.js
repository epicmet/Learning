const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let [n, k] = line.split(" ");
  n = Number(n);
  k = Number(k);

  for (let i = 0; i < k; i++) {
    n = n / 2;
  }

  n = Math.floor(n);
  console.log(n);
});
