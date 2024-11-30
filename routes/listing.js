const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const listingControllers = require("../controllers/listings");

const multer = require("multer");
const { storage } = require("../cloudConfig");
const upload = multer({ storage });

//Index Route
router.get("/", wrapAsync(listingControllers.index));

//New Route
router.get("/new", isLoggedIn, listingControllers.renderNewForm);

//Show Route
router.get("/:id", wrapAsync(listingControllers.showListing));

//Create Route
router.post(
  "/",
  isLoggedIn,
  // validateListing,
  upload.single("listing[image][url]"),
  wrapAsync(listingControllers.createListing)
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingControllers.renderEditForm)
);

//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  // validateListing,
  upload.single("listing[image][url]"),
  wrapAsync(listingControllers.updateListing)
);

//Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingControllers.destroyListing)
);

module.exports = router;
