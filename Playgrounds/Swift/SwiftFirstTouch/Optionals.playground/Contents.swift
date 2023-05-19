import Foundation

func multiplyByTwo(_ value: Int? = nil) -> Int {
  if let value {
    return value * 2
  } else {
    return 0
  }
}

multiplyByTwo()
multiplyByTwo(3)

let age: Int? = nil

func checkAge() {
  guard age != nil else {
    print("Age is nil dude!")
    return
  }
}

checkAge()

let age2: Int? = 0;

func checkAge2() {
  guard let age2 else {
    "Age2 is nil ???"
    return
  }
    print("Age2 is not nil \(age2)")
}

checkAge2()

switch age {
  case .none:
    "Age has no value"
  case let .some(value):
    "Age has the value of \(value)"
}

struct Person {
  let firstName: String
  let address: Address?
  struct Address {
    let firstLine: String?
  }
}

let foo = Person(firstName: "Foo", address: nil)

if let fooFirstLineAddress = foo.address?.firstLine {
  "Foo has the firstLineAddress???? \(fooFirstLineAddress)"
} else {
  "Yeah we don't have any address for the foo"
}
