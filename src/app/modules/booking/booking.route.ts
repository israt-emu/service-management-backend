import express from "express";
import {createBooking, deleteBooking, getAllBooking, getAllBookingByUser, getSingleBooking, reScheduleBooking, updateBookingStatus} from "./booking.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createBookingZodSchema, reScheduleBookingZodSchema, updateStatusZodSchema} from "./booking.validation";
import {ENUM_USER_ROLE} from "../../../enums/user";
import {auth} from "../../middlewares/auth";
const router = express.Router();

router.post("/", auth(ENUM_USER_ROLE.USER), validateRequest(createBookingZodSchema), createBooking);
router.get("/getAll/:user", getAllBookingByUser);
router.get("/getAll", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), getAllBooking);
router.get("/:id", getSingleBooking);
router.delete("/:id", auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), deleteBooking);
router.post("/updateStatus", auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(updateStatusZodSchema), updateBookingStatus);
router.post("/reSchedule", auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(reScheduleBookingZodSchema), reScheduleBooking);
//
export const BookingRoutes = router;
