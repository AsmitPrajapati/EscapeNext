const express = require("express");
const router = express.Router();
const {
  addClient,
  getClients,
} = require("../../controller/Client/client.controller");

router.post("/add", addClient);
router.get("/get", getClients);

module.exports = router;
