package main

func main() {
	// cards := newDeck()
	// cards.saveToFile("my_cards")

	//cards := newDeckFromFile("my_cards")
	// cards.print()

	// hand, remainingCards := deal(cards, 5)
	// hand.print()
	// remainingCards.print()

	cards := newDeck()
	cards.shuffle()
	cards.print()
}
