const express = require("express");
const router = express.Router();
const { joiSchema } = require("../../validation");
const { validation, controllerWrapper } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");

router.get("/", controllerWrapper(ctrl.listContacts));

router.get("/:contactId", controllerWrapper(ctrl.getContactById));

router.post("/", validation(joiSchema), controllerWrapper(ctrl.addContact));

router.put(
  "/:contactId",
  validation(joiSchema),
  controllerWrapper(ctrl.updateById),
);

router.delete("/:contactId", controllerWrapper(ctrl.removeContact));

module.exports = router;
