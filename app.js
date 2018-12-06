"use strict";
/**
 * The coinFliip App
 * app.js is the entry point
 * does coinFlip & health check gets
 */

const EXPRESS = require("express");
const app = EXPRESS(); //() important!
const CORS=require("cors");
//pulling in routers that defined in router.  module.exports sets to the express router object
//  ./ denotes that the path is in the same directory level as this file.
let coinRouter = require("./routes/coinRoute");
let healthRouter = require("./routes/healthRoute");
const PORT = process.env.PORT || 5000;

//use logic defined in song router at http://localhost:5000/coinflip
app.use("/coinflip", coinRouter);

//use logic defined in health router at http://localhost:5000/health
app.use("/health", healthRouter);

app.use(CORS());
app.listen(PORT, () =>
  console.log("Conner's Coin Call started on port " + PORT)
);
