const express = require("express");
const { getDashBoardData } = require("../controllers/dashboardController");

const dashboardRouter = express.Router();

dashboardRouter.get("/", getDashBoardData);

module.exports = dashboardRouter;
