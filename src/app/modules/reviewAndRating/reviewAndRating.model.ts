import {Schema, model} from "mongoose";
import {IReviewRating, ReviewRatingModel} from "./reviewAndRating.interface";

const ReviewRatingSchema = new Schema<IReviewRating, ReviewRatingModel>(
  {
    rating: {
      type: Number,
      required: true,
    },
    review: {
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
  },
  {
    timestamps: true,
  }
);
//create model
export const ReviewAndRating = model<IReviewRating, ReviewRatingModel>("ReviewAndRating", ReviewRatingSchema);
