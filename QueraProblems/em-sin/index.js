const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const sins = ["sib", "samanoo", "serke", "sonbol", "seke", "sir", "somagh"];

rl.on("line", (line) => {
  let forgetSinNum = Number(line);

  if (forgetSinNum > 7) forgetSinNum = 7;

  for (let i = 0; i < forgetSinNum; i++) {
    console.log(sins[i]);
  }
});
