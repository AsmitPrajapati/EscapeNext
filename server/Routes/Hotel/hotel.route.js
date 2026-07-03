// const express = require("express");
// const hotelData = require("../../controller/Hotels/hotel.controller");
// const router = express.Router();

// router.post("/hotel/post", hotelData.hotelPost);
// router.get("/hotel/get", hotelData.hotelGet);


// module.exports = router;



const express = require("express");
const router = express.Router();
const hotelController = require("../../controller/Hotels/hotel.controller");

router.post("/post", hotelController.hotelPost);
router.get("/get", hotelController.hotelGet);
router.get("/hotel/:id", hotelController.getHotelById);
router.put("/update/:id", hotelController.hotelUpdate);
router.delete("/delete/:id", hotelController.hotelDelete);

module.exports = router;
