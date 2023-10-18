import express from "express";
import {createBooking, getAllBooking, getSingleBooking, reScheduleBooking, updateBookingStatus} from "./booking.controller";
const router = express.Router();

//,

router.post("/", createBooking);
router.get("/getAll/:user", getAllBooking);
router.get("/:id", getSingleBooking);
router.post("/updateStatus", updateBookingStatus);
router.post("/reSchedule", reScheduleBooking);
//
export const BookingRoutes = router;
