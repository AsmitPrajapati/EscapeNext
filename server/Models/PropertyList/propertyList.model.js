
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  propertyType: { type: String, trim: true },

  basicInfo: {
    propertyName: { type: String, trim: true },
    tourType: { type: String, trim: true },
    subInfo: { type: String, trim: true },
    starRating: { type: String, default: null },   // changed to number
    builtYear: { type: Number, default: null },
    acceptingBookings: { type: String, trim: true },
    channelManager: { type: String, trim: true, default: null },
    mobileNumber: { type: String, trim: true },
    email: { type: String, trim: true },
    discount: { type: String, trim: true, default: '' },
    category: { type: String, trim: true, default: '' },
    taxInfo: { type: String, trim: true, default: '' },
    policies: { type: [String], default: [] },
    facilities: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    rating: { type: Number, default: 0 },
    review_count: { type: Number, default: 0 },
    rating_label: { type: String, default: '' },
    price: { type: Number, default: null },
    meals: {
      breakfast: { type: Boolean, default: false },
      lunch: { type: Boolean, default: false },
      dinner: { type: Boolean, default: false }
    }
  },

  location: {
    search: { type: String, trim: true },
    address: { type: String, trim: true },
    street: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    pincode: { type: String, trim: true },
    country: { type: String, trim: true },
    latitude: Number, //not at front
    longitude: Number,
    agree: { type: Boolean, default: false },
  },

  // Quick display fields used by frontend cards (kept for compatibility)
  roomType: { type: String, trim: true, default: '' },
  bed: { type: String, trim: true, default: '' },
  bathroom: { type: String, trim: true, default: '' },
  
 
  // ⭐ Rating System
  rating: {
    score: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
  },

  // ⭐ Amenities
  amenities: {
    type: [String],
    default: []
  },

  photos: {
    type: [String],
    default: [],
  }

}, { timestamps: true });

module.exports = mongoose.model("Property", propertySchema);