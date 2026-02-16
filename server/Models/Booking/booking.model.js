const mongoose = require("mongoose");

const personalDetailsSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      match: /^[0-9]{10}$/,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
    },
    totalPerson: {
      type: Number,
      min: 1,
    },
    state: {
      type: String,
      trim: true,
    },
    arrivedDate: {
      type: Date,
    },
    departDate: {
      type: Date,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("booking",personalDetailsSchema)