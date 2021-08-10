let firstNumber = readline();
let secondNumber = readline();

let rf = Number(reverseIt(firstNumber));
let rs = Number(reverseIt(secondNumber));

if (rf == rs) {
  print(`${firstNumber} = ${secondNumber}`);
} else {
  if (rf > rs) {
    print(`${secondNumber} < ${firstNumber}`);
  } else {
    print(`${firstNumber} < ${secondNumber}`);
  }
}

function reverseIt(str) {
  let res = [];
  for (let s of str) {
    res.unshift(s);
  }
  return res.join("");
}
