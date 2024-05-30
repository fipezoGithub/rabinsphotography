const User = require("../models/userModel");
const { resizeImage } = require("../utils/resizeImage");
const { uploadFile } = require("../utils/s3");

async function createNewUser(req, res) {
  try {
    const resizeCover = await resizeImage(req.files["avatar"][0]);
    await uploadFile(resizeCover);
    const user = new User({
      fullname: req.body.fullname,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      avatar: resizeCover.filename,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getUserDetails(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateUserDetails(req, res) {
  try {
    const id = req.params.id;
    let body = {};
    const filePromises = [];
    if (req.body.fullname) {
      body.fullname = req.body.fullname;
    }
    if (req.body.phone) {
      body.phone = req.body.phone;
    }
    if (req.body.email) {
      body.email = req.body.email;
    }
    if (req.body.address) {
      body.location = req.body.address;
    }
    let imageFiles;
    if (req.files.avatar.length) {
      const resizeNewImage = await resizeImage(file);
      filePromises.push(uploadFile(resizeNewImage));
      body.avatar = resizeNewImage.filename;
    }
    await Promise.all(filePromises);

    const updatedUser = await User.findByIdAndUpdate(id, body);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function loginUser(req, res) {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createNewUser,
  getUserDetails,
  updateUserDetails,
};
