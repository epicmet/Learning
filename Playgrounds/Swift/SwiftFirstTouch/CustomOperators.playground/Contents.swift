import Foundation

let firstName: String? = "Foo"
let lastName: String? = "Bar"

let fullName = firstName + lastName

func + (
  lhs: String?,
  rhs: String?
) -> String? {
  switch (lhs, rhs) {
    case (.none, .none):
      return nil
    case let (.some(value), .none),
      let (.none, .some(value)):
      return value
    case let (.some(lhsValue), .some(rhsValue)):
      return lhsValue + rhsValue
  }
}

prefix operator ^
prefix func ^ (value: String) -> String {
  value.uppercased()
}

let lowerCased = "Foo Bar"
let upperCased = ^lowerCased

postfix operator *
postfix func * (value: String) -> String {
  "*** \(value) ***"
}

let withStars = lowerCased*

struct Person {
  let name: String
}

struct Family {
  let members: [Person]
}

let dad = Person(name: "Dad")
let mom = Person(name: "Mom")
let son = Person(name: "Son")
let daughter1 = Person(name: "Daughter 1")
let daughter2 = Person(name: "Daughter 2")

func + (
  lhs: Person,
  rhs: Person
) -> Family {
  return Family(members: [lhs, rhs])
}

func + (
  lhs: Family,
  rhs: Person
) -> Family {
  var members = lhs.members
  members.append(rhs)
  return Family(members: members)
}

func + (
  lhs: Family,
  rhs: [Person]
) -> Family {
  var members = lhs.members
  members.append(contentsOf: rhs)
  return Family(members: members)
}

let family = mom + dad
family.members.count
let familyWithSon = family + son
familyWithSon.members.count
let familyWithDaughters = familyWithSon + [daughter1, daughter2]
familyWithDaughters.members.count
