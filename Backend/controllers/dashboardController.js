const Contact = require("../models/contactModel");
const Event = require("../models/eventModel");
const Portfolio = require("../models/portfolioModel");
const Wedding = require("../models/weddingModel");

async function getDashBoardData(req, res) {
  try {
    const pendingContact = await Contact.countDocuments({ status: "pending" });
    const allWeddings = await Wedding.countDocuments({});
    const allEvents = await Event.countDocuments({});
    const allPortfolio = await Portfolio.countDocuments({});
    res.status(200).json({
      contact: pendingContact,
      wedding: allWeddings,
      event: allEvents,
      portfolio: allPortfolio,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getDashBoardData,
};
