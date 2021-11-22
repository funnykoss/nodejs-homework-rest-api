const { Contact } = require("../../models");
const gravatar = require("gravatar");

const addContact = async (req, res) => {
  const image = gravatar.url("olha@gmail.com");
  const newContact = { ...req.body, owner: req.user._id };
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};
module.exports = addContact;
