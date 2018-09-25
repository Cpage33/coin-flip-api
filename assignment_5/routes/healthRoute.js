"use strict";

/**
 * View/Route layer for healthcheck endpoint
 */

var express = require("express");
var router = express.Router();

/**
 * Health check get @ http://localhost:5000/health
 * returns json body w/ name & version
 */
router.get("/", (req, res) => {
  let healthJson = {
    name: "The Song App",
    version: "1.0.0"
  };

  res.json(healthJson);
});

module.exports = router;
