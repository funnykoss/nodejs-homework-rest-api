const contactsOperations = require("../../model/contacts");

const listContacts = async (_, res) => {
  const result = await contactsOperations.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = listContacts;