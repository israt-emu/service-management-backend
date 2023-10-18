import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {Cart} from "../cart/cart.model";
import {IReviewRating} from "./reviewAndRating.interface";
import {ReviewAndRating} from "./reviewAndRating.model";

//-----add ReviewAndRating
export const addReviewRatingService = async (payload: IReviewRating) => {
  const result = await ReviewAndRating.create({...payload});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to add review and rating!");
  }

  return result;
};
//-----update ReviewAndRating
export const updateReviewAndRatingService = async (id: string, updateData: Partial<IReviewRating>): Promise<IReviewRating | null> => {
  const result = await ReviewAndRating.findOneAndUpdate({_id: id}, updateData, {new: true});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update review and rating!");
  }
  return result;
};
//-----get a single IReviewRating
export const getSingleReviewRatingService = async (id: string): Promise<IReviewRating | null> => {
  const result = await ReviewAndRating.findOne({_id: id});
  return result;
};
//-----get all IReviewRating
export const getAllReviewRatingService = async (): Promise<IReviewRating[]> => {
  const result = await ReviewAndRating.find({});
  return result;
};
//-----get all IReviewRating by user
export const getAllReviewRatingByUserService = async (id: string): Promise<IReviewRating[]> => {
  const result = await ReviewAndRating.find({user: id});
  return result;
};
//-----delete IReviewRating
export const deleteReviewRatingService = async (id: string): Promise<IReviewRating | null> => {
  const result = await ReviewAndRating.findOneAndDelete({_id: id});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete review and rating!");
  }
  return result;
};
