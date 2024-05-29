const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    videolinks: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Film =
  mongoose.models.filmModel || mongoose.model("filmModel", filmSchema);

module.exports = Film;
