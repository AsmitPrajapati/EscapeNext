const Room = require("../../Models/Rooms/room.model");
const Property = require("../../Models/PropertyList/propertyList.model");

exports.createRoom = async (req, res) => {
  try {
    const {
      propertyId,
      roomSetup,
      availability,
      roomPrice,
      occupancy,
      roomDetails,
    } = req.body;

    // check property exists
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    const room = await Room.create({
      propertyId,
      roomSetup,
      availability,
      roomPrice,
      occupancy,
      roomDetails,
    });

    res.status(201).json({
      success: true,
      message: "Room created successfully",
      room,
    });

  } catch (error) {
    console.error("Create Room Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create room",
      error: error.message,
    });
  }
};