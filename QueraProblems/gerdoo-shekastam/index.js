const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let [dist, tool, arz] = line.split(" ");

  dist = Number(dist);
  tool = Number(tool);
  arz = Number(arz);

  let x = 0;
  let y = (dist - x * tool) / arz;

  while (!Number.isInteger(y)) {
    x++;
    y = (dist - x * tool) / arz;

    if (y < 0) {
      console.log(-1);
      break;
    }
  }

  if (x >= 0 && y >= 0) {
    console.log(`${x} ${y}`);
  }
});
