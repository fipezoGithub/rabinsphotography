const express = require("express");
const {
  createNewWedding,
  getAllWedding,
  getWeddingById,
  updateAWedding,
  deleteAnWedding,
} = require("../controllers/weddingController");
const servicesImagesUpoload = require("../middleware/serviceUpload");

const weddingRouter = express.Router();

weddingRouter.post("/add", servicesImagesUpoload, createNewWedding);
weddingRouter.get("/", getAllWedding);
weddingRouter
  .route("/:id")
  .get(getWeddingById)
  .put(servicesImagesUpoload, updateAWedding)
  .delete(deleteAnWedding);

module.exports = weddingRouter;
