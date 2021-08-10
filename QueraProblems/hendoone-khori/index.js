const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt = 0;

rl.on("line", (line) => {
  if (cnt === 0) {
    let wmCount = Number(line);
    cnt++;
  } else {
    let wmWeightsArr = line.split(" ");
    let biggest = -Infinity;
    for (let i = 0; i < wmWeightsArr.length; i++) {
      biggest = Math.max(biggest, Number(wmWeightsArr[i]));
    }
    console.log(wmWeightsArr.indexOf(biggest.toString()) + 1);
  }
});
