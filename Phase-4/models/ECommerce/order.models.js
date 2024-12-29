import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    require: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      require: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    OrderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
