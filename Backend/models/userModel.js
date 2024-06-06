const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    avatar: {
      type: String,
    },
    orders: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "orderModel",
    },
    favouritePackage: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "packageModel",
    },
  },
  { timestamps: true }
);

const User =
  mongoose.models.userModel || mongoose.model("userModel", userSchema);

module.exports = User;
