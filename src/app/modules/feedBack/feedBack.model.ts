import {Schema, model} from "mongoose";
import {FeedbackModel, IFeedback} from "./feedBack.interface";

const FeedbackSchema = new Schema<IFeedback, FeedbackModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//create model
export const Feedback = model<IFeedback, FeedbackModel>("Feedback", FeedbackSchema);
