
const nodemailer = require("nodemailer");
const User = require("../../Models/UserModel/user.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// 🔹 SEND OTP
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Generate 6 digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    // Hash OTP before saving
    const hashedOtp = await bcrypt.hash(otp, 10);

    user.resetOtp = hashedOtp;
    user.resetOtpExpiry = Date.now() + 5 * 60 * 1000; // 5 minutes
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    res.json({ success: true, message: "OTP sent successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// 🔹 VERIFY OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user || !user.resetOtp) {
      return res.status(400).json({ success: false, message: "Invalid request" });
    }

    if (user.resetOtpExpiry < Date.now()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    const isMatch = await bcrypt.compare(otp, user.resetOtp);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false });
  }
};


// 🔹 RESET PASSWORD
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetOtp = undefined;
    user.resetOtpExpiry = undefined;

    await user.save();

    res.json({ success: true, message: "Password reset successful" });

  } catch (err) {
    res.status(500).json({ success: false });
  }
};