const sendMail = require("../../utils/mailer");

exports.sendContactMail = async (req, res) => {
  try {
    await sendMail(req.body);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send email"
    });
  }
};
