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
type People = Admin | Employee;

const e1: NewTypeOfAdmin = {
  name: "matthew",
  mood: "Ehhhh",
  eID: 123,
};

function logPerson(emp: People) {
  console.log(emp.name);
  if ("eID" in emp) {
    console.log(emp.eID);
  }
}

logPerson({ name: "Mahdi", mood: "eh" });

class Car {
  drive() {
    console.log("Jump in baby");
  }
}

class Truck {
  drive() {
    console.log("Lesssss goooo");
  }

  letMeIn(inp: string) {
    console.log("let me innnnnnnn " + inp);
  }
}

type Vehicle = Car | Truck;

function letsDrive(veh: Vehicle) {
  veh.drive();
  if (veh instanceof Truck) {
    veh.letMeIn("mathiew!!!!");
  }
}

letsDrive(new Truck());
