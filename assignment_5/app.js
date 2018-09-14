"use strict";

/**
 * The Song App
 * app.js is the entry point
 * does song & health check gets
 */

const EXPRESS = require("express");
const app = EXPRESS(); //() important!

//pulling in routers that defined in router.  their module.exports is set to the express router object
//  ./ denotes that the path is in the same directory level as this file.
let songRouter = require("./routes/songRoute");
let healthRouter = require("./routes/healthRoute");
const PORT = 5000;

//use logic defined in anime router at http://localhost:5000/song
app.use("/song", songRouter);
//use logic defined in health router at http://localhost:5000/health
app.use("/health", healthRouter);

//app is started and listening on port 5000
app.listen(PORT, () =>
  console.log("Welcome to my song app on port: " + PORT)
);