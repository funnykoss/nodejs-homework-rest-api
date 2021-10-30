const express = require("express");
const contactsOperations = require("../../model/contacts");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const contacts = await contactsOperations.listContacts();
  console.log(contacts);
  res.json(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
