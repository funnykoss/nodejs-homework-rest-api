const express = require("express");
const { validation, controllerWrapper } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSchema), controllerWrapper(ctrl.signup));

module.exports = router;
