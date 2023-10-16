import {Schema, model} from "mongoose";
import {CartModel, ICart} from "./cart.interface";

const CartSchema = new Schema<ICart, CartModel>(
  {
    serviceId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Service",
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
//create model
export const Cart = model<ICart, CartModel>("Cart", CartSchema);
