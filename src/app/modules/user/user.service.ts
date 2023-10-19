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
  console.log(user);
  const specificUser = await User.findOne({
    _id: user.userId,
  });

  if (!specificUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found!");
  }

  return specificUser;
};

//update user
export const updateUserService = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
  const isExist = await User.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't found");
  }
  const {name, ...data} = payload;

  const updatedData: Partial<IUser> = {...data};

  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach((key) => {
      const nameKey = `name.${key}` as keyof Partial<IUser>; // `name.fisrtName`
      (updatedData as any)[nameKey] = name[key as keyof typeof name];
    });
  }

  const result = await User.findOneAndUpdate({_id: id}, updatedData, {
    new: true,
  });
  return result;
};
//delete user
export const deleteUserService = async (id: string): Promise<IUser> => {
  const result = await User.findOneAndDelete({_id: id});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User couldn't be deleted");
  }
  return result;
};
