import { mongoose } from "mongoose";

const careerSchema = new mongoose.Schema(
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
    designation: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Career =
  mongoose.models.careerModel || mongoose.model("careerModel", careerSchema);

export default Career;
