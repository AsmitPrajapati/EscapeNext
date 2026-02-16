const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
    {
        name: { type: String },
        photo: { type: String },
        description: { type: String },
        role: { type: String },  
        createdAt: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

module.exports = mongoose.model("TeamMember", teamMemberSchema);
