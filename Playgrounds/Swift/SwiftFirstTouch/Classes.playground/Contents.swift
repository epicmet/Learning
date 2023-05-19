import Foundation

class Person {
  var name: String;
  var age: Int;
  
  init(name: String, age: Int) {
    self.name = name;
    self.age = age;
  }
  
  func increaseAge() {
    self.age += 1
  }
}

let foo = Person(name: "Foo", age: 20)
foo.age
foo.increaseAge()
foo.age

foo.age
let bar = foo
bar.increaseAge()
bar.age
foo.age

if bar === foo {
  "same"
}

class Vehicle {
  func goVroom() -> String {
    return "Vroom Vroom!"
  }
}

class Car : Vehicle {}

let car = Car()
car.goVroom()

class Person2 {
  private(set) var age: Int;
  
  init(age: Int) {
    self.age = age;
  }
  
  func increaseAge() {
    self.age += 1;
  }
}

let baz = Person2(age: 10)
baz.age
baz.increaseAge()
baz.age

// baz.age += 10

class Tesla {
  var manufacturer = "Tesla";
  var model: String;
  var year: Int;
  
  init() {
    self.model = "X";
    self.year = 2023
  }
  
  init(
    model: String,
    year: Int
  ) {
    self.model = model;
    self.year = year;
  }
  
  convenience init(model: String) {
    self.init(model: model, year: 2023)
  }
}

let t = Tesla(model: "S", year: 2020);
let t2 = Tesla();
let t3 = Tesla(model: "3")

class TeslaModelY: Tesla {
  override init() {
    super.init(model: "Y", year: 2023)
  }
}

let modelY = TeslaModelY();

let fooBar = Person2(age: 20)
fooBar.age
func doSomething(with person: Person2) {
  person.increaseAge()
}
doSomething(with: fooBar)
fooBar.age

class MyClass {
  init() {
    "initialized"
  }
  func doSomething() {
    "do somehting"
  }
  
  deinit {
    "deinitialzed"
  }
}

let myClouser = {
  let myClass = MyClass()
  myClass.doSomething()
}

myClouser()
