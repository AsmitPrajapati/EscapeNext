
const Property = require("../../Models/PropertyList/propertyList.model");

/* ---------------- CREATE PROPERTY ---------------- */
exports.createProperty = async (req, res) => {
  try {
    const {
      propertyType,
      basicInfo,
      location,
      // amenities,
      // meals
    } = req.body;

    // Parse JSON fields (because FormData sends strings)
    const parsedBasicInfo = basicInfo ? JSON.parse(basicInfo) : {};
    const parsedLocation = location ? JSON.parse(location) : {};
    // const parsedAmenities = amenities ? JSON.parse(amenities) : [];
    // const parsedMeals = meals ? JSON.parse(meals) : {};

    // Handle uploaded photos
    const files = req.files || [];
    const photos = files.map(file => `/uploads/${file.filename}`);

    const property = await Property.create({
      propertyType,
      basicInfo: parsedBasicInfo,
      location: parsedLocation,
      // amenities: parsedAmenities,
      // meals: parsedMeals,
      photos
    });

    res.status(201).json({
      success: true,
      message: "Property created successfully",
      propertyId: property._id,
      property
    });

  } catch (error) {
    console.error("Create Property Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create property",
      error: error.message
    });
  }
};


/* ---------------- GET ALL PROPERTIES ---------------- */
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: properties.length,
      properties
    });

  } catch (error) {
    console.error("Fetch Properties Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch properties",
      error: error.message
    });
  }
};


/* ---------------- GET PROPERTY BY ID ---------------- */
exports.getPropertyById = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found"
      });
    }

    res.status(200).json({
      success: true,
      property
    });

  } catch (error) {
    console.error("Get Property Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch property",
      error: error.message
    });
  }
};


/* ---------------- UPDATE PROPERTY ---------------- */
exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    // Parse JSON fields
    const parsed = {};
    for (const key of Object.keys(body)) {
      try {
        parsed[key] = JSON.parse(body[key]);
      } catch {
        parsed[key] = body[key];
      }
    }

    // Handle new photo uploads
    const files = req.files || [];
    if (files.length > 0) {
      parsed.photos = files.map(file => `/uploads/${file.filename}`);
    }

    const property = await Property.findByIdAndUpdate(
      id,
      parsed,
      { new: true, runValidators: true }
    );

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Property updated successfully",
      property
    });

  } catch (error) {
    console.error("Update Property Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update property",
      error: error.message
    });
  }
};


/* ---------------- DELETE PROPERTY ---------------- */
exports.deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    const property = await Property.findByIdAndDelete(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Property deleted successfully"
    });

  } catch (error) {
    console.error("Delete Property Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete property",
      error: error.message
    });
  }
};






// const properties = require("../data/properties.json");

// const getProperties = (req, res) => {
//   try {
//     let result = [...properties];

//     const {
//       tour_type,
//       price_night,
//       star_category,
//       user_rating,
//       property_type,
//       meals,
//     } = req.query;

//     // Helper function
//     const filterArray = (field, values) => {
//       if (!values) return;
//       const arr = values.split(",");
//       result = result.filter((item) => arr.includes(String(item[field])));
//     };

//     filterArray("tour_type", tour_type);
//     filterArray("star_category", star_category);
//     filterArray("property_type", property_type);
//     filterArray("meals", meals);

//     // Numeric filters
//     if (user_rating) {
//       const ratings = user_rating.split(",").map(Number);
//       result = result.filter((p) =>
//         ratings.some((r) => p.user_rating >= r)
//       );
//     }

//     if (price_night) {
//       const prices = price_night.split(",").map(Number);
//       result = result.filter((p) =>
//         prices.some((price) => p.price_per_night <= price)
//       );
//     }

//     res.json({
//       success: true,
//       count: result.length,
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { getProperties };