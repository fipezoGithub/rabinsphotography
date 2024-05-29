const express = require("express");
const servicesImagesUpoload = require("../middleware/serviceUpload");
const {
  addNewEvent,
  updateAnEvent,
  deleteAnEvent,
  getAnEventById,
  getAllEvents,
} = require("../controllers/eventController");

const eventRouter = express.Router();

eventRouter.post("/add", servicesImagesUpoload, addNewEvent);
eventRouter.get("/", getAllEvents);
eventRouter
  .route("/:id")
  .get(getAnEventById)
  .put(servicesImagesUpoload, updateAnEvent)
  .delete(deleteAnEvent);

module.exports = eventRouter;
