const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../../../Models/Admin/admin.model");

async function createAdmin(email,password) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Escapenext");

    console.log("DB Connected");

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

createAdmin("admin@gmail.com", "admin123");
