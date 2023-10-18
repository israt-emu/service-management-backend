import {Request, Response} from "express";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import httpStatus from "http-status";
import {IBooking} from "./booking.interface";
import {addBookingService, deleteBookingService, getAllBookingService, getSingleBookingService, reScheduleBookingService, updateBookingStatusService} from "./booking.service";
//create booking
export const createBooking = catchAsync(async (req: Request, res: Response) => {
  const booking = req.body;

  const newBooking = await addBookingService(booking);
  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking created successfully!",
    data: newBooking,
  });
});
//get a single booking
export const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const booking = await getSingleBookingService(id);
  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "booking retrieved successfully!",
    data: booking,
  });
});
//get all booking
export const getAllBooking = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.user;
  const bookings = await getAllBookingService(id);
  sendResponse<IBooking[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully!",
    data: bookings,
  });
});
//update booking status
export const updateBookingStatus = catchAsync(async (req: Request, res: Response) => {
  const {id, status} = req?.body;
  const booking = await updateBookingStatusService(id, status);
  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Status updated successfully!",
    data: booking,
  });
});
//reSchedule booking
export const reScheduleBooking = catchAsync(async (req: Request, res: Response) => {
  const {id, date, time} = req?.body;
  const booking = await reScheduleBookingService(id, date, time);
  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking re-scheduled successfully!",
    data: booking,
  });
});

//delete booking
export const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const booking = await deleteBookingService(id);
  sendResponse<IBooking>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking deleted successfully!",
    data: booking,
  });
});
