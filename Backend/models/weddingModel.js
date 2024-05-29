const mongoose = require("mongoose");

const weddingSchema = new mongoose.Schema(
  {
    husband: {
      type: String,
      required: true,
    },
    wife: {
      type: String,
      required: true,
    },
    venuename: {
      type: String,
    },
    location: {
      type: String,
    },
    weddingtype: {
      type: String,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Wedding =
  mongoose.models.weddingModel || mongoose.model("weddingModel", weddingSchema);

module.exports = Wedding;
