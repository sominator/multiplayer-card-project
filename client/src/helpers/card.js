"use strict";

const Rank = require('./rank.js');

module.exports = class Card {
	constructor(_rank) {
		if (!(_rank instanceof Rank)) throw new Error('Card: Invalid card rank provided, must be an instance of Rank');
		

		this.rank = _rank;

		Object.freeze(this);
	}

	get displayShort() {
		if (this.rank.shortName === 'SkipBo') return `SkipBo`
		else return `${this.rank.shortName}`;
	}

	get displayText() {
		if (this.rank.shortName === 'SkipBo') return `SkipBo`
		else return `${this.rank.longName}`;
	}

	get spritePath() {
		if (this.rank.shortName === 'SkipBo') return 'cardsb'
		else return `${this.rank.spritePath}`;
    }
}
