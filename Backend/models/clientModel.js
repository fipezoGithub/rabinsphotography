const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    Date: {
      type: [Date],
      required: true,
    },
    eventtype: {
      type: String,
      required: true,
    },
    trailer: {
      type: Boolean,
      required: true,
    },
    cinematicVideo: {
      type: Boolean,
      required: true,
    },
    album: {
      type: Object,
      required: true,
    },
    reel: {
      type: Boolean,
      required: true,
    },
    editedphotos: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Client =
  mongoose.models.clientModel || mongoose.model("clientModel", clientSchema);

module.exports = Client;
