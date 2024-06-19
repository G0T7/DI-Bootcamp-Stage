import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"


class Deck:
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    def __init__(self):
        self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
        self.shuffle()

    def shuffle(self):
        if len(self.cards) != 52:
            self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return None
        return self.cards.pop()

# Example usage
deck = Deck()
print("Initial deck:")
print(deck.cards)

deck.shuffle()
print("\nShuffled deck:")
print(deck.cards)

card = deck.deal()
print(f"\nDealt card: {card}")
print("\nRemaining deck:")
print(deck.cards)
