const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const updateById = async (contactId, data) => {
  const contacts = await listContacts();
  const indx = contacts.findIndex(
    (contact) => Number(contact.id) === Number(contactId),
  );

  if (indx === -1) {
    return null;
  }
  contacts[indx] = { id: contactId, ...data };
  await updateContacts(contacts);
  return contacts[indx];
};
module.exports = updateById;
