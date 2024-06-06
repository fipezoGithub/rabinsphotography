const express = require("express");
const videoUpload = require("../middleware/reelThumbVideo");
const {
  createNewReel,
  getAllReels,
  deleteAReel,
} = require("../controllers/reelController");

const reelRouter = express.Router();

reelRouter.route("/").post(videoUpload, createNewReel).get(getAllReels);
reelRouter.route("/:id").delete(deleteAReel);

module.exports = reelRouter;
