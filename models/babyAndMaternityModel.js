import { mongoose } from "mongoose";

const babyAndMaternitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  venuename: {
    type: String,
    required: true,
  },
  location: {
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
});

const BabyAndMaternity =
  mongoose.models.babyAndMaternityModel ||
  mongoose.model("babyAndMaternityModel", babyAndMaternitySchema);

export default BabyAndMaternity;
