import {Model, Types} from "mongoose";
import {IUser} from "../user/user.interface";

export type IService = {
  title: string;
  description: string;
  status: "available" | "unavailable";
  duration: string;
  price: number;
  category: string;
  image: string;
  addedBy: Types.ObjectId | IUser;
};
export type IServiceFilters = {
  searchTerm?: string;
  category?: string;
  title?: string;
  description?: string;
};
export type ServiceModel = Model<IService, Record<string, unknown>>;
