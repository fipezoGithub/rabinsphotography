import { mongoose } from "mongoose";

const portfolioSchema = new mongoose.Schema(
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

const Portfolio =
  mongoose.models.portfolioModel ||
  mongoose.model("portfolioModel", portfolioSchema);

export default Portfolio;
