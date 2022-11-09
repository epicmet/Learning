const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.on("line", (num) => {
  const sum = sumToOne(num);

  console.log(sum);
});

function sumToOne(n) {
  if (n < 10) return n;

  const res = n
    .toString()
    .split("")
    .reduce((sum, curr) => sum + parseInt(curr), 0);

  return sumToOne(res);
}
