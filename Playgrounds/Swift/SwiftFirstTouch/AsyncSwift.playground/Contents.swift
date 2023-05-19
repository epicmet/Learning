import Foundation
import PlaygroundSupport
import _Concurrency

PlaygroundPage.current.needsIndefiniteExecution = true

func getFullName(firstName: String, lastName: String) async -> String {
  try? await Task.sleep(for: .seconds(1))
  return "\(firstName) \(lastName)"
}

Task {
  let fullName = await getFullName(firstName: "Foo", lastName: "Bar")
  
  async let fullName2 = getFullName(firstName: "Foo", lastName: "Bar")
  
  await fullName2
}

enum Clothe {
  case hat, shirt, trousers
}

func buyHat() async throws -> Clothe {
  try await Task.sleep(for: .seconds(1))
  return Clothe.hat
}

func buyShirt() async throws -> Clothe {
  try await Task.sleep(for: .seconds(1))
  return Clothe.shirt
}

func buyTrousers() async throws -> Clothe {
  try await Task.sleep(for: .seconds(1))
  return Clothe.trousers
}

struct Ensemble: CustomDebugStringConvertible {
  var debugDescription: String {
    "Clothes: \(clothes), price: \(price)"
  }
  
  let clothes: [Clothe]
  let price: Double
}

func buyWholeEnsemle() async throws -> Ensemble {
  async let hat = buyHat()
  async let shirt = buyShirt()
  async let trousers = buyTrousers()
  
  return Ensemble(
    clothes:
      await [
        try hat,
        try shirt,
        try trousers
      ],
    price: 200
  )
}

Task {
  if let ensemble = try? await buyWholeEnsemle() {
    print(ensemble)
  } else {
    "Something went wrong"
  }
}

func getFullName(
  duration: Duration,
  calculator: () async -> String
) async -> String {
  try? await Task.sleep(for: duration)
  return await calculator()
}

func fullName () async -> String { "Foo Bar" }

Task {
  await getFullName(
    duration: .seconds(1)
  ) {
    async let name = fullName()
    return await name
  }
}
