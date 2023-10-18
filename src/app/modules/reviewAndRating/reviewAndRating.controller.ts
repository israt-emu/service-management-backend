import {Request, Response} from "express";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import httpStatus from "http-status";
import {addReviewRatingService, deleteReviewRatingService, getAllReviewRatingByUserService, getAllReviewRatingService, getSingleReviewRatingService, updateReviewAndRatingService} from "./reviewAndRating.service";
import {IReviewRating} from "./reviewAndRating.interface";

//create review and rating
export const addReviewAndRating = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await addReviewRatingService(data);
  sendResponse<IReviewRating>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review rating added successfully!",
    data: result,
  });
});
//get a single review and rating
export const getSingleReviewAndRating = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await getSingleReviewRatingService(id);
  sendResponse<IReviewRating>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review And Rating retrieved successfully!",
    data: result,
  });
});
//get all ReviewAndRating
export const getAllReviewAndRating = catchAsync(async (req: Request, res: Response) => {
  const result = await getAllReviewRatingService();
  sendResponse<IReviewRating[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "ReviewAndRatings retrieved successfully!",
    data: result,
  });
});
//get all ReviewAndRating by user
export const getAllReviewAndRatingByUser = catchAsync(async (req: Request, res: Response) => {
    const {id}=req.params;
  const result = await getAllReviewRatingByUserService(id);
  sendResponse<IReviewRating[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "ReviewAndRatings retrieved successfully!",
    data: result,
  });
});
//update ReviewAndRating
export const updateReviewAndRating = catchAsync(async (req: Request, res: Response) => {
  const {id, data} = req?.body;
  const result = await updateReviewAndRatingService(id, data);
  sendResponse<IReviewRating>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "ReviewAndRating updated successfully!",
    data: result,
  });
});
//delete ReviewAndRating
export const deleteReviewAndRating = catchAsync(async (req: Request, res: Response) => {
  const {id} = req?.params;
  const result = await deleteReviewRatingService(id);
  sendResponse<IReviewRating>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "ReviewAndRating deleted successfully!",
    data: result,
  });
});
