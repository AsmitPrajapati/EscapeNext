const express = require("express");
const auth = require("../../controller/Auth/auth.controller.js");
// import {
//   sendOtp,
//   verifyOtp,
//   resetPassword,
// } from "../../controller/Auth/auth.js";

const router = express.Router();

const rateLimit = require("express-rate-limit");

const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many OTP requests. Try again later.",
});

// router.post("/send-otp", otpLimiter, sendOtp);

router.post("/send-otp", otpLimiter, auth.sendOtp);
router.post("/verify-otp", auth.verifyOtp);
router.post("/reset-password", auth.resetPassword);

module.exports = router;
