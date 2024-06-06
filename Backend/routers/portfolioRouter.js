const express = require("express");
const servicesImagesUpoload = require("../middleware/serviceUpload");
const {
  createNewPortfolio,
  getAllPortfolios,
  updateAnPortfolio,
  deleteAnPortfolio,
  getAPortFolioById,
} = require("../controllers/portfolioController");

const portfolioRouter = express.Router();

portfolioRouter
  .route("/")
  .post(servicesImagesUpoload, createNewPortfolio)
  .get(getAllPortfolios);

portfolioRouter
  .route("/:id")
  .get(getAPortFolioById)
  .put(servicesImagesUpoload, updateAnPortfolio)
  .delete(deleteAnPortfolio);

module.exports = portfolioRouter;
