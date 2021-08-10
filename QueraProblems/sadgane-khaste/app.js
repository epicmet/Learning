const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let cnt = 0;
let firstNumber, secondNumber;

rl.on("line", (line) => {
  if (cnt === 0) {
    firstNumber = line;
    cnt++;
  } else if (cnt === 1) {
    secondNumber = line;

    let rf = Number(reverseIt(firstNumber));
    let rs = Number(reverseIt(secondNumber));
    if (rf == rs) {
      console.log(`${firstNumber} = ${secondNumber}`);
    } else if (rf > rs) {
      console.log(`${secondNumber} < ${firstNumber}`);
    } else {
      console.log(`${firstNumber} < ${secondNumber}`);
    }

    cnt--;
  }
});

function reverseIt(str) {
  let res = [];
  for (let char of str) {
    res.unshift(char);
  }
  return res.join("");
}
