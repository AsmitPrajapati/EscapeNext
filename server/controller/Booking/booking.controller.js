// post

const bookingModel = require("../../Models/Booking/booking.model")

exports.bookingPost = async (req, res) => {
  try {
    const details = new bookingModel(req.body);
    await details.save();
    res.status(201).json({ message: "Details saved successfully", data: details });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// get all

exports.bookingGet = async (req, res) => {
  try {
    const bookings = await bookingModel.find(); // fetch all bookings
    res.status(200).json({
      message: "All bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// get by id

exports.bookingGetById = async (req, res) => {
  try {
    const booking = await bookingModel.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({
      message: "Booking fetched successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//  Update Booking by ID
exports.bookingUpdate = async (req, res) => {
  try {
    const updatedBooking = await bookingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // returns updated document
    );
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({
      message: "Booking updated successfully",
      data: updatedBooking,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  Delete Booking by ID
exports.bookingDelete = async (req, res) => {
  try {
    const deletedBooking = await bookingModel.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};