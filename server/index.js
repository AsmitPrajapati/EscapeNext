const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// const path = require("path"); 
// const fs = require("fs");
// const multer = require("multer");
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// ensure uploads folder exists
// const uploadPath = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadPath)) {
//     fs.mkdirSync(uploadPath);
// }

// app.use("/uploads", express.static(uploadPath));


const postRoute = require("./Routes/Signup/post.route");
const loginRoute = require("./Routes/Login/login.route");
const bookingRoute = require("./Routes/Booking/booking.route");
const hotelRoute = require("./Routes/Hotel/hotel.route");
const teamMemberRoute = require("./Routes/TeamMember/teamMember.route");
const clientRoute = require("./Routes/Client/client.route");
const contactRoute = require("./Routes/Mail/mail.route");
const propertyRoute = require("./Routes/Property/property.route");
const adminRoute = require("./Routes/Admin/admin.route");

mongoose
    // .connect("mongodb://127.0.0.1:27017/Escapenext")
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log("DB connection failed",err));

app.use("/contact",contactRoute)
app.use("/api",postRoute)
app.use("/api",loginRoute)
app.use("/api",bookingRoute)
app.use("/api",hotelRoute)
app.use("/api",teamMemberRoute)
app.use("/clients",clientRoute)
app.use("/api",propertyRoute)
app.use("/api",adminRoute)


app.listen("4000",()=>{
    console.log("server running at 4000");
})