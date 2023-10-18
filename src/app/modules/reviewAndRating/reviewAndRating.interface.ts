import {Model, Types} from "mongoose";
import {ICart} from "../cart/cart.interface";
import {IUser} from "../user/user.interface";
import {IService} from "../service/service.interface";

export type IReviewRating = {
  rating: number;
  review: string;
  service: IService | Types.ObjectId;
  user: IUser | Types.ObjectId;
};
export type ReviewRatingModel = Model<IReviewRating, Record<string, unknown>>;
