import Foundation

func noArgumentsAndNoReturnValue() {
  print("I don't know What I'm doing")
}

noArgumentsAndNoReturnValue()

func plusTwo(value: Int) -> Int {
  value + 2
}

plusTwo(value: 3)

func customAdd(value1: Int, value2: Int) -> Int {
  value1 + value2
}

let customAdded = customAdd(value1: 5, value2: 8)

func customMinus(
  _ lhs: Int,
  _ rhs: Int
) -> Int {
  lhs - rhs
}

customMinus(5, 4)

@discardableResult
func myCustomAdd(
  _ lhs: Int,
  _ rhs: Int
) -> Int {
  lhs + rhs
}

func doSomethingComplicated(with value: Int) -> Int {
  func mainLogic(value: Int) -> Int {
    value + 2
  }
  
  return mainLogic(value: value + 3)
}

doSomethingComplicated(with: 5)

func getFullName(firstName: String = "Foo", lastName: String = "Bar") -> String {
  "\(firstName) \(lastName)"
}

getFullName()
getFullName(firstName: "Mahdi")
getFullName(lastName: "Aghaei")
getFullName(firstName: "Mahdi", lastName: "Aghaei")
