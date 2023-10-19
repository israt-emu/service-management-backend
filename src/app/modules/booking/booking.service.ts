import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {IBooking} from "./booking.interface";
import {Booking} from "./booking.model";
import {Cart} from "../cart/cart.model";

//-----add booking
export const addBookingService = async (payload: IBooking) => {
  const newBooking = await Booking.create({...payload});
  if (!newBooking) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create booking!");
  } 

  return newBooking;
};
//-----update booking status
export const updateBookingStatusService = async (id: string, status: string): Promise<IBooking | null> => {
  const booking = await Booking.findOneAndUpdate({_id: id}, {status}, {new: true});
  if (!booking) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update booking!");
  }
  return booking;
};
//-----get a single booking
export const getSingleBookingService = async (id: string): Promise<IBooking | null> => {
  const booking = await Booking.findOne({_id: id}).populate("user").populate("service");
  return booking;
};
//-----get all booking
export const getAllBookingService = async (): Promise<IBooking[]> => {
  const booking = await Booking.find().populate("user").populate("service");
  return booking;
};
//-----get all booking by user
export const getAllBookingByUserService = async (id: string): Promise<IBooking[]> => {
  const booking = await Booking.find({user: id}).populate("user").populate("service");
  return booking;
};
//-----re-schedule booking
export const reScheduleBookingService = async (id: string, date: string, time: string): Promise<IBooking | null> => {
  const booking = await Booking.findOneAndUpdate({_id: id}, {date, time}, {new: true});
  if (!booking) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to reschedule booking!");
  }
  return booking;
};
//-----delete booking
export const deleteBookingService = async (id: string): Promise<IBooking | null> => {
  const booking = await Booking.findOneAndDelete({_id: id});
  if (!booking) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete booking!");
  }
  return booking;
};
