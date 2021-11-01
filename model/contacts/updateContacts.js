const fs = require("fs/promises");
const path = require("path");
const contactPath = path.join(__dirname, "contacts.json");

const updateContacts = async (newProducts) => {
  const contactsStr = JSON.stringify(newProducts);
  await fs.writeFile(contactPath, contactsStr);
};
module.exports = updateContacts;
