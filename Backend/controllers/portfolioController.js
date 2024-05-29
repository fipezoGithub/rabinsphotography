const Portfolio = require("../models/portfolioModel");
const { resizeImage } = require("../utils/resizeImage");
const { uploadFile, deleteFile } = require("../utils/s3");

async function createNewPortfolio(req, res) {
  try {
    const filePromises = [];
    req.files["images"].forEach(async (file) => {
      const resizeNewImage = await resizeImage(file);
      filePromises.push(uploadFile(resizeNewImage));
    });

    const imageFiles = req.files["images"].map((file) => file.filename);

    await Promise.all(filePromises);
    const newPortfolio = await new Portfolio({
      title: req.body.title,
      venuename: req.body.venuename,
      location: req.body.location,
      eventtype: req.body.eventtype,
      images: imageFiles,
    });
    await newPortfolio.save();

    return res.status(201).json(newPortfolio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllPortfolios(req, res) {
  try {
    const portfolios = await Portfolio.find({});
    res.status(200).json(portfolios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateAnPortfolio(req, res) {
  try {
    const id = req.params.id;
    const filePromises = [];
    let body = {};
    if (req.body.title) {
      body.title = req.body.title;
    }
    if (req.body.venuename) {
      body.venuename = req.body.venuename;
    }
    if (req.body.eventtype) {
      body.eventtype = req.body.eventtype;
    }
    if (req.body.location) {
      body.location = req.body.location;
    }
    let imageFiles;
    if (req.files.images.length > 0) {
      req.files["images"].forEach(async (file) => {
        const resizeNewImage = await resizeImage(file);
        filePromises.push(uploadFile(resizeNewImage));
      });
      imageFiles = req.files["images"].map((file) => file.filename);
      body.images = imageFiles;
    }
    await Promise.all(filePromises);

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, body);

    res.status(200).json(updatedPortfolio);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteAnPortfolio(req, res) {
  try {
    const id = req.params.id;
    const deletedObject = await Portfolio.findById(id);
    const filePromises = [];
    deletedObject.images.forEach(async (image) => {
      filePromises.push(deleteFile(image));
    });
    await Promise.all(filePromises);
    await Portfolio.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createNewPortfolio,
  getAllPortfolios,
  updateAnPortfolio,
  deleteAnPortfolio,
};
