const JoinUs = require("../models/joinUsModel");
const { deleteFile } = require("../utils/s3");

async function createJoinUsRequest(req, res) {
  try {
    await uploadFile(req.files["resume"][0]);
    const newJoinUs = await new JoinUs({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      designation: req.body.designation,
      address: req.body.address,
      equipments: req.body.equipments,
      idproof: uploadAbleFile.filename,
    });
    await newJoinUs.save();
    res.status(201).json(newJoinUs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllJoinUsRequest(req, res) {
  try {
    const joinUsRequests = await JoinUs.find({});
    res.status(200).json(joinUsRequests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteJoinUsRequest(req, res) {
  try {
    const id = req.params.id;
    const deletedObject = await JoinUs.findById(id);
    await deleteFile(deletedObject.idproof);
    await JoinUs.findByIdAndDelete(id);
    res.status(200).send("Deleted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createJoinUsRequest,
  getAllJoinUsRequest,
  deleteJoinUsRequest,
};
