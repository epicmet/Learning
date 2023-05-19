import Foundation

struct Person: Equatable {
  let id: String
  let name: String
}

let foo = Person(id: "1", name: "Foo")
let foo2 = Person(id: "1", name: "Bar")

if foo == foo2 {
  "They are equal"
} else {
  "They are not equal"
}

extension Person {
  static func == (lhs: Self, rhs: Self) -> Bool {
    lhs.id == rhs.id
  }
}

enum Animals {
  case dog(breed: String)
  case cat(breed: String)
}

extension Animals: Equatable {
  static func == (lhs: Self, rhs: Self) -> Bool {
    switch (lhs, rhs) {
      case let (.dog(lhsBreed), .dog(rhsBreed)),
        let (.cat(lhsBreed), .cat(rhsBreed)):
        return lhsBreed == rhsBreed
      default:
        return false
    }
  }
}

struct Animal: Equatable {
  let name: String
  let type: Animals
  
  static func == (lhs: Self, rhs: Self) -> Bool {
    lhs.type == rhs.type
  }
}

let cat1 = Animal(name: "Whiskers", type: .cat(breed: "Street cat"))
let cat2 = Animal(name: "Whoosh", type: .cat(breed: "Street cat"))

if cat1 == cat2 {
  "They are equal because of their type"
} else {
  "They are not equal"
}

let cat3 = Animal(name: "Panbeh", type: .cat(breed: "idkbreed"))
let dog = Animal(name: "Jess", type: .dog(breed: "idkbreed"))

if cat3 == dog {
  "WHAT ? No way"
}

struct House: Hashable {
  let number: Int
  let numberOfBedrooms: Int
}

let house1 = House(number: 123, numberOfBedrooms: 2)
house1.hashValue

let house2 = House(number: 123, numberOfBedrooms: 3)
house2.hashValue

let houses = Set([house1, house2])
houses.count

struct NumberedHouse: Hashable {
  let number: Int
  let numberOfBedrooms: Int
  
  func hash(into hasher: inout Hasher) {
    hasher.combine(number)
  }
  
  static func == (lhs: Self, rhs: Self) -> Bool {
    lhs.number == rhs.number
  }
}

let nHouse1 = NumberedHouse(number: 123, numberOfBedrooms: 5)
let nHouse2 = NumberedHouse(number: 123, numberOfBedrooms: 3)

let nHouses = Set([nHouse1, nHouse2])
nHouses.count

enum CarParts {
  case roof
  case tier
  case door
}

let uniqueCarParts = Set<CarParts>([.roof, .tier, .door, .tier])
uniqueCarParts.count

enum HouseType: Hashable {
  case bigHouse(NumberedHouse)
  case smallHouse(NumberedHouse)
}

let bigHouse1 = HouseType.bigHouse(
  NumberedHouse(
    number: 1,
    numberOfBedrooms: 1
  )
)

let bigHouse2 = HouseType.bigHouse(
  NumberedHouse(
    number: 1,
    numberOfBedrooms: 1
  )
)

let smallHouse1 = HouseType.smallHouse(
  NumberedHouse(
    number: 1,
    numberOfBedrooms: 1
  )
)

let allHouses = Set<HouseType>([bigHouse1, bigHouse2, smallHouse1])
