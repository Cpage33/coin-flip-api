"use strict";
//To post switch headers to Content-Type application/json   change the body to raw
const EXPRESS = require("express");

//pulling in library for body parser
const bodyParser = require("body-parser");

const APP = EXPRESS();
const PORT = 5000;

let healthRoute = require("./routes/healthRoute");
let bookRoute = require("./routes/bookRoute");

//setting the app to use bodyParser BEFORE defining the routes. ** Important **
APP.use(bodyParser.json());

APP.use("/health", healthRoute);
APP.use("/book", bookRoute);

APP.listen(PORT, () =>
  console.log("Conner's book bank started on port " + PORT)
);
