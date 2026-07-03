// const mongoose = require("mongoose");

// const hotelSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       trim: true,
//     },
//     discount: {
//       type: String,
//       default: "0% OFF",
//     },
//     image: {
//       type: String,
//     },
//     subInfo: {
//       type: String,
//       trim: true,
//     },
//     category: {
//       type: String,
//       trim: true,
//     },
//     roomType: {
//       type: String,
//       trim: true,
//     },
//     bed: {
//       type: String,
//       trim: true,
//     },
//     bathroom: {
//       type: String,
//       trim: true,
//     },
//     tags: {
//       type: [String],
//       default: [],
//     },
//     rating: {
//       type: String,
//       trim: true,
//     },
//     ratingText: {
//       type: String,
//       trim: true,
//     },
//     reviews: {
//       type: String,
//       trim: true,
//     },
//     price: {
//       type: String,
//       trim: true,
//     },
//     taxInfo: {
//       type: String,
//       trim: true,
//     },
//     duration: {
//       type: String,
//       trim: true,
//     },
//   },
//   { timestamps: true }
// );
// exports.hotel = mongoose.model("Hotel", hotelSchema);



// const mongoose = require("mongoose");

// const hotelSchema = new mongoose.Schema(
//   {
//     name: String,
//     discount: String,
//     images: [String],

//     subInfo: String,
//     category: String,

//     rating: String,
//     ratingText: String,
//     reviews: String,

//     roomType: String,
//     bed: String,
//     bathroom: String,
//     tags: [String],

//     price: String,
//     taxInfo: String,
//     duration: String,

//     // location
//     address: String,
//     lat: Number,
//     lng: Number,

//     // rooms shown below main card
//     rooms: [
//       {
//         name: String,
//         image: String,
//         sleeps: Number,
//         price: String,
//         refundable: String,
//         cancellationPolicy: String,
//         breakfast: String,
//       },
//     ],

//     // nearby places
//     nearby: [
//       {
//         name: String,
//         distance: String,
//         category: String,
//       },
//     ],

//     // facilities
//     facilities: [String],

//     // policies section
//     policies: [String],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Hotel", hotelSchema);
