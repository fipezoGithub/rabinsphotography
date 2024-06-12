const Contact = require("../models/contactModel");

async function createAContactRequest(req, res) {
  try {
    const newCotactRequest = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      shoottype: req.body.shoottype,
      eventdate: req.body.eventdate,
      location: req.body.location,
      description: req.body.description,
      status: "pending",
    });
    await newCotactRequest.save();
    res.status(500).json(newCotactRequest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: error.message });
  }
}

async function getAllContactRequests(req, res) {
  try {
    const contacts = await Contact.find({});
    res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateContactRequests(req, res) {
  try {
    const { id } = req.params;
    await Contact.findByIdAndUpdate(id, {
      status: "complete",
    });
    const contact = await Contact.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteContactRequests(req, res) {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getPendingContactRequests(req, res) {
  try {
    const pendingContacts = await Contact.find({ status: "pending" });
    res.status(200).json(pendingContacts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createAContactRequest,
  getAllContactRequests,
  updateContactRequests,
  deleteContactRequests,
  getPendingContactRequests,
};
