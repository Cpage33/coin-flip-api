"use strict";
var CoinFlip = require("../models/coinModel").CoinFlip;
var CoinFlips = require("../models/coinModel").CoinFlips;

/**
 * Returns a random 1 or 0
 */

let getRandomNumber = () => {
  let output = Math.round(Math.random());
  return output;
};

/**
 * Will take the random 1 or 0 and turn it into a json with the side, the flipNum and the image.
 */
let flipCoin = () => {
  let coinFlip = new CoinFlip(getRandomNumber());
  return coinFlip;
};

/**
 * Will take the flips and put them in an array
 * @param {*} flips 
 */
let flipCoins = flips => {
  let coin = [];
  for (let i = 0; i < flips; i++) {
    let newFlip = flipCoin();
    newFlip.setFlipNum(i + 1);
    coin.push(newFlip);
  }
  return coin;
};
/**
 * Will take an array and calculate the outcomes. 
 * @param {*} coin 
 */
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
