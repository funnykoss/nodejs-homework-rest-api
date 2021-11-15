const { BadRequest } = require("http-errors");
const { User } = require("../../models");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.comparePassword(password)) {
    throw new BadRequest("wrong email or password");
  }
};

module.exports = login;
