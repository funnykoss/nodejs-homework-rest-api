const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const updateById = async (contactId, name, email, phone) => {
  const contacts = await listContacts();
  const indx = contacts.findIndex(
    (contact) => Number(contact.id) === Number(contactId),
  );

  if (indx === -1) {
    return null;
  }
  contacts[indx] = { id: contactId, name, email, phone };
  await updateContacts(contacts);
  return contacts[indx];
};
module.exports = updateById;
