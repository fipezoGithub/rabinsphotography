const Wedding = require("../models/weddingModel");
const { resizeImage } = require("../utils/resizeImage");
const { uploadFile, deleteFile } = require("../utils/s3");

async function createNewWedding(req, res) {
  try {
    const filePromises = [];
    req.files["images"].forEach(async (file) => {
      const resizeNewImage = await resizeImage(file);
      filePromises.push(uploadFile(resizeNewImage));
    });

    const imageFiles = req.files["images"].map((file) => file.filename);

    await Promise.all(filePromises);
    const newWedding = await new Wedding({
      husband: req.body.husband,
      wife: req.body.wife,
      venuename: req.body.venuename,
      location: req.body.location,
      weddingtype: req.body.weddingtype,
      images: imageFiles,
    });
    await newWedding.save();

    return res.status(201).json(newWedding);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllWedding(req, res) {
  try {
    const allWeddings = await Wedding.find({});
    res.status(200).json(allWeddings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getWeddingById(req, res) {
  try {
    const id = req.params.id;
    const requestedWedding = await Wedding.findById(id);
    res.status(200).json(requestedWedding);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateAWedding(req, res) {
  try {
    const id = req.params.id;
    const filePromises = [];
    let body = {};
    if (req.body.husband) {
      body.husband = req.body.husband;
    }
    if (req.body.wife) {
      body.wife = req.body.wife;
    }
    if (req.body.venuename) {
      body.venuename = req.body.venuename;
    }
    if (req.body.weddingtype) {
      body.weddingtype = req.body.weddingtype;
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

    const updatedWedding = await Wedding.findByIdAndUpdate(id, body);

    res.status(200).json(updatedWedding);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteAnWedding(req, res) {
  try {
    const id = req.params.id;
    const deletedObject = await Wedding.findById(id);
    const filePromises = [];
    deletedObject.images.forEach(async (image) => {
      filePromises.push(deleteFile(image));
    });
    await Promise.all(filePromises);
    await Wedding.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createNewWedding,
  getAllWedding,
  deleteAnWedding,
  updateAWedding,
  getWeddingById,
  deleteAnWedding,
};
