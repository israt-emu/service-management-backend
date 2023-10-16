import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {ICart} from "./cart.interface";
import {Cart} from "./cart.model";

//add cart
export const addCartService = async (payload: ICart): Promise<ICart | null> => {
  const newCart = await Cart.create(payload);
  if (!newCart) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create cart!");
  }
  return newCart;
};
//get cart
export const getSingleCartService = async (user: string, serviceId: string): Promise<ICart | null> => {
  const cart = await Cart.findOne({user, serviceId});
  return cart;
};

//get all cart by user
export const getCartByUserService = async (user: string): Promise<ICart[]> => {
  const cart = await Cart.find({user});
  return cart;
};

//increase or decrease service quantity from cart

export const handleQuantityService = async (user: string, serviceId: string, operation: string): Promise<ICart | null | undefined> => {
  let cart = null;
  if (operation === "plus") {
    cart = await Cart.findOneAndUpdate(
      {user, serviceId},

      {
        $inc: {quantity: 1},
      },
      {new: true}
    );
  } else {
    cart = await Cart.findOneAndUpdate(
      {user, serviceId},

      {
        $inc: {quantity: -1},
      },
      {new: true}
    );
  }
  if (!cart) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Quantity of this service couldn't be updated!");
  }
  return cart;
};

//delete cart
export const deleteCartService = async (user: string, serviceId: string): Promise<ICart | null> => {
  const cart = await Cart.findOneAndDelete({user, serviceId});
  if (!cart) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Cart couldn't be deleted!");
  }
  return cart;
};
