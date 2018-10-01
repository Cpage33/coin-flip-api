let concatenateWords = require("./app").concatenateWords;
let removeCharacterInString = require("./app").removeCharacterInString;
let addOddNumbers = require("./app").addOddNumbers;
let expect = require("chai").expect;

//Checks the concatenateWords function

describe("Verifying that the function appends words with an underscore.", function() {
  it("Should take 2 words and put them together with an underscored", function() {
    let word1 = "First";
    let word2 = "Test";

    let output = concatenateWords(word1, word2);
    expect(output).to.equals("First_Test");
  });

  it("Should add multiple words together.", function() {
    let word1 = "This";
    let word2 = "should";
    let word3 = "work";
    let word4 = "with";
    let word5 = "all";
    let word6 = "the";
    let word7 = "words";

    let output = concatenateWords(
      word1,
      word2,
      word3,
      word4,
      word5,
      word6,
      word7
    );
    expect(output).to.equals("This_should_work_with_all_the_words");
  });
});

//Checks the removeCharactersInString function

describe("Verifying that the function removes a character from a string.", function() {
  it("Should take any string and remove a desired character", function() {
    let str = "This should have no lowercase I character.";
    let chr = "i";

    let output = removeCharacterInString(str, chr);
    expect(output).to.equals("Ths should have no lowercase I character.");
  });

  it("Should not be able to take multiple strings.", function() {
    let word1 = "This one should fail";
    let word2 = "It should only take two parameters";
    let chr = "o";

    let output = removeCharacterInString(word1, word2, chr);
    expect(output).to.not.equals(
      "This ne shuld fail",
      "It shuld nly take two parameters"
    );
  });
});

//Checks the addOddNumbers function

describe("Verifying that the function adds all of the odd numbers.", function() {
  it("Should not be able to add even numbers", function() {
    let num1 = 40;
    let num2 = 2;

    let output = addOddNumbers(num1, num2);
    expect(output).to.not.equals(42);
  });

  it("Should be able to take many numbers.", function() {
    let num1 = 1;
    let num2 = 2;
    let num3 = 3;
    let num4 = 4;
    let num5 = 5;
    let num6 = 6;

    let output = addOddNumbers(num1, num2, num3, num4, num5, num6);
    expect(output).to.equals(9);
  });
});
