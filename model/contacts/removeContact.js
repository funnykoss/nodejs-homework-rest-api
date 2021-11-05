const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.findIndex(
    ({ id }) => Number(id) === Number(contactId),
  );
  if (result === -1) {
    return null;
  }
  const removeContacts = contacts.splice(result, 1);
  await updateContacts(contacts);
  return removeContacts;
};

module.exports = removeContact;
