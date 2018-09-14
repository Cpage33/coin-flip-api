var _ = require("lodash");
// ../ means that the directory that it wants to pull from is in a parent directory. It's stepping up first (../ does that)
var songModel = require("../models/songModel"); //pulling in the song data from songmodel

/**
 * returnFilteredSong
 * @param {*} songName - String. retrieved from an unchecked query parameter in the GET /animes endpoint
 */
function returnFilteredSong(songName) {
  var returnData = songModel;

  //verifying that songName was actually specified as a query param & valid
  if (songName != null && songName != undefined && songName.length > 0) {
    return _.filter(returnData, { name: songName });
  } else {
    //we haven't specified a URL param for "Name" (?name=....)
    //returning an unfiltered array
    return returnData;
  }
}

/**
 * findAndReturnSongById
 * Grabs song out of song collection based off matching id
 * @param {id} id - integer
 */
function findAndReturnSongById(id) {
  return _.find(songModel, { id: parseInt(id) });
}

//dealing with multiple functions (possible)
module.exports.returnFilteredSong = returnFilteredSong;
module.exports.findAndReturnSongById = findAndReturnSongById;
//left hand side - name of how you want it to display in a dependency/library
//right hand side - actual function name in the file - don't worry about arguments/parameters
