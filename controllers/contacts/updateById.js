const { Contact } = require("../../models");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
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

module.exports = updateById;
