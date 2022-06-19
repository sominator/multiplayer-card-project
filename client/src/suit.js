"use strict";

module.exports = class Suit {
	constructor(_name, _shortName, _sortNum) {
		this.name = _name;
		this.shortName = _shortName;
		this.sortNum = _sortNum;

		Object.freeze(this);
	}
}
