import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {Faq} from "./faq.model";
import {IFaq} from "./faq.interface";

//add faq
export const addFaqService = async (payload: IFaq): Promise<IFaq | null> => {
  const newFaq = await Faq.create(payload);
  if (!newFaq) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create newFaq!");
  }
  return newFaq;
};

//get faq
export const getSingleFaqService = async (faqId: string): Promise<IFaq | null> => {
  const faq = await Faq.findOne({_id: faqId});
  return faq;
};

//get all faq
export const getAllFaqService = async (): Promise<IFaq[]> => {
  const faq = await Faq.find({});
  return faq;
};

//delete faq
export const deleteFaqService = async (id: string): Promise<IFaq | null> => {
  const faq = await Faq.findOneAndDelete({_id: id});
  if (!faq) {
    throw new ApiError(httpStatus.BAD_REQUEST, "faq couldn't be deleted!");
  }
  return faq;
};
//update faq
export const updateFaqService = async (id: string, data: Partial<IFaq>): Promise<IFaq | null> => {
  const faq = await Faq.findOneAndUpdate({_id: id}, data, {new: true});
  if (!faq) {
    throw new ApiError(httpStatus.BAD_REQUEST, "faq couldn't be updated!");
  }
  return faq;
};
