const { Contact } = require("../../models");

const listContacts = async (_, res) => {
  const { _id } = req.user;
  const result = await Contact.find({ owner: _id }).populate(
    "owner",
    "_id email",
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = listContacts;
