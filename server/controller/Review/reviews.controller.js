const Review = require('../../Models/Reviews/reviews.model');

// Create a new review
const createReview = async (req, res) => {
  try {
    const { propertyId, userId, title, rating, comment } = req.body;

    const review = new Review({ propertyId, userId, title, rating, comment });
    await review.save();

    return res.status(201).json({ success: true, data: review });
  } catch (err) {
    console.error('createReview error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get a single review by id
const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id).populate('userId', '-password').populate('propertyId');
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    return res.json({ success: true, data: review });
  } catch (err) {
    console.error('getReviewById error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get all reviews (optionally filter by query params: propertyId or userId)
const getAllReviews = async (req, res) => {
  try {
    const { propertyId, userId } = req.query;
    const filter = {};
    if (propertyId) filter.propertyId = propertyId;
    if (userId) filter.userId = userId;

    const reviews = await Review.find(filter).sort({ createdAt: -1 }).populate('userId', '-password').populate('propertyId');
    return res.json({ success: true, data: reviews });
  } catch (err) {
    console.error('getAllReviews error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update a review by id
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const review = await Review.findByIdAndUpdate(id, updates, { new: true }).populate('userId', '-password').populate('propertyId');
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    return res.json({ success: true, data: review });
  } catch (err) {
    console.error('updateReview error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete a review by id
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndDelete(id);
    if (!review) return res.status(404).json({ success: false, message: 'Review not found' });
    return res.json({ success: true, message: 'Review deleted' });
  } catch (err) {
    console.error('deleteReview error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  createReview,
  getReviewById,
  getAllReviews,
  updateReview,
  deleteReview,
};
