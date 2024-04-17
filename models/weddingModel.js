import { mongoose } from "mongoose";

const weddingSchema = new mongoose.Schema({
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
});

const Wedding =
  mongoose.models.weddingModel || mongoose.model("weddingModel", weddingSchema);

export default Wedding;
