import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {Request, Response} from "express";
import {addFeedbackService, deleteFeedbackService, getAllfeedbackService, getSingleFeedbackService} from "./feedBack.service";
import {IFeedback} from "./feedBack.interface";

//create feedback
export const createFeedback = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const feedback = await addFeedbackService(data);
  sendResponse<IFeedback>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback created successfully!",
    data: feedback,
  });
});

//get a single feedback
export const getSingleFeedback = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const feedback = await getSingleFeedbackService(id);
  sendResponse<IFeedback>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "feedback retrieved successfully!",
    data: feedback,
  });
});

//get all feedback
export const getAllFeedback = catchAsync(async (req: Request, res: Response) => {
  const feedbacks = await getAllfeedbackService();
  sendResponse<IFeedback[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedbacks retrieved successfully!",
    data: feedbacks,
  });
});

//delete feedback
export const deleteFeedback = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const feedback = await deleteFeedbackService(id);
  sendResponse<IFeedback>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Feedback deleted successfully!",
    data: feedback,
  });
});
