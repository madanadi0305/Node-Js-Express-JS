const express=require("express");
var router=express.Router();
var pages=require("../controller/htmlController");
router.route("/").get(pages.homePage);
router.route("/aboutus").get(pages.aboutUs);
router.route("/login").get(pages.login);
router.route("/signup").get(pages.signUp);

module.exports=router;