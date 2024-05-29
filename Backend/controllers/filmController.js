const Film = require("../models/filmModel");
const { resizeImage } = require("../utils/resizeImage");
const { uploadFile, deleteFile } = require("../utils/s3");

async function createNewFilm(req, res) {
  try {
    const filePromises = [];
    const resizeNewImage = await resizeImage(req.files["cover"][0]);
    filePromises.push(uploadFile(resizeNewImage));

    await Promise.all(filePromises);
    const newFilm = await new Film({
      title: req.body.title,
      videolinks: req.body.videolinks,
      cover: resizeNewImage.filename,
    });
    await newFilm.save();

    res.status(201).json(newFilm);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllFilms(req, res) {
  try {
    const films = await Film.find({});
    res.status(200).json(films);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAFilmById(req, res) {
  try {
    const id = req.params.id;
    const film = await Film.findById(id);
    res.status(200).json(film);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateAFilm(req, res) {
  try {
    const id = req.params.id;
    let body = {};
    if (req.body.title) {
      body.title = req.body.title;
    }
    if (req.body.videolinks) {
      body.videolinks = req.body.videolinks;
    }
    const filePromises = [];
    if (req.files["cover"][0]) {
      const resizeNewImage = await resizeImage(req.files["cover"][0]);
      filePromises.push(uploadFile(resizeNewImage));
    }
    await Promise.all(filePromises);
    const updatedFilm = await Film.findByIdAndUpdate(id, body);
    res.status(200).json(updatedFilm);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteAFilm(req, res) {
  try {
    const id = req.params.id;
    const deletedObject = await Film.findById(id);
    const filePromises = [];
    filePromises.push(deleteFile(deletedObject.cover));
    await Promise.all(filePromises);
    await Film.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createNewFilm,
  getAllFilms,
  updateAFilm,
  deleteAFilm,
  getAFilmById,
};
