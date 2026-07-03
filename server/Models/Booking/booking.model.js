const mongoose = require("mongoose");

const personalDetailsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property"
    },

    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room"
    },

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
    status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending"
    }

  },
  { timestamps: true }
);
module.exports = mongoose.model("booking",personalDetailsSchema)