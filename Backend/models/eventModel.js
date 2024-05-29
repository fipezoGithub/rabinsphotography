const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    venuename: {
      type: String,
      required: true,
    },
    eventtype: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Event =
  mongoose.models.eventModel || mongoose.model("eventModel", eventSchema);

module.exports = Event;
