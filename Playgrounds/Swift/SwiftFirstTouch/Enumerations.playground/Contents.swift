import Foundation

enum Animals {
  case cat
  case dog
  case rabbit
}

let cat = Animals.cat

if cat == Animals.cat {
  "This is a cat"
} else {
  "this is not a cat"
}

func describeAnimal(_ animal: Animals) {
  switch animal {
    case .cat:
      "This is a cat"
      break
    case .dog:
      "This is a dog"
      break
    case .rabbit:
      "This is rabbit"
      break
  }
}

describeAnimal(Animals.rabbit)

enum ShortCut {
  case fileOrFolder(path: URL, name: String)
  case wwwUrl(path: URL)
  case song(artist: String, songName: String)
}

let wwwApple = ShortCut.wwwUrl(path: URL(string: "https://apple.com")!)

switch wwwApple {
  case .fileOrFolder(
    let path,
    let name
  ):
    path
    name
    break
  case .wwwUrl(path: let path):
    path
    break
  case let .song(
    artist,
    songName
  ):
    artist
    songName
    break
}

if case let .wwwUrl(path) = wwwApple {
  path
}

let withoutYou = ShortCut.song(artist: "Symphony X", songName: "Without You")

if case let .song(_, songName) = withoutYou {
  songName
}

enum Vehicle {
  case car(manufacturer: String, model: String)
  case bike(manufacturer: String, yearMade: Int)
  
  var manufacturer: String {
    switch self {
      case let .car(manufacturer, _),
        let .bike(manufacturer, _):
        return manufacturer
    }
  }
}

let car = Vehicle.car(manufacturer: "Tesla", model: "X")
let bike = Vehicle.bike(manufacturer: "HD", yearMade: 1987)

car.manufacturer
bike.manufacturer

enum FamilyMember: String {
  case father = "Dad"
  case mother = "Mom"
  case brother = "Bro"
  case sister = "Sis"
}

FamilyMember.father.rawValue

enum FavoriteEmoji: String, CaseIterable {
  case blush = "☺️"
  case rocket = "🚀"
  case fire = "🔥"
}

FavoriteEmoji.allCases
FavoriteEmoji.allCases.map(\.rawValue)

if let blush = FavoriteEmoji(rawValue: "☺️") {
  "Found blush"
  blush
}
