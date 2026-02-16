const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
    {
        propertyType: { type: String, trim: true },

        basicInfo: {
            propertyName: { type: String, trim: true },
            starRating: { type: String, default: null },
            builtYear: { type: Number, default: null },
            acceptingBookings: { type: String, trim: true },
            channelManager: { type: String, trim: true, default: null },
            mobileNumber: { type: String, trim: true },
            email: { type: String, trim: true },
        },

        location: {
            search: { type: String, trim: true },
            address: { type: String, trim: true },
            street: { type: String, trim: true },
            city: { type: String, trim: true },
            state: { type: String, trim: true },
            pincode: { type: String, trim: true },
            country: { type: String, trim: true },
            agree: { type: Boolean, default: false },
        },

        roomSetup: {
            roomName: { type: String, trim: true },
        },

        availability: {
            startDate: Date,
            endDate: Date,
        },

        roomPrice: {
            baseRate: { type: Number, default: null },
            extraAdultCharge: { type: Number, default: null },
            childCharge: { type: Number, default: null },
            agreedToTerms: { type: Boolean, default: false },
        },

        occupancy: {
            baseAdults: { type: Number, default: 1 },
            maxAdults: { type: Number, default: 1 },
            maxChildren: { type: Number, default: 0 },
            smokingAllowed: { type: String, trim: true },
            agree: { type: Boolean, default: false },
        },

        roomDetails: {
            maxGuests: { type: Number, default: 1 },
            pricePerNight: { type: Number, default: null },
            roomType: { type: String, trim: true },
            bedType: { type: String, trim: true },
            roomSize: { type: String, trim: true },
            roomView: { type: String, trim: true },
        },

        // inventory: {
        //     rooms: { type: Number, default: 1 },
        //     availableRooms: { type: Number, default: 1 },
        // },

        photos: {
            type: [String], // array of URLs
            default: [],
        }
});

module.exports = mongoose.model("Property", propertySchema);
