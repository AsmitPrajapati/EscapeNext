const express = require("express");
const router = express.Router();

const reviewController = require("../../controller/Review/reviews.controller");

// create review
router.post("/create", reviewController.createReview);

module.exports = router;