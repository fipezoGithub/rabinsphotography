const express = require("express");
const {
  createAContactRequest,
  getAllContactRequests,
} = require("../controllers/contactController");

const contactRouter = express.Router();

contactRouter.post("/add", createAContactRequest);
contactRouter.get("/", getAllContactRequests);

module.exports = contactRouter;
