const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({

  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true
  },

  roomSetup: {
    roomName: { type: String, trim: true },
  },
  
  availability: {
    startDate: Date,
    endDate: Date,
  },

  roomPrice: {
    baseRate: { type: Number, default: null },
    extraAdultCharge: { type: Number, default: null },
    childCharge: { type: Number, default: null },
    agreedToTerms: { type: Boolean, default: false },
  },

  occupancy: {
    baseAdults: { type: Number, default: 1 },
    maxAdults: { type: Number, default: 1 },
    maxChildren: { type: Number, default: 0 },
    smokingAllowed: { type: String, trim: true },
    agree: { type: Boolean, default: false },
  },

  roomDetails: {
    maxGuests: { type: Number, default: 1 },
    pricePerNight: { type: Number, default: null },
    roomType: { type: String, trim: true },
    bedType: { type: String, trim: true },
    roomSize: { type: String, trim: true },
    roomView: { type: String, trim: true },
  },

  photos: [String]

}, { timestamps: true });

module.exports = mongoose.model("Room", roomSchema);