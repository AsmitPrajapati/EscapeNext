const TeamMember = require("../../Models/TeamMember/teamMember.model");

exports.addTeamMember = async (req, res) => {
  try {
    const newMember = await TeamMember.create(req.body);
    res.json({ success: true, data: newMember });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getTeamMembers = async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json({ success: true, data: members });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
