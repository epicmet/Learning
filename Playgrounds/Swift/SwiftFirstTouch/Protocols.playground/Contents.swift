import Foundation

protocol CanBreathe {
  func breath()
}

struct Animal: CanBreathe {
  func breath() {
    "animal is breathing"
  }
}

struct Person: CanBreathe {
  func breath() {
    "Person breahting"
  }
}

let dog = Animal();
dog.breath()

protocol CanJump {
  func jump()
}

extension CanJump {
  func jump() {
    print("Jumping...")
  }
}

struct Cat: CanJump {
  
}

let cat = Cat();

cat.jump()

protocol HasName {
  var name: String { get };
  var age: Int { get set };
}

extension HasName {
  func describeMe() {
    print("Your name is \"\(name)\" and your age is \(age)")
  }
  
  mutating func increaseAge () {
    self.age += 1;
  }
}

struct Dog: HasName {
  let name: String;
  var age: Int;
}

var woof = Dog(name: "woof", age: 10)
woof.name
woof.age
woof.age = 11
woof.age
woof.describeMe()
woof.increaseAge()
woof.age

func describe(obj: Any) {
  if obj is Dog {
    "This is a dog"
  }
}

describe(obj: woof)

func breathIt(obj: Any) {
  if var animal = obj as? Animal {
    animal.breath()
  } else {
    "could not breath"
  }
}

breathIt(obj: woof)
breathIt(obj: dog)
