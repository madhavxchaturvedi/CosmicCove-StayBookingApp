const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controllers/users");

//signup Form
router.get("/signup", userController.renderSignupForm);

//sign up user
router.post("/signup", wrapAsync(userController.signUp));

//Login Form
router.get("/login", userController.renderLoginForm);

//Login User
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

//Logout User
router.get("/logout", userController.logout);

module.exports = router;
