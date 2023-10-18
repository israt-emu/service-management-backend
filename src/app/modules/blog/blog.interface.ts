import {Model, Types} from "mongoose";
import {IUser} from "../user/user.interface";

export type IBlog = {
  title: string;
  description: string;
  image: string;
  user: IUser | Types.ObjectId;
  views: number;
};
export type BlogModel = Model<IBlog, Record<string, unknown>>;
