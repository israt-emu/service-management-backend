import {Model, Types} from "mongoose";
import {IUser} from "../user/user.interface";

export type IService = {
  title: string;
  description: string;
  status: "available" | "unavailable";
  duration: number;
  price: number;
  category: string;
  images: string[];
  rating: number[];
  reviews: {
    review: string;
    user: string | Types.ObjectId;
  };
  addedBy: Types.ObjectId | IUser;
};
export type IServiceFilters = {
  searchTerm?: string;
  category?: string;
  title?: string;
  description?: string;
};
export type ServiceModel = Model<IService, Record<string, unknown>>;
