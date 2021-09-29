function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) console.log(phrase + (n1 + n2));
  else return phrase + (n1 + n2);
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

// objects

const person = {
  name: "Matts",
  age: 21,
  hobbies: ["Sports", "Cooking"],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
