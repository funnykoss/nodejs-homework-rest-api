const { NotFound } = require("http-errors");
const { User } = require("../../models");

const verify = async (res, req) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new NotFound();
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.json({
    status: "success",
    code: 200,
    message: "Email success verify",
  });
};
module.exports = verify;
