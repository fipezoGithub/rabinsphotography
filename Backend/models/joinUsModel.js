const mongoose = require("mongoose");

const joinUsSchema = new mongoose.Schema(
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
    address: {
      type: String,
      required: true,
    },
    equipments: {
      type: String,
      required: true,
    },
    idproof: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const JoinUs =
  mongoose.models.joinUsModel || mongoose.model("joinUsModel", joinUsSchema);

module.exports = JoinUs;
