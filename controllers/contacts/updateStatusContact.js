const { BadRequest } = require("http-errors");
const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  if (favorite === undefined) {
    throw new BadRequest("missing field favorite");
  }
  const result = await Contact.findByIdAndUpdate(contactId, favorite, {
    new: true,
  }).populate("owner", "_id email");
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

module.exports = updateStatusContact;
