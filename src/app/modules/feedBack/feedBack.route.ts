import express from "express";
import {createFeedback, deleteFeedback, getAllFeedback, getSingleFeedback} from "./feedBack.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createFeedbackZodSchema} from "./feedBack.validation";

const router = express.Router();
//,

router.post("/", validateRequest(createFeedbackZodSchema), createFeedback);
router.delete("/:id", deleteFeedback);

router.get("/:id", getSingleFeedback);
router.get("/", getAllFeedback);

//
export const FeedbackRoutes = router;
