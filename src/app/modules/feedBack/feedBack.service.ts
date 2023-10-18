import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {Feedback} from "./feedBack.model";
import {IFeedback} from "./feedBack.interface";

//add feedback
export const addFeedbackService = async (payload: IFeedback): Promise<IFeedback | null> => {
  const newFeedback = await Feedback.create(payload);
  if (!newFeedback) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create feedback!");
  }
  return newFeedback;
};

//get feedback
export const getSingleFeedbackService = async (id: string): Promise<IFeedback | null> => {
  const feedback = await Feedback.findOne({_id: id});
  return feedback;
};

//get all feedback
export const getAllfeedbackService = async (): Promise<IFeedback[]> => {
  const feedback = await Feedback.find({});
  return feedback;
};

//delete cart
export const deleteFeedbackService = async (id: string): Promise<IFeedback | null> => {
  const feedback = await Feedback.findOneAndDelete({_id: id});
  if (!feedback) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Feedback couldn't be deleted!");
  }
  return feedback;
};
