"use strict";

module.exports = class Rank {
	constructor(_shortName, _longName, _sortNum, _spritePath) {
		this.shortName = _shortName;
		this.longName = _longName;
		this.sortNum = _sortNum;
		this.spritePath = _spritePath;

		Object.freeze(this);
	}
}
