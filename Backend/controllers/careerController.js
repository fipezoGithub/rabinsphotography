const fs = require("fs");
const util = require("util");
const Career = require("../models/careerModel");
const { uploadFile, deleteFile } = require("../utils/s3");
const unlinkFile = util.promisify(fs.unlink);

async function applyAJob(req, res) {
  try {
    await uploadFile(req.file);
    await unlinkFile("uploads/" + req.file.filename);
    const newCareer = await new Career({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      designation: req.body.designation,
      resume: req.file.filename,
    });
    await newCareer.save();

    res.status(201).json(newCareer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllApplication(req, res) {
  try {
    const allApplications = await Career.find({});
    res.status(200).json(allApplications);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteApplication(req, res) {
  try {
    const id = req.params.id;
    const career = await Career.findById(id);
    await deleteFile(career.resume);
    await Career.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  applyAJob,
  getAllApplication,
  deleteApplication,
};
