const express = require("express");
const avatarUpload = require("../middleware/avatarUpload");
const {
  createNewUser,
  getUserDetails,
  updateUserDetails,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/").post(avatarUpload, createNewUser);
userRouter
  .route("/:id")
  .get(getUserDetails)
  .put(avatarUpload, updateUserDetails);

module.exports = userRouter;
