type Combinable = number | string;
type IDK = boolean | number;

type reversedU = Combinable & IDK;

type Admin = {
  name: string;
  mood: string;
};

type Employee = {
  name: string;
  eID: number;
};

type NewTypeOfAdmin = Admin & Employee;

const e1: NewTypeOfAdmin = {
  name: "matthew",
  mood: "Ehhhh",
  eID: 123,
};

console.log(e1);
