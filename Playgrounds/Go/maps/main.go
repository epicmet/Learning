package main

import "fmt"

func main() {
	// var colors map[string]string
	// colors := make(map[string]string)

	colors := map[string]string{
		"red":   "#FF0000",
		"green": "#00FF00",
	}

	colors["white"] = "#FFFFFF"

	delete(colors, "red")

	printMap(colors)
}

func printMap(c map[string]string) {
	for color, hex := range c {
		fmt.Println(color, hex)
	}
}
