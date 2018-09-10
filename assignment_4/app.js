"use strict";
/**
 * Assignment_4
 * app.js
 * A coding assignment that will define functions, return names, return json and have
 * a health check option
 * Conner Page (cpage@anderson.edu)
 */

const HTTP = require("http");
const PORT = 5000;

/**
 * Simple function for adding two numbers
 * @param {*} num1
 * @param {*} num2
 */
function add(num1, num2) {
  return Number(num1) + Number(num2);
}

HTTP.createServer((req, res) => {
  let myArray = req.url.split("/"); //Split my url for the names

  /**
   * Code for health check endpoint
   */
  if (req.url == "/health") {
    //Health check
    let healthResponse = {
      //Print the health status stuff
      service: "Health Check Service",
      version: "1.0.0"
    };

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(JSON.stringify(healthResponse))
    });
    res.end(JSON.stringify(healthResponse)); //json responses need to be Stringified for easy interpretation
  }
  if (myArray[1] == "greet") {
    if (myArray.length == 3) {
      //Greet the user when they type their name
      let greetResponse = "Hello " + myArray[2]; //Hello user
      res.writeHead(200, {
        "Content-Type": "text/plain",
        "Content-Length": Buffer.byteLength(JSON.stringify(greetResponse))
      });
      res.end(JSON.stringify(greetResponse)); //json responses need to be Stringified for easy interpretation
    } else {
      res.writeHead(400); //badly formed url
    }
  }
  if (myArray[1] == "sum") {
    //Add numbers inputed
    //Handle all errors, too many numbers, too little numbers or not numbers
    if (
      isNaN(myArray[2]) == true ||
      isNaN(myArray[3]) == true ||
      myArray[4] != undefined
    ) {
      res.writeHead(400);
      res.end("Error:400  Bad Request\nInput should be two numbers.");
    } else {
      //Working all correct inputs add the numbers
      let sumResponse = {
        first: myArray[2],
        second: myArray[3],
        sum: add(myArray[2], myArray[3])
      };
      res.writeHead(200, {
        "Content-Type": "json object",
        "Content-Length": Buffer.byteLength(JSON.stringify(sumResponse))
      });
      res.end(JSON.stringify(sumResponse)); //json responses need to be Stringified for easy interpretation
    }
    //400 error any errors that havn't already been handled
  } else {
    res.writeHead(404);
    res.end = "Error:404 \nNo such endpoint";
  }
}).listen(
  PORT,
  () => console.log("Assignment 4 service running on port " + PORT) //Show on console code ran
);
