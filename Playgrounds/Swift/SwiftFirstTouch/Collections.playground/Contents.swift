import Foundation

let numbers = [1,2,3,4]

numbers.last
numbers.first
numbers.map(-)

var mutatingNumbers = [4,5,6]
mutatingNumbers.append(7)
mutatingNumbers.insert(3, at: 0)

for value in mutatingNumbers {
  print(value)
}

print("===========")

for value2 in mutatingNumbers where value2 % 2 == 0 {
  print(value2)
}

numbers.map { (value: Int) -> Int in
  value * 2
}

numbers.filter { (value: Int) -> Bool in
  value >= 3
}

numbers.compactMap {(value: Int) -> String? in
  value % 2 == 0
    ? String(value)
    : nil
}

let stuff1: [Any] = [
  1,
  "Hello",
  2,
  "World"
]

let intsInStuff1 = stuff1.compactMap({ (value: Any) -> Int? in
  value as? Int
})

let uniqueNumbers = Set([1,2,3,2])
uniqueNumbers.count
uniqueNumbers.map(-)

struct Person: Hashable {
  let id: UUID
  let name: String
  let age: Int
  
  func hash(into hasher: inout Hasher) {
    hasher.combine(id)
  }
  
  static func == (lhs: Self, rhs: Self) -> Bool {
    lhs.id == rhs.id
  }
}

let fooId = UUID()

let foo = Person(
  id: fooId,
  name: "foo",
  age: 20
)

let bar = Person(
  id: fooId,
  name: "bar",
  age: 30
)

let bazId = UUID()
let baz = Person(
  id: bazId,
  name: "baz",
  age: 40
)

let people = Set<Person>([foo, bar, baz])
people.count

let userInfo: [String: Any] = [
  "name": "Foo",
  "age": 20,
  "address": [
    "firstLine": "Street 1",
    "postCode": "12345"
  ]
]

userInfo["name"]
userInfo["age"]
// userInfo["address"]["postCode"]

for (key, value) in userInfo {
  key
  value
}

for (key, value) in userInfo where value is Int && key.count > 2 {
  key
  value
}
