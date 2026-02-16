const express = require("express");
const bookingData = require("../../controller/Booking/booking.controller");
const router = express.Router();

router.post("/booking/post", bookingData.bookingPost);
router.get("/booking/get", bookingData.bookingGet);
router.get("/booking/get/:id", bookingData.bookingGetById);
router.put("/booking/update/:id", bookingData.bookingUpdate);
router.delete("/booking/delete/:id", bookingData.bookingDelete);

module.exports = router;
