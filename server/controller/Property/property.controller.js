
const Property = require("../../Models/PropertyList/propertyList.model");

exports.createProperty = async (req, res) => {
  try {
    const body = req.body;

    // Parse JSON fields sent as strings
    const parsed = {};
    for (const key of Object.keys(body)) {
      try {
        parsed[key] = JSON.parse(body[key]);
      } catch {
        parsed[key] = body[key];
      }
    }

    // Handle uploaded photos
    const files = req.files || [];
    const urls = files.map(f => `/uploads/${f.filename}`);

    const newProperty = await Property.create({
      ...parsed,
      photos: urls,
    });

    return res.json({
      success: true,
      property: newProperty,
    });

  } catch (err) {
    console.error("Property Create Error:", err);
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
