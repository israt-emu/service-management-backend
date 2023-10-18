import express from "express";
import {createBooking, deleteBooking, getAllBooking, getSingleBooking, reScheduleBooking, updateBookingStatus} from "./booking.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createBookingZodSchema, reScheduleBookingZodSchema, updateStatusZodSchema} from "./booking.validation";
const router = express.Router();

router.post("/", validateRequest(createBookingZodSchema), createBooking);
router.get("/getAll/:user", getAllBooking);
router.get("/:id", getSingleBooking);
router.delete("/:id", deleteBooking);
router.post("/updateStatus", validateRequest(updateStatusZodSchema), updateBookingStatus);
router.post("/reSchedule", validateRequest(reScheduleBookingZodSchema), reScheduleBooking);
//
export const BookingRoutes = router;
