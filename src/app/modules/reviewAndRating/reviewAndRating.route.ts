import express from "express";
import {addReviewAndRating, deleteReviewAndRating, getAllReviewAndRating, getAllReviewAndRatingByUser, getSingleReviewAndRating, updateReviewAndRating} from "./reviewAndRating.controller";

const router = express.Router();

//,

router.post("/", addReviewAndRating);
router.get("/:id", getSingleReviewAndRating);
router.get("/getAll", getAllReviewAndRating);
router.get("/getByUser/:id", getAllReviewAndRatingByUser);
router.post("/update", updateReviewAndRating);
router.delete("/:id", deleteReviewAndRating);
//
export const ReviewAndRatingRoutes = router;
