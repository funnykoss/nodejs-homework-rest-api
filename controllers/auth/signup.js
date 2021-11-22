const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const fs = require("fs/promises");
const path = require("path");

const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public/avatars");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email=${email} already exist`);
  }
  const defaultAvatar = await gravatar.url(email, { s: "250" }, true);
  const newUser = new User({ email, avatarURL: defaultAvatar });
  newUser.setPassword(password);
  await newUser.save();
  const dirPath = path.join(avatarsDir, String(newUser._id));
  await fs.mkdir(dirPath);
  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email: "example@example.com",
      subscription: "starter",
    },
  });
};
module.exports = signup;
