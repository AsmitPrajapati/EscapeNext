// routes/property.routes.js
const express = require("express");
const router = express.Router();
const upload = require("../../utils/multer/multer");
const { createProperty } = require("../../controller/Property/property.controller");

router.post("/property",upload.array("photos", 20),createProperty);

module.exports = router;
