const { createRating, updateRating } = require("./calcs");
const WEIGHT = require("./config");
const makeRatingFile = require("./rating-file");

module.exports = { makeRatingFile, createRating, updateRating, WEIGHT };
