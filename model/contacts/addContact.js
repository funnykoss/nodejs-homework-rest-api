// const fs = require("fs/promises");
// const path = require("path");
const listContacts = require("./listContacts");
const crypto = require("crypto");
const updateContacts = require("./updateContacts");

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
};
module.exports = addContact;
