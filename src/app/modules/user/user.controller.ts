import {Request, Response} from "express";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import httpStatus from "http-status";
import {IUser} from "./user.interface";
import {getAllUsersService, getSingleUserService, getUserProfileService, makeAdminService} from "./user.service";

//get all users
export const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieved successfully!",
    data: users,
  });
});
//get a single user
export const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getSingleUserService(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully!",
    data: user,
  });
});
//
export const getUserProfile = catchAsync(async (req, res) => {
  const user = await getUserProfileService((req as any).user);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: user,
    message: "User retrieved successfully!",
  });
});
//make admin
export const makeAdmin = catchAsync(async (req, res) => {
  const user = await makeAdminService(req.params.email);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: user,
    message: "User assigned role as admin successfully!",
  });
});
