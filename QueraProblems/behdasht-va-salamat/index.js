const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let cnt = 0;
let grade, days;

rl.on("line", (line) => {
  if (cnt === 0) {
    grade = Number(line);
    cnt++;
  } else {
    days = Number(line);

    if (days == 0) {
      console.log(20);
    } else if (days == 7) {
      console.log(grade);
    } else {
      for (let i = 0; i < days; i++) {
        grade--;
      }
      if (grade < 0) grade = 0;

      console.log(grade);
    }
  }
});
