const { Contact } = require("../../models");

const { NotFound } = require("http-errors");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId).populate(
    "owner",
    "_id email",
  );
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} is not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getContactById;
