const clientModel = require("../../Models/Client/client.model")

exports.addClient = async (req, res) => {
  try {
    const newClient = await clientModel.create(req.body);
    res.json({ success: true, data: newClient });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getClients = async (req, res) => {
  try {
    const clients = await clientModel.find();
    res.json({ success: true, data: clients });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
