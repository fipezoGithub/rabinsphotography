const Reel = require("../models/reelModel");
const { uploadFile, deleteFile } = require("../utils/s3");

async function createNewReel(req, res) {
  try {
    await uploadFile(req.file);
    const newReel = await new Reel({
      uri: req.body.uri,
      videoSrc: req.file.filename,
    });
    await newReel.save();
    res.status(201).json(newReel);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllReels(req, res) {
  try {
    const reels = await Reel.find({});
    res.status(200).json(reels);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteAReel(req, res) {
  try {
    const { id } = req.params;
    const deleteReel = await Reel.findById(id);
    await deleteFile(deleteReel.videoSrc);
    await Reel.findByIdAndDelete(id);
    res.status(200).send("delete successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createNewReel,
  getAllReels,
  deleteAReel,
};
