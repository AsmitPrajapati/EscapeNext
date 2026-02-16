const express = require("express");
const bycrpt = require("bcrypt");
const userModal = require("../../../Models/UserModel/user.model");

exports.postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModal.findOne({ email });

    if (existingUser) {
      return res.status(404).json({ message: "User already registered" });
    }

    const hashPassword = await bycrpt.hash(password, 10);

    const newUser = await userModal.create({
      email,
      password: hashPassword,
    });

    return res
      .status(200)
      .json({ message: "User registered successfully", newUser });
  } catch (error) {
    console.log("error", error);
  }
};
