import Foundation

let myAge = 23
let yourAge = 26

if myAge > yourAge {
  "I'm older than you"
} else if myAge < yourAge {
  "I'm younger than you"
} else {
  "Oh, we are the same age"
}

let myMothersAge = myAge + 20
let doubleMyAge = myAge * 2

// 1. unary prefix
let foo = !true

// 2. unary postfix
let name = Optional("Mahdi")
let unaryPostFix = name!
type(of: unaryPostFix)

// 3. binary infix
let result = 5 + 4
let names = "foo" + " " + "Bar"

// 4. ternary
let age = 30
let message = age >= 18
  ? "you are an adult"
  : "you are not an adult yet"
