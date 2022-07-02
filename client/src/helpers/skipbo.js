"use strict";

const Card = require('../card.js');
const Rank = require('../rank.js');


const ranks = [
	new Rank('1', 'One', 1, '../assets/1.png'),
	new Rank('2', 'Two', 2, '../assets/2.png'),
	new Rank('3', 'Three', 3, '../assets/3.png'),
	new Rank('4', 'Four', 4, '../assets/4.png'),
	new Rank('5', 'Five', 5, '../assets/5.png'),
	new Rank('6', 'Six', 6, '../assets/6.png'),
	new Rank('7', 'Seven', 7, '../assets/7.png'),
	new Rank('8', 'Eight', 8, '../assets/8.png'),
	new Rank('9', 'Nine', 9, '../assets/9.png'),
	new Rank('10', 'Ten', 10, '../assets/10.png'),
	new Rank('11', 'Eleven', 11, '../assets/11.png'),
	new Rank('12', 'Twelve', 12, '../assets/12.png')
]



var cards = [];

ranks.forEach(rank => cards.push(new Card(rank)));

const joker = new Card(new Rank('SkipBo', 'SkipBo', 13, '../assets/sb.png'));

module.exports = {
	cards,
	joker,
	ranks
};
