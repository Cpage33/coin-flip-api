const _ = require("lodash");
var songModel = require("../models/songModel"); //pulling in the song data from songmodel

/**
 * returnFilteredSong
 * @param {*} songName - String. retrieved from an unchecked query parameter in the GET /songs endpoint
 */
function returnFilteredSong(songName) {
  var returnData = songModel;

  //verifying songName is aquery param &  is valid
  if (songName != null && songName != undefined && songName.length > 0) {
    if (_.filter(returnData, {active: true})){  //attempt to filter out the false
    return _.filter(returnData, { name: songName });
    }
  } else {
    //we haven't specified a URL param for "Name" (?name=....)
    //returning an unfiltered array
    return returnData;
  }
}
let returnUnfilteredList = () => SongLog;
let returnSongById = id => _.find(SongLog, { id: id });
/**
 * findAndReturnSongById
 * Grabs song out of song collection based off matching id
 * @param {id} id - integer
 */
function findAndReturnSongById(id) {
  var returnData = songModel;
  return _.find(songID, { id: parseInt(id) });
  if (songID != null && songID != undefined && songID.length > 0) {
    return _.filter(returnData, { id: songID });
  } else {
    //we haven't specified a URL param for "Name" (?name=....)
    //returning an unfiltered array
    return returnData;
  }
}

//Export the functions so other libraries can use it
module.exports.returnUnfilteredList = returnUnfilteredList;
module.exports.returnFilteredSong = returnFilteredSong;
module.exports.findAndReturnSongById = findAndReturnSongById;
module.exports.returnSongById = returnSongById;
