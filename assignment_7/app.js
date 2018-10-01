"use strict";

/**
 * appends words with an underscore
 * @param  {...any} words - array of words.  pass in as many params as you want. treated like arrays
 * @example: concantenateWords("hi", "there");    concatenateWords("hi", "there", "buddy", "pal");
 */
let concatenateWords = (...words) => {
  let output = "";
  words.forEach(word => {
    output = output + "_" + word;
  });
  output = output.startsWith("_") ? output.substring(1, output.length) : output;
  return output;
};

/**
 * Removes a character from a string
 * @param {String} inputString
 * @param {Character} characterToRemove
 * @return string
 */
let removeCharacterInString = (inputString, characterToRemove) =>
  inputString.replace(characterToRemove, "");

/**
 * adds odd numbers together
 * @param  {...any} numbers unlimited number of parameters for number
 */
let addOddNumbers = (...numbers) => {
  let output = 0;
  numbers.forEach(
    number => (output = number % 2 == 1 ? output + number : output) //Had to change the 0 to a 1 for odd.
  );
  return output;
};

module.exports.removeCharacterInString = removeCharacterInString;
module.exports.concatenateWords = concatenateWords;
module.exports.addOddNumbers = addOddNumbers;
