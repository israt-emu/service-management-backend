import {Model, Types} from "mongoose";
import {IUser} from "../user/user.interface";
import {IService} from "../service/service.interface";

export type ICart = {
  serviceId: Types.ObjectId | IService;
  price: number;
  quantity: number;
  user: Types.ObjectId | IUser;
};

export type CartModel = Model<ICart, Record<string, unknown>>;
