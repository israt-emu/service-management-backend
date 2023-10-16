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
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: ["available", "unavailable"],
    },

    rating: [
      {
        type: Number,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    reviews: {
      review: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
      },
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//create model
export const Service = model<IService, ServiceModel>("Service", ServiceSchema);
