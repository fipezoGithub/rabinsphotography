const express = require("express");
const servicesImagesUpoload = require("../middleware/serviceUpload");
const {
  createNewPortfolio,
  getAllPortfolios,
  updateAnPortfolio,
  deleteAnPortfolio,
} = require("../controllers/portfolioController");

const portfolioRouter = express.Router();

portfolioRouter
  .route("/")
  .post(servicesImagesUpoload, createNewPortfolio)
  .get(getAllPortfolios);

portfolioRouter
  .route("/:id")
  .put(servicesImagesUpoload, updateAnPortfolio)
  .delete(deleteAnPortfolio);

module.exports = portfolioRouter;
