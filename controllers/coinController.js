"use strict";
var CoinFlip = require("../models/coinModel").CoinFlip;
var CoinFlips = require("../models/coinModel").CoinFlips;

/**
 * Return coinFlip heads or tails
 * @param {None} Coin Flips once
 */

let getRandomNumber = () => {
  let output = Math.round(Math.random());
  return output;
};
let flipCoin = () => {
  let coinFlip = new CoinFlip(getRandomNumber());
  return coinFlip;
};
let flipCoins = flips => {
  let coin = [];
  for (let i = 0; i < flips; i++) {
    let newFlip = flipCoin();
    newFlip.setFlipNum(i + 1);
    coin.push(newFlip);
  }
  return coin;
};
let flipOutcome = coin => {
  let outcome = {};
  let heads = 0;
  let tails = 0;
  coin.forEach(flips => {
    if (flips._side == "heads") {
      heads++;
    } else {
      tails++;
    }
  });

  if (heads > tails) {
    outcome.side = "heads";
    outcome.percentage = ((heads / coin.length) * 100).toFixed(2);
  } else {
    outcome.side = "tails";
    outcome.percentage = ((tails / coin.length) * 100).toFixed(2);
  }
  return outcome;
};
let calculateCoinFlips = flips => {
  let coins = flipCoins(flips);
  let flipValues = flipOutcome(coins); //json
  let setValue = new CoinFlips(flipValues.side, flipValues.percentage, coins);
  return setValue;
};
module.exports.getRandomNumber = getRandomNumber;
module.exports.flipCoin = flipCoin;
module.exports.flipCoins = flipCoins;
module.exports.flipOutcome = flipOutcome;
module.exports.calculateCoinFlips = calculateCoinFlips;
