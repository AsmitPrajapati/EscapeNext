const express = require("express");
const postData = require("../../controller/Signup/Post/post.controller");
const router = express.Router();

router.post("/post", postData.postUser);
module.exports = router;
