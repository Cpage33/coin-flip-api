"use strict";
class CoinFlip {
  constructor(flipCoin) {
    if (flipCoin == 1) {
      this._side = "heads";
      this._flipNum = null;
      this._coinImage =
        "https://www.usmint.gov/wordpress/wp-content/uploads/2017/09/2018-america-the-beautiful-quarters-coin-uncirculated-obverse-philadelphia-768x768.jpg";
    } else {
      this._side = "tails";
      this._flipNum = null;
      this._coinImage =
        "https://www.usmint.gov/wordpress/wp-content/uploads/2016/06/2002-50-state-quarters-coin-indiana-proof-reverse.jpg";
    }
  }
  setFlipNum(flipNum) {
    this._flipNum = flipNum;
  }

  toJSON() {
    if (this.flipNum) {
      return {
        side: this._side,
        numberOfFlips: this.flipNum,
        coinImage: this._coinImage
      };
    } else {
      return {
        side: this._side,
        coinImage: this._coinImage
      };
    }
  }
}

class CoinFlips {
  constructor(winningSide, winningPercentage, coinFlips) {
    if (winningSide == "heads") {
      this._side = winningSide;
      this._coinImage =
        "https://www.usmint.gov/wordpress/wp-content/uploads/2017/09/2018-america-the-beautiful-quarters-coin-uncirculated-obverse-philadelphia-768x768.jpg";
      this._percentage = winningPercentage;
      this.flipNum = coinFlips;
    } else {
      this._side = winningSide;
      this.flipNum = coinFlips;
      this._coinImage =
        "https://www.usmint.gov/wordpress/wp-content/uploads/2016/06/2002-50-state-quarters-coin-indiana-proof-reverse.jpg";
      this._percentage = winningPercentage;
    }
  }
  toJSON() {
    if (this.flipNum) {
      return {
        outcome: this._side,
        coinImage: this._coinImage,
        outcomePercentage: this._percentage + " %",
        otherOutcomes: this.flipNum
      };
    } else {
      return {
        side: this._side,
        coinImage: this._coinImage
      };
    }
  }
}

module.exports.CoinFlip = CoinFlip;
module.exports.CoinFlips = CoinFlips;
