const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateById = require("./updateById");
const removeContact = require("./removeContact");
const updateStatusContact = require("./updateStatusContact");
const updateFavoriteController = require("./updateFavoriteController");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateById,
  removeContact,
  updateStatusContact,
  updateFavoriteController,
};
