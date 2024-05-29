const express = require("express");
const filmCoverUpoload = require("../middleware/filmsCoverUpload");
const {
  createNewFilm,
  getAllFilms,
  updateAFilm,
  deleteAFilm,
  getAFilmById,
} = require("../controllers/filmController");

const filmRouter = express.Router();

filmRouter.route("/").post(filmCoverUpoload, createNewFilm).get(getAllFilms);
filmRouter
  .route("/:id")
  .get(getAFilmById)
  .put(filmCoverUpoload, updateAFilm)
  .delete(deleteAFilm);

module.exports = filmRouter;
