// routes/property.routes.js
const express = require("express");
const router = express.Router();
const upload = require("../../utils/multer/multer");
const propertyController = require("../../controller/Property/property.controller");

router.post("/property",upload.array("photos", 20),propertyController.createProperty);
router.get("/property/get", propertyController.getAllProperties);

module.exports = router;
