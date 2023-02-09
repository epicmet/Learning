const readline = require("node:readline");

const { stdin: input, stderr: output } = process;

async function processLineByLine() {
  const rl = readline.createInterface({ input, output, terminal: false });

  let ln = 0; // line number to indicate where are we in terms of input
  const inputArr = [];

  for await (const line of rl) {
    if (!line) continue;

    inputArr.push(line);

    if (ln >= parseInt(inputArr[0]) * 2) break;
    ln++;
  }

  const answer = [];
  let numberOfTests = inputArr.shift();

  while (numberOfTests) {
    const [_numOfDisks, maxCapacity] = inputArr.shift().split(" ");
    const disksArr = inputArr
      .shift()
      .split(" ")
      .map((i) => parseInt(i));

    const max = maxTracks(+maxCapacity, disksArr);
    answer.push(max);

    numberOfTests--;
  }

  console.log(answer.join(" "));
}

function maxTracks(capacity, disksArr) {
  let max = 0;

  const sorted = disksArr.sort((a, b) => b - a);

  while (capacity > 0) {
    const num = sorted.pop();
    max++;

    capacity -= num;
  }

  return max;
}

processLineByLine();
