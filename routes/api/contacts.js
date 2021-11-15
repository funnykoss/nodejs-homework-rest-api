const express = require("express");
const router = express.Router();
const { validation, controllerWrapper } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");
const { joiContactSchema } = require("../../models/contact");

router.get("/", controllerWrapper(ctrl.listContacts));

router.get("/:contactId", controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  validation(joiContactSchema),
  controllerWrapper(ctrl.addContact),
);

router.patch(
  "/:contactId/favorite",
  validation(joiContactSchema),
  controllerWrapper(ctrl.updateStatusContact),
);

router.put(
  "/:contactId",
  validation(joiContactSchema),
  controllerWrapper(ctrl.updateById),
);

router.delete("/:contactId", controllerWrapper(ctrl.removeContact));

module.exports = router;
