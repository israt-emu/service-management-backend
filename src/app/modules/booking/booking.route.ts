import express from "express";
import {createBooking, deleteBooking, getAllBooking, getSingleBooking, reScheduleBooking, updateBookingStatus} from "./booking.controller";
const router = express.Router();

//,

router.post("/", createBooking);
router.get("/getAll/:user", getAllBooking);
router.get("/:id", getSingleBooking);
router.delete("/:id", deleteBooking);
router.post("/updateStatus", updateBookingStatus);
router.post("/reSchedule", reScheduleBooking);
//
export const BookingRoutes = router;
