const express = require("express");
const {
  createAContactRequest,
  getAllContactRequests,
  updateContactRequests,
  deleteContactRequests,
  getPendingContactRequests,
} = require("../controllers/contactController");

const contactRouter = express.Router();

contactRouter.post("/add", createAContactRequest);
contactRouter.get("/", getAllContactRequests);
contactRouter
  .route("/:id")
  .put(updateContactRequests)
  .delete(deleteContactRequests);
contactRouter.get("/pending", getPendingContactRequests);

module.exports = contactRouter;
