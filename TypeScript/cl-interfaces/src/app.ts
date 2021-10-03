interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;
user1 = new Person("Mahdi");
// user1.name = "heyyyyyyyyyy";

user1.greet("Hello");
console.log(user1);
