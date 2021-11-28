const { Conflict } = require("http-errors");
const { nanoid } = require("nanoid");
const { User } = require("../../models");
const { sendEmail } = require("../../utils");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with email=${email} allready exist`);
  }
  const verificationToken = nanoid();
  const newUser = new User({ email, verificationToken });
  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject: "Подтверждение регистрации",
    html: `<a target="_blank"
    href="http://localhost:3000/api/verify/${verificationToken}">Нажмите для подтверждения email</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    message: "Register success",
  });
};
module.exports = signup;
