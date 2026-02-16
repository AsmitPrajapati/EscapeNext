const express = require("express");
const router = express.Router();
const { sendContactMail } = require("../../controller/Mail/mail.controller");

router.post("/post",sendContactMail)

module.exports = router;