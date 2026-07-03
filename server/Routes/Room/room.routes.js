const express = require("express");
const router = express.Router();

const roomController = require("../../controller/Room/room.controller");

// create room
router.post("/create", roomController.createRoom);

module.exports = router;