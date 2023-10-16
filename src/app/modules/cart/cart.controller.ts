import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {ICart} from "./cart.interface";
import {sendResponse} from "../../../shared/sendResponse";
import {Request, Response} from "express";
import {addCartService, deleteCartService, getCartByUserService, getSingleCartService, handleQuantityService} from "./cart.service";
//create cart
export const createCart = catchAsync(async (req: Request, res: Response) => {
  const cartData = req.body;

  const cart = await addCartService(cartData);
  sendResponse<ICart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart created successfully!",
    data: cart,
  });
});
//get a single cart
export const getSingleCart = catchAsync(async (req: Request, res: Response) => {
  const {user, serviceId} = req.body;
  const cart = await getSingleCartService(user, serviceId);
  sendResponse<ICart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart retrieved successfully!",
    data: cart,
  });
});
//get all cart by user
export const getCartByUser = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const cart = await getCartByUserService(id);
  sendResponse<ICart[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Carts retrieved successfully!",
    data: cart,
  });
});
//remove cart
export const deleteCart = catchAsync(async (req: Request, res: Response) => {
  const {user, serviceId} = req.body;
  const cart = await deleteCartService(user, serviceId);
  sendResponse<ICart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cart deleted successfully!",
    data: cart,
  });
});
//handle quantity
export const handleQuantity = catchAsync(async (req: Request, res: Response) => {
  const {user, serviceId, operation} = req.body;
  const cart = await handleQuantityService(user, serviceId, operation);
  sendResponse<ICart>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Quantity updated successfully!",
    data: cart,
  });
});
