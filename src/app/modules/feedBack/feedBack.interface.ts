import {Model, Types} from "mongoose";
import {IUser} from "../user/user.interface";

export type IFeedback = {
  user: Types.ObjectId | IUser;
  rating: number;
  comments: string;
};

export type FeedbackModel = Model<IFeedback, Record<string, unknown>>;
