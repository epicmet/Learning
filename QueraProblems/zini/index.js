// needs debug

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, arr;
let cnt = -1;

rl.on("line", (line) => {
  if (cnt === -1) {
    [n, m] = line.split(" ");
    n = Number(n);
    m = Number(m);

    arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = [];
    }

    cnt++;
  } else {
    let temp = line.split(" ");
    for (let i = 0; i < temp.length; i++) {
      arr[cnt].push(temp[i]);
    }

    cnt++;
    if (cnt >= n) {
      let counter = 0;

      for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
          let num = arr[i][j];
          if (i !== 0 && i !== n - 1 && j !== 0 && j !== m - 1) {
            if (
              (arr[i - 1][j] > num &&
                arr[i + 1][j] > num &&
                arr[i][j + 1] < num &&
                arr[i][j - 1] < num) ||
              (arr[i - 1][j] < num &&
                arr[i + 1][j] < num &&
                arr[i][j + 1] > num &&
                arr[i][j - 1] > num)
            )
              counter++;
          }
        }
      }

      console.log(counter);
    }
  }
});
