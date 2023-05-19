import Foundation

extension Int {
  func plusTwo() -> Int {
    return self + 2
  }
}

let two = 2;
two.plusTwo()

struct Person {
  let firstName: String;
  let lastName: String;
}

extension Person {
  init(fullName: String) {
    let components = fullName.components(separatedBy: " ")
    self.init(
      firstName: components.first ?? fullName,
      lastName: components.last ?? fullName
    )
  }
}

let p = Person(fullName: "Foo bar")

protocol GoesVroom {
  var vroomValue: String { get };
  func goesVroom() -> String;
}

extension GoesVroom {
  func goesVroom() -> String {
    return "\(self.vroomValue) goes vroom"
  }
}

struct Car {
  let manufacturer: String;
  let model: String;
}

let modelX = Car(manufacturer: "Tesla", model: "X");

extension Car: GoesVroom {
  var vroomValue: String {
    "\(self.manufacturer) model \(self.model)"
  }
}

modelX.goesVroom()

class MyDouble {}
