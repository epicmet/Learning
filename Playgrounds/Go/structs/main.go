package main

import "fmt"

type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	firstname string
	lastname  string
	contant   contactInfo
}

func (p person) print() {
	fmt.Printf("%+v", p)
}

func (p *person) updateName(newFirstName string) {
	p.firstname = newFirstName
}

func main() {
	// p := person{firstname: "Alex", lastname: "Anderson"}

	// var p person

	// p.firstname = "Alex"
	// p.lastname = "Anderson"

	// fmt.Println(p)
	// fmt.Printf("%+v", p)

	jim := person{
		firstname: "Jim",
		lastname:  "Party",
		contant: contactInfo{
			email:   "jim.party@email.com",
			zipCode: 19989,
		},
	}

	jim.updateName("Jimmy")
	jim.print()
}
