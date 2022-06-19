"use strict";

const { cards, joker } = require('./decks/skipbo.js');

module.exports = class Deck {
	constructor(_jokerCount = 18, _numOfDecks = 12, _deck = { cards, joker }) {
		var jokers = [],
		    cards = [];
		for (let i = 0; i < _jokerCount; i++) {
			jokers.push(joker);
		}

		for (let i = 0; i < _numOfDecks; i++) {
			cards.push(..._deck.cards);
		}

		this.cards = cards;
		this.cards.push(...jokers);
		this.initialCards = [...this.cards];
		this.jokerCount = _jokerCount;
	}

	get remainingLength() {
		return this.cards.length;
	}

	deal(hand, count = 1) {
		if (!Array.isArray(hand)) throw new Error('Deck: Invalid hand to deal cards, must be an Array');
		if (count > this.cards.length) {
			console.log('Not enough cards in the deck to deal');
			return;
		}

		hand.push(...this.cards.splice(0, count));
	}

	dealMul(hands, count = 1) {
		if (count * hands.length > this.cards.length) {
			console.log('Not enough cards in the deck to deal');
			return;
		}

		for (let i = 0; i < count; i++) {
			hands.forEach(hand => {
				hand.push(...this.cards.splice(0, 1));
			});
		}
	}

	insert(cards) {
		this.cards.push(...cards);
	}

	reset() {
		this.cards = this.initialCards;
	}

	shuffle() {
		for (let i = this.cards.length - 1; i > 0;i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = this.cards[i];
			this.cards[i] = this.cards[j];
			this.cards[j] = temp;
		}
	}
}
