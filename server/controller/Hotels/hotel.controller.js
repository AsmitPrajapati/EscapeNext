const hotelModel = require("../../Models/Hotel/hotel.model")

// exports.hotelPost = async (req, res) => {
//   try {
//     const details = new hotelModel.hotel(req.body);
//     await details.save();
//     res.status(201).json({ message: "Hotel Data saved successfully", data: details });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


// exports.hotelGet = async (req, res) => {
//   try {
//     const hotels = await hotelModel.hotel.find(); // fetch all bookings
//     res.status(200).json({
//       message: "All hotels fetched successfully",
//       data: hotels,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



// const hotelModel = require("../../Models/Hotel/hotel.model");

// CREATE — Add new hotel
exports.hotelPost = async (req, res) => {
  try {
    const hotel = new hotelModel(req.body);
    await hotel.save();

    res.status(201).json({
      message: "Hotel saved successfully",
      data: hotel,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ — Get all hotels
exports.hotelGet = async (req, res) => {
  try {
    const hotels = await hotelModel.find();

    res.status(200).json({
      message: "Hotels fetched successfully",
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET — Get a hotel by ID
exports.getHotelById = async (req, res) => {
  try {
    const id = req.params.id;

    const hotel = await hotelModel.findById(id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json({
      message: "Hotel fetched successfully",
      data: hotel,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE — Update a hotel by ID
exports.hotelUpdate = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedHotel = await hotelModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json({
      message: "Hotel updated successfully",
      data: updatedHotel,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE — Delete a hotel by ID
exports.hotelDelete = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedHotel = await hotelModel.findByIdAndDelete(id);

    if (!deletedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json({
      message: "Hotel deleted successfully",
      data: deletedHotel,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
