const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const fs = require("fs/promises");
const path = require("path");

const { nanoid } = require("nanoid");
const { sendEmail } = require("../../helpers");
const { User } = require("../../models");

const avatarsDir = path.join(__dirname, "../../", "public/avatars");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email=${email} already exist`);
  }
  const defaultAvatar = await gravatar.url(email, { s: "250" }, true);

  const verificationToken = nanoid();
  const newUser = new User({
    email,
    avatarURL: defaultAvatar,
    verificationToken,
  });
  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `
        <a href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения email</a>
        `,
  };
  await sendEmail(mail);
  const dirPath = path.join(avatarsDir, String(newUser._id));
  await fs.mkdir(dirPath);
  res.status(201).json({
    status: "success",
    code: 201,
    message: "Register success",
  });
};
module.exports = signup;
