import Foundation

struct Person {
  let firstName: String?
  let lastName: String?
  
  enum Errors: Error {
    case firstIsNil
    case lastIsNil
    case bothAreNil
  }
  
  func getFullName() throws -> String {
    switch (firstName, lastName) {
      case (.none, .none):
        throw Errors.bothAreNil
      case (.none, .some):
        throw Errors.firstIsNil
      case (.some, .none):
        throw Errors.lastIsNil
      case let (.some(firstName), .some(lastName)):
        return "\(firstName) \(lastName)"
    }
  }
}

let foo = Person(firstName: "Foo", lastName: nil)

do {
  let fullName = try foo.getFullName()
} catch {
  "Got an error = \(error)"
}

do {
  let fullName = try foo.getFullName()
} catch is Person.Errors {
  "Got an error"
}

let bar = Person(firstName: nil, lastName: nil)

do {
  let fullName = try bar.getFullName()
} catch Person.Errors.firstIsNil {
  "First name is nil"
} catch Person.Errors.lastIsNil {
  "Last name is nil"
} catch Person.Errors.bothAreNil {
  "Both are nil"
} catch {
  "Some other errors"
}

struct Car {
  let manufacturer: String
  
  enum Errors: Error {
    case emptyManufacturer
  }
  
  init(
    manufacturer: String
  ) throws {
    if manufacturer.isEmpty {
      throw Errors.emptyManufacturer
    } else {
      self.manufacturer = manufacturer
    }
  }
}

if let yourCar = try? Car(manufacturer: "Tesla") {
  "Your car is \(yourCar.manufacturer)"
} else {
  "Could not find the model for your car"
}

enum IntegerError: Error {
  case noPreviousPositiveInteger(thisValue: Int)
}

func getPreviousInteger(from value: Int) -> Result<Int, IntegerError> {
  guard value > 0 else {
    return Result.failure(IntegerError.noPreviousPositiveInteger(thisValue: value))
  }
  return Result.success(value - 1)
}

func performGet(forValue value: Int) {
  switch getPreviousInteger(from: value) {
    case let .success(previousValue):
      "Previous value is \(previousValue)"
    case let .failure(error):
      switch error {
        case let .noPreviousPositiveInteger(thisValue):
          "No positive integer before this value \(thisValue)"
      }
  }
}

performGet(forValue: 9)
performGet(forValue: 0)
performGet(forValue: -5)
