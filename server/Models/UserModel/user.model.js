const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : { type :String },
    password : { type : String },
    confirmPassword : { type : String },
    role: { type : String , default : "user" }
})
module.exports = mongoose.model("user",userSchema)