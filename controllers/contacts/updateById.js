const contactsOperations = require("../../model/contact");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateById(contactId, req.body);
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
