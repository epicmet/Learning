package main

import (
	"fmt"
	"math/rand"
	"os"
	"strings"
	"time"
)

type deck []string

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func (d deck) toString() string {
  return strings.Join(d, ",")
}

func (d deck) saveToFile(filename string) error {
  return os.WriteFile(filename, []byte(d.toString()), 0666)
}

func deal(d deck, handSize int) (deck, deck) {
  return d[:handSize], d[handSize:]
}

func (d deck) shuffle() {
  source := rand.NewSource(time.Now().UnixNano())
  r := rand.New(source)

  for i := range d {
    newPosition := r.Intn(len(d) - 1)
    
    d[i], d[newPosition] = d[newPosition], d[i]
  } 
}

func newDeck() deck {
  cards := deck{};

  cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
  cardValues := []string{"Ace", "Two", "Three", "Four"}

  for _, suit := range cardSuits {
    for _, value := range cardValues {
      cards = append(cards, value + " of " + suit)
    }
  }

  return cards
}

func newDeckFromFile(filename string) deck {
  bs, err := os.ReadFile(filename)
  if err != nil {
    fmt.Println("Error:", err)
    os.Exit(1)
  }

  return deck(strings.Split(string(bs), ","))
}
