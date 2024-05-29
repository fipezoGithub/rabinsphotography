const express = require("express");
const idproofUpoload = require("../middleware/idUpload");
const {
  createJoinUsRequest,
  getAllJoinUsRequest,
  deleteJoinUsRequest,
} = require("../controllers/joinUsController");

const joinUsRouter = express.Router();

joinUsRouter
  .route("/")
  .post(idproofUpoload, createJoinUsRequest)
  .get(getAllJoinUsRequest);

joinUsRouter.delete("/:id", deleteJoinUsRequest);

module.exports = joinUsRouter;
