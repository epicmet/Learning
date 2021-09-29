function add(input1: number | string, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number")
    return input1 + input2;
  else return input1.toString() + input2.toString();
}

const numbers = add(1, 3);
const names = add("matt", "s");

console.log(numbers, names);
