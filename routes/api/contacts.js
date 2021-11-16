const express = require("express");
const router = express.Router();
const {
  validation,
  controllerWrapper,
  authenticate,
} = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");
const { joiContactSchema, joiFavoriteSchema } = require("../../models/contact");

router.get("/", authenticate, controllerWrapper(ctrl.listContacts));

router.get("/:contactId", authenticate, controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(ctrl.addContact),
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(ctrl.updateStatusContact),
);

router.put(
  "/:contactId",
  authenticate,
  validation(joiContactSchema),
  controllerWrapper(ctrl.updateById),
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(joiFavoriteSchema),
  controllerWrapper(ctrl.updateFavoriteController),
);

router.delete("/:contactId", controllerWrapper(ctrl.removeContact));

module.exports = router;
