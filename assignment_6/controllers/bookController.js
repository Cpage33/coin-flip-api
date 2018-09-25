"use strict";

const _ = require("lodash");
const uuid = require("UUID/v4");

var bookLog = require("../models/bookModel");

let returnUnfilteredList = () => bookLog;

let returnBookById = id => _.find(bookLog, { id: id });

/**
 *  postBookToModel
 * @param {*} bookName - string bookName
 * @param {*} author
 * @param {*} genre
 * @param {*} ageInYears  - numeric - int/float
 * @returns book json
 */
let postBookToModel = (bookName, author, genre, ageInYears) => {
  //defining our own json object so that the service is uniform.  Don't trust what the user passes in and blindy push it to your model
  let postJson = {
    id: uuid(), //leveraging the uuid/4 library
    bookName: bookName,
    author: author,
    genre: genre,
    ageInYears: ageInYears
  };

  //array.push(object) will add your json object to your model
  bookLog.push(postJson);

  //returning the json object so that the post can return it validly
  return postJson;
};

/**
 * Return book index by id (integer)
 * @param {guid} id
 */
let getBookIndex = id => _.findIndex(bookLog, { id: id });

/**
 * Return job object from bookmodel
 * @param index - 0 based integer
 */
let getBookObjectByIndex = index => bookLog[index];

/**
 * Replaces book in book collection
 * @param {int} index
 * @param {*} updatedBook - json
 */
let replaceBookInArray = (index, updatedBook) => {
  bookLog.splice(index, 1, updatedBook);
  return updatedBook;
};

/**
 * Removes book from book collection based off of id
 * @param {guid/uuid} id
 * @return array of removed items
 */
let removeBookFromArray = id => _.remove(bookLog, book => book.id == id);

module.exports.returnUnfilteredList = returnUnfilteredList;
module.exports.returnBookById = returnBookById;
module.exports.postBookToModel = postBookToModel;
module.exports.getBookIndex = getBookIndex;
module.exports.getBookObjectByIndex = getBookObjectByIndex;
module.exports.replaceBookInArray = replaceBookInArray;
module.exports.removeBookFromArray = removeBookFromArray;
