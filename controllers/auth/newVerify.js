const { NotFound, BadRequest } = require("http-errors");
const { User } = require("../../models");
const { sendMail } = require("../../helpers");

const newVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user || !email) {
    throw new NotFound("missing required field email");
  }

  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "verification registration",
    html: `<a href='http://localhost:8001/api/auth/verify/${user.verificationToken}'>Click to verify email</a>`,
  };
  await sendMail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = newVerify;
