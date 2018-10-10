let getRandomNumber = require("./controllers/coinController").getRandomNumber;
let flipCoin = require("./controllers/coinController").flipCoin;
let flipCoins = require("./controllers/coinController").flipCoins;
let expect = require("chai").expect;
//Checks the random function

describe("Should return random 1 or 0.", function() {
  it("Should return a 0 or 1?", function() {
    let output = getRandomNumber();
    if (output === 0) {
      expect(output).to.equals(0);
    } else {
      expect(output).to.equals(1);
    }
  });
});