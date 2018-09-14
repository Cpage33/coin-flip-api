"use strict";

/**
 * View/Route layer for Song endpoint
 */

var express = require("express");
var router = express.Router(); //() important!!!
var songController = require("../controllers/songController");

/**
 * GET all songs
 * allows a query parameter to allow retrieving an item by the name (?name=songName)
 * ex. http://localhost:5000/song?name=Kick+it+in+the+Sticks
 */
router.get("/", (req, res) => {
  //app.js is going to call this as /song, so we want this at the root of song

  //query param ?name=songName is retrieve by req.query.name
  var songName = req.query.name;

  res.json(songController.returnFilteredSong(songName));
});

/**
 * GET specific song
 * :id specifies that there is a parameter: req.params.id
 * ex: http://localhost:5000/song/1
 */
router.get("/song/:id", (req, res) => {
  //underscore .find method is using === (value AND type) for evaluation.  making sure ID is in an int format
  let song = _.find(songList, { id: parseInt(req.params.id) });

  if (song != null && song != undefined) {
    res.json(song);
  } else {
    //song is not found based off id.  returning 404
    res.status(404);
    res.end();
  }
});

//since we're pulling in this file in app.js, we have to return the router to make it accessible
module.exports = router;