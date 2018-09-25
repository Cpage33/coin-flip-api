"use strict";

const express = require("express");
var router = express.Router();
var bookController = require("../controllers/bookController");

router.get("/", (req, res) => {
  res.json(bookController.returnUnfilteredList());
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
//If there is no id to return when get is called.
  if (!id) {
    res.status(400);
    res.json({ message: "invalid id parameter" });
  } else { 
    let book = bookController.returnBookById(req.params.id);
    //If there is no book to return when get is called.
    if (!book) {
      res.status(404);
      res.json({ message: "no record of a book was found with the id: " + id });
    } else {
      res.json(book);
    }
  }
});

/**
 * POST - add book
 * http://localhost:5000/book
 *
 * requires: jsonbody: {bookName: "string", author: "string", (genre:"string")optional, ageInYears: int}
 *
 */
router.post("/", (req, res) => {
  //req.body is provided thanks to using body-parser in the application
  console.log(req.body);
  let id = req.body.id;
  let bookName = req.body.bookName;
  let author = req.body.author;
  let genre = req.body.genre;
  let ageInYears = req.body.ageInYears;

  //verifying that the variables are valid
  if (!bookName) {
    res.status(400);
    res.json({ error: "Invalid or no book name was passed in with the json" });
  } else if (!author) {
    res.status(400);
    res.json({
      error: "Invalid or no author was passed in with the json"
    });
  } else if (id) { //Don't let them put their own ID
    res.status(400);
    res.json({
      error: "Invalid ID, You cannot add your own ID."
    });
  } else if (!ageInYears || isNaN(ageInYears)) {
    res.status(400);
    res.json({
      error: "Invalid or non-numeric age was passed in with the json"
    });
  } else {
    //correct input json is provided
    //calling method in book controller to push item to array
    let returnBook = bookController.postBookToModel(
      bookName,
      author,
      genre,
      ageInYears
    );
    //returning the item that was added.
    res.json(returnBook);
  }
});

/**
 * UPDATE for /book route
 * requires id param - String guid
 * returns updated book
 * req body: {bookName: "string", author: "string", genre: "string", ageInYears: integer}
 */
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let bookName = req.body.bookName;
  let author = req.body.author;
  let genre = req.body.genre;
  let ageInYears = req.body.ageInYears;

  //we're doing more logic than I would like in here, but it's ultimately to make it easier to display good errors

      //retrieving object to update
      let updateBook = bookController.getBookObjectByIndex(bookIndex);

      //updating fields if they have values
      updateBook.bookName = bookName ? bookName : updateBook.bookName;
      updateBook.author = genre ? author : updateBook.author;
      updateBook.genre = genre ? genre : updateBook.genre;
      updateBook.ageInYears = ageInYears ? ageInYears : updateBook.ageInYears;

      //updating and returning the data
      let finishedBook = bookController.replaceBookInArray(
        bookIndex,
        updateBook
      );

      res.json(finishedBook);
    });

/**
 * http://localhost:5000/delete/:id (guid for id)
 */
router.delete("/:id", (req, res) => {
  let id = req.params.id;

  let removedItems = bookController.removeBookFromArray(id);

  if (!removedItems) {
    res.status(404);
    res.json({ error: "Book not found with id: " + id });
  } else {
    res.json(removedItems);
  }
});

module.exports = router;
