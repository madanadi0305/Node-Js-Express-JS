const express = require("express");
const mainController = require("../controllers/MainController");
const loginController = require("../controllers/LoginController");
const router = express.Router();
router.route("/").get(mainController.home);
router.route("/signup").get(mainController.signup);
router.route("/signup").post(loginController.signup);
module.exports = router;