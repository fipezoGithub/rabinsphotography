const express = require("express");
const servicesImagesUpoload = require("../middleware/serviceUpload");
const {
  addNewBabyAndMaternity,
  updateABabyAndMaternity,
  deleteABabyAndMaternity,
  getABabyAndMaternity,
  getAllBabyAndMaternity,
} = require("../controllers/babyAndMaternityController");

const babyAndMaternityRouter = express.Router();

babyAndMaternityRouter.post(
  "/add",
  servicesImagesUpoload,
  addNewBabyAndMaternity
);
babyAndMaternityRouter.get("/", getAllBabyAndMaternity);
babyAndMaternityRouter
  .route("/:id")
  .get(getABabyAndMaternity)
  .put(servicesImagesUpoload, updateABabyAndMaternity)
  .delete(deleteABabyAndMaternity);

module.exports = babyAndMaternityRouter;
