import {Model, Types} from "mongoose";
import {IUser} from "../user/user.interface";
import {IService} from "../service/service.interface";

export type IFeedback = {
  user: Types.ObjectId | IUser;
  service: Types.ObjectId | IService;
  rating: number;
  comments: string;
};

export type FeedbackModel = Model<IFeedback, Record<string, unknown>>;
