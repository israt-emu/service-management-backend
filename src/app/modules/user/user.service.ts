import httpStatus from "http-status";
import {IUser} from "./user.interface";
import {User} from "./user.model";
import {ApiError} from "../../../handleErrors/ApiError";
import {ENUM_USER_ROLE} from "../../../enums/user";

//get all users
export const getAllUsersService = async (): Promise<IUser[]> => {
  const users = await User.find({});
  return users;
};

//get a single user
export const getSingleUserService = async (id: string): Promise<IUser | null> => {
  const user = await User.findById({_id: id});
  return user;
};
//make admin
export const makeAdminService = async (email: string): Promise<IUser> => {
  const user = await User.findOne({email});

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const updatedUser = await User.findOneAndUpdate({email}, {role: "admin"}, {new: true});
  if (!updatedUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User couldn't be updated");
  }
  return updatedUser;
};
//get userProfile
export const getUserProfileService = async (user: {userId: string; role: ENUM_USER_ROLE}): Promise<IUser | null> => {
  if (!user.userId) {
    throw new ApiError(httpStatus.FORBIDDEN, "Access denied");
  }

  const specificUser = await User.findOne({
    _id: user.userId,
  });

  if (!specificUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found!");
  }

  return specificUser;
};
