import express from "express";
import {addReviewAndRating, deleteReviewAndRating, getAllReviewAndRating, getAllReviewAndRatingByUser, getSingleReviewAndRating, updateReviewAndRating} from "./reviewAndRating.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createReviewRatingZodSchema} from "./reviewAndRating.validation";
import {ENUM_USER_ROLE} from "../../../enums/user";
import {auth} from "../../middlewares/auth";

const router = express.Router();

//,

router.post("/", auth(ENUM_USER_ROLE.USER), validateRequest(createReviewRatingZodSchema), addReviewAndRating);
router.get("/:id", getSingleReviewAndRating);
router.get("/getAll", getAllReviewAndRating);
router.get("/getByUser/:id", getAllReviewAndRatingByUser);
router.post("/update", updateReviewAndRating);
router.delete("/:id", deleteReviewAndRating);
//
export const ReviewAndRatingRoutes = router;
