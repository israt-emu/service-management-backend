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
  } else {
    await Cart.deleteOne({_id: payload?.cart});
  }

  return newBooking;
};
//-----update booking status
export const updateBookingStatusService = async (id: string, status: string): Promise<IBooking | null> => {
  const booking = await Booking.findOneAndUpdate({_id: id}, {status}, {new: true});

  return booking;
};
//-----get a single booking
export const getSingleBookingService = async (id: string): Promise<IBooking | null> => {
  const booking = await Booking.findOne({_id: id});
  return booking;
};
//-----get all booking
export const getAllBookingService = async (id: string): Promise<IBooking[]> => {
  const booking = await Booking.find({user: id});
  return booking;
};
//-----re-schedule booking
export const reScheduleBookingService = async (id: string, date: string, time: string): Promise<IBooking | null> => {
  const booking = await Booking.findOneAndUpdate({_id: id}, {date, time}, {new: true});
  return booking;
};
