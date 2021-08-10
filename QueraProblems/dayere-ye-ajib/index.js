const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let [n, k] = line.split(" ");
  n = Number(n);
  k = Number(k);

  let i = 1;
  let counter = 0;

  do {
    i += k;
    if (i > n) i -= n;
    counter++;
  } while (i !== 1);

  console.log(counter);
});
