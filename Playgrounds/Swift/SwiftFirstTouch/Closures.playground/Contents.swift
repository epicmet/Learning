import Foundation

let add: (Int, Int) -> Int = { (lhs: Int, rhs: Int) -> Int in
  lhs + rhs
}

add(4, 3)

func customAdd(
  _ lhs: Int,
  _ rhs: Int,
  using function: (Int, Int) -> Int
) -> Int {
  function(lhs, rhs)
}

customAdd(3, 2) { (lhs: Int, rhs: Int) -> Int in
  lhs + rhs
}

let ages = [
  30, 20, 19, 40
]

ages.sorted(by: <)
ages.sorted(by: >)

func add10(_ value: Int) -> Int {
  value + 10
}

func doAdding(on value: Int, using function: (Int) -> Int) {
  function(value)
}

doAdding(on: 5, using: add10(_:))
