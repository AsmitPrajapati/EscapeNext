const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({

  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property"
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  title: { type: String, trim: true },
  rating:{ type:Number, min:1, max:5 },
  comment:{ type: String, trim: true },
  date: { type: Date, default: Date.now },
    
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);