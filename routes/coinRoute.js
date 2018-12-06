"use strict";

const express = require("express");
var router = express.Router();
var coinController = require("../controllers/coinController");
/**
 * Get - retrieve coinflips
 * http://localhost:5000/coinflip
 * Return coin flip.
 */
router.get("/", (req, res) => {
  res.json(coinController.flipCoin());
});
/**
 * GET - retrieve coinflips
 * http://localhost:5000/coinflip/{int}?noLimit=true
 * Return coin flips.
 */
router.get("/:flips", (req, res) => {
  var noLimit = req.query.noLimit;
  var flips = req.params.flips;
  if (flips == NaN) {
    res.status(400);
    res.json({ message: "Please enter a number between 1 and 29." });
  }
  if (noLimit == "true") {
    res.json(coinController.calculateCoinFlips(flips));
  }
  if (flips > 30 || flips < 0) {
    res.status(400);
    res.json({ message: "Please enter a number between 1 and 29." });
  }
  if (flips % 2 == 0) {
    res.status(400);
    res.json({
      message: "Please enter an odd number to avoid a 50% flip outcome"
    });
  } else {
    res.json(coinController.calculateCoinFlips(flips));
  }
});

module.exports = router;
