import {Model, Types} from "mongoose";
import {ICart} from "../cart/cart.interface";
import {IUser} from "../user/user.interface";
import {IService} from "../service/service.interface";

export type IBooking = {
  totalCost: number;
  date: string;
  time: string;
  service: IService | Types.ObjectId;
  user: IUser | Types.ObjectId;
  status: "pending" | "confirmed" | "canceled";
};
export type BookingModel = Model<IBooking, Record<string, unknown>>;
