import {Schema, model} from "mongoose";
import {IService, ServiceModel} from "./service.interface";

const ServiceSchema = new Schema<IService, ServiceModel>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },
    images: [
      {
        type: String,
      },
    ],

    addedBy: {
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
export const Service = model<IService, ServiceModel>("Service", ServiceSchema);
