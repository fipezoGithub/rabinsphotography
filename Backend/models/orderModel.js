const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    dates: {
      type: [String],
      required: true,
    },
    timings: {
      type: Object,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    rmContact: {
      type: Boolean,
      required: true,
    },
    additional: {
      type: String,
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "packageModel",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      required: true,
    },
  },
  { timestamps: true }
);

const Order =
  mongoose.models.orderModel || mongoose.model("orderModel", orderSchema);

module.exports = Order;
