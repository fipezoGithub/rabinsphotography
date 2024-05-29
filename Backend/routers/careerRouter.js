const express = require("express");
const carrerCVUpoload = require("../middleware/cvUpload");
const {
  applyAJob,
  getAllApplication,
  deleteApplication,
} = require("../controllers/careerController");

const careerRouter = express.Router();

careerRouter.post("/apply", carrerCVUpoload, applyAJob);
careerRouter.get("/", getAllApplication);
careerRouter.delete("/:id", deleteApplication);

module.exports = careerRouter;
