const contactsOperations = require("../../model/contact");
const { NotFound } = require("http-errors");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} is not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "Remove success",
  });
};

module.exports = removeContact;
