import {Schema, model} from "mongoose";
import {BookingModel, IBooking} from "./booking.interface";

const BookingSchema = new Schema<IBooking, BookingModel>(
  {
    totalCost: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);
//create model
export const Booking = model<IBooking, BookingModel>("Booking", BookingSchema);
