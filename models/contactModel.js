import { mongoose } from "mongoose";

const contactSchema = new mongoose.Schema({
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
  shoottype: {
    type: String,
    required: true,
  },
  eventdate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Contact =
  mongoose.models.contactModel || mongoose.model("contactModel", contactSchema);

export default Contact;
