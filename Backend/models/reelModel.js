const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema(
  {
    uri: {
      type: String,
      required: true,
    },
    videoSrc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Reel =
  mongoose.models.reelModel || mongoose.model("reelModel", reelSchema);

module.exports = Reel;
