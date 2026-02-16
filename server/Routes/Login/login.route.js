const express = require("express")
const loginData = require("../../controller/Login/Post/post.controller")
const router = express.Router();

router.post("/login/post",loginData.loginUser)
module.exports = router;