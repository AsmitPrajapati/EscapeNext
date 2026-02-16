const express = require("express");
const adminLoginData = require("../../controller/Admin/Login/login");
const router = express.Router();

router.post("/admin/login", adminLoginData.adminLogin);

module.exports = router;
