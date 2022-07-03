"use strict";

const Card = require('./card.js');
const Rank = require('./rank.js');


const ranks = [
	new Rank('1', 'One', 1, 'card1'),
	new Rank('2', 'Two', 2, 'card2'),
	new Rank('3', 'Three', 3, 'card3'),
	new Rank('4', 'Four', 4, 'card4'),
	new Rank('5', 'Five', 5, 'card5'),
	new Rank('6', 'Six', 6, 'card6'),
	new Rank('7', 'Seven', 7, 'card7'),
	new Rank('8', 'Eight', 8, 'card8'),
	new Rank('9', 'Nine', 9, 'card9'),
	new Rank('10', 'Ten', 10, 'card10'),
	new Rank('11', 'Eleven', 11, 'card11'),
	new Rank('12', 'Twelve', 12, 'card12')
]



let cards = [];

ranks.forEach(rank => cards.push(new Card(rank)));

const joker = new Card(new Rank('SkipBo', 'SkipBo', 13, 'cardsb'));

module.exports = {
	cards,
	joker,
	ranks
};
