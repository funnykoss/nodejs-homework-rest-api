const express = require("express");
const router = express.Router();
const { NotFound, BadRequest } = require("http-errors");
const joiSchema = require("./joiSchema");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContacts,
  updateById,
} = require("../../model/contacts");

router.get("/", async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await getContactById(contactId);
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
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      throw new BadRequest(error.message);
    }
    const result = await addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await removeContact(contactId);
    if (!result) {
      throw new NotFound(`Contact with id=${contactId} is not found`);
    }
    res.json({
      status: "success",
      code: 200,
      message: "Remove success",
    });
  } catch (error) {
    next(error);
  }
});

// router.patch("/:contactId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

module.exports = router;
