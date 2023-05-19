import Foundation

let myName = "Mahdi"
let yourName = "FOO"

var names = [myName, yourName];

names.append("Bar")
names.append("hi i am using vim")

let foo = "foo"
var foo2 = foo;
foo2 = "foo2"
foo

let moreNames = [
  "bar",
  "foo",
]

var copy = moreNames

copy.append("baz")
copy
moreNames

let oldArray = NSMutableArray(array: ["foo","bar"])

oldArray.add("baz")

var newArray = oldArray
newArray.add("Boo")
oldArray

let someNames = NSMutableArray(array: ["foo","bar"])

// This is bad
func changeTheArray (_ array: NSArray) {
  let copy = array as! NSMutableArray
  
  copy.add("baz")
}

changeTheArray(someNames)
someNames
