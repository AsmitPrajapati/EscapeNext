const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const allowedOrigin = process.env.BASE_URL || "*";
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

const postRoute = require("./Routes/Signup/post.route");
const loginRoute = require("./Routes/Login/login.route");
const bookingRoute = require("./Routes/Booking/booking.route");
const hotelRoute = require("./Routes/Hotel/hotel.route");
const teamMemberRoute = require("./Routes/TeamMember/teamMember.route");
const clientRoute = require("./Routes/Client/client.route");
const contactRoute = require("./Routes/Mail/mail.route");
const propertyRoute = require("./Routes/Property/property.route");
const authRoute = require("./Routes/Auth/auth.route");
const adminRoute = require("./Routes/Admin/admin.route");
const roomRoutes = require("./Routes/Room/room.routes");
const reviewRoutes = require("./Routes/Review/review.route");

mongoose
  // .connect("mongodb://127.0.0.1:27017/Escapenext")
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection failed", err));

app.use("/contact", contactRoute);
app.use("/api/auth", postRoute);
app.use("/api", loginRoute);
app.use("/api", bookingRoute);
app.use("/api", hotelRoute);
app.use("/api", teamMemberRoute);
app.use("/clients", clientRoute);
app.use("/api", propertyRoute);
app.use("/api", adminRoute);
app.use("/api", authRoute);


app.use("/api/reviews", authRoute);

app.use("/api/rooms", roomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
