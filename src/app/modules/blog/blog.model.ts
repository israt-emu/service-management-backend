import {Schema, model} from "mongoose";
import {BlogModel, IBlog} from "./blog.interface";

const BlogSchema = new Schema<IBlog, BlogModel>(
  {
    views: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      //   required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//create model
export const Blog = model<IBlog, BlogModel>("Blog", BlogSchema);
