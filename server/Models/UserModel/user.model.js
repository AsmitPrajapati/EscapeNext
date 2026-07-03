// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     email : { type :String },
//     password : { type : String },
//     confirmPassword : { type : String },
//     role: { type : String , default : "user" }
// })
// module.exports = mongoose.model("user",userSchema)



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    // 🔐 Password Reset Fields
    resetOtp: {
      type: String,
    },

    resetOtpExpiry: {
      type: Date,
    },
    
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

module.exports = mongoose.model("user", userSchema);