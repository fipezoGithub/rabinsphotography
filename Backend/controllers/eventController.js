const Event = require("../models/eventModel");
const { resizeImage } = require("../utils/resizeImage");
const { uploadFile, deleteFile } = require("../utils/s3");

async function addNewEvent(req, res) {
  try {
    const filePromises = [];
    req.files["images"].forEach(async (file) => {
      const resizeNewImage = await resizeImage(file);
      filePromises.push(uploadFile(resizeNewImage));
    });

    const imageFiles = req.files["images"].map((file) => file.filename);

    await Promise.all(filePromises);
    const newEvent = await new Event({
      title: req.body.title,
      venuename: req.body.venuename,
      location: req.body.location,
      eventtype: req.body.eventtype,
      images: imageFiles,
    });
    await newEvent.save();

    return res.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAnEventById(req, res) {
  try {
    const id = req.params.id;
    const requestedEvent = await Event.findById(id);
    res.status(200).json(requestedEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllEvents(req, res) {
  try {
    const allEvents = await Event.find({});
    res.status(200).json(allEvents);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateAnEvent(req, res) {
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

    const updatedEvent = await Event.findByIdAndUpdate(id, body);

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteAnEvent(req, res) {
  try {
    const id = req.params.id;
    const deletedObject = await Event.findById(id);
    const filePromises = [];
    deletedObject.images.forEach(async (image) => {
      filePromises.push(deleteFile(image));
    });
    await Promise.all(filePromises);
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  addNewEvent,
  updateAnEvent,
  deleteAnEvent,
  getAllEvents,
  getAnEventById,
};
