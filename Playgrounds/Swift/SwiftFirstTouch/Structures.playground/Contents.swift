import Foundation

struct Person {
  let name: String;
  let age: Int;
}

let foo = Person(name: "foo", age: 20);
foo.age

struct CommodoreComputer {
  let name: String;
  let manufacturer: String;
  
  init(name: String) {
    self.name = name;
    self.manufacturer = "Commodore";
  }
}

let c64 = CommodoreComputer(
  name: "My Commodore"
)
c64.manufacturer

struct Person2 {
  let firstName: String;
  let lastName: String;
  var fullName: String {
    "\(firstName) \(lastName)"
  }
}

let fooBar = Person2(firstName: "foo", lastName: "bar")
fooBar.fullName

struct Car {
  var currentSpeed: Int;
  mutating func drive(speed: Int) {
    "Driving ..."
    currentSpeed = speed;
  }
}

let immutableCar = Car(currentSpeed: 10)
// immutableCar.drive(speed: 5)

var mutableCar = Car(currentSpeed: 10)

let copy = mutableCar;
mutableCar.drive(speed: 30)
mutableCar.currentSpeed
copy.currentSpeed

struct Bike {
  let manufacturer: String;
  let currentSpeed: Int;
  func copy(currentSpeed: Int) -> Bike {
    Bike(
      manufacturer: self.manufacturer, currentSpeed: currentSpeed
    )
  }
}

let bike1 = Bike(manufacturer: "HD", currentSpeed: 10)
let bike2 = bike1.copy(currentSpeed: 30)
bike1.currentSpeed
bike2.currentSpeed
