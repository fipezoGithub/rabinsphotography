const BabyAndMaternity = require("../models/babyAndMaternityModel");
const { resizeImage } = require("../utils/resizeImage");
const { uploadFile, deleteFile } = require("../utils/s3");

async function addNewBabyAndMaternity(req, res) {
  try {
    const filePromises = [];
    req.files["images"].forEach(async (file) => {
      const resizeNewImage = await resizeImage(file);
      filePromises.push(uploadFile(resizeNewImage));
    });

    const imageFiles = req.files["images"].map((file) => file.filename);

    await Promise.all(filePromises);
    const newBabyEvent = await new BabyAndMaternity({
      title: req.body.title,
      venuename: req.body.venuename,
      location: req.body.location,
      eventtype: req.body.eventtype,
      images: imageFiles,
    });
    await newBabyEvent.save();

    return res.status(201).json(newBabyEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllBabyAndMaternity(req, res) {
  try {
    const allBabyAndMaternity = await BabyAndMaternity.find({});
    res.status(200).json(allBabyAndMaternity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getABabyAndMaternity(req, res) {
  try {
    const id = req.params.id;
    const babyAndMaternity = await BabyAndMaternity.findById(id);
    res.status(200).json(babyAndMaternity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateABabyAndMaternity(req, res) {
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

    const updatedBabyAndMaternity = await BabyAndMaternity.findByIdAndUpdate(
      id,
      body
    );

    res.status(200).json(updatedBabyAndMaternity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteABabyAndMaternity(req, res) {
  try {
    const id = req.params.id;
    const deletedObject = await BabyAndMaternity.findById(id);
    const filePromises = [];
    deletedObject.images.forEach(async (image) => {
      filePromises.push(deleteFile(image));
    });
    await Promise.all(filePromises);
    await BabyAndMaternity.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  addNewBabyAndMaternity,
  getAllBabyAndMaternity,
  updateABabyAndMaternity,
  deleteABabyAndMaternity,
  getABabyAndMaternity,
};
