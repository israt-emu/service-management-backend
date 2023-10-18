import express from "express";
import {createFeedback, deleteFeedback, getAllFeedback, getSingleFeedback} from "./feedBack.controller";

const router = express.Router();
//,

router.post("/", createFeedback);
router.delete("/:id", deleteFeedback);

router.get("/:id", getSingleFeedback);
router.get("/", getAllFeedback);

//
export const FeedbackRoutes = router;
