import express from "express";
import {createFeedback, deleteFeedback, getAllFeedback, getSingleFeedback} from "./feedBack.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createFeedbackZodSchema} from "./feedBack.validation";
import {ENUM_USER_ROLE} from "../../../enums/user";
import {auth} from "../../middlewares/auth";

const router = express.Router();
//,

router.post("/", auth(ENUM_USER_ROLE.USER), validateRequest(createFeedbackZodSchema), createFeedback);
router.delete("/:id", deleteFeedback);

router.get("/:id", getSingleFeedback);
router.get("/", getAllFeedback);

//
export const FeedbackRoutes = router;
