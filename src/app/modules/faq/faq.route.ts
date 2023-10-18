import express from "express";
import {createFaq, deleteFaq, getAllFaq, getSingleFaq, updateFaq} from "./faq.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createFAQZodSchema, updateFAQZodSchema} from "./faq.validation";

const router = express.Router();
//,
router.post("/", validateRequest(createFAQZodSchema), createFaq);
router.delete("/:faqId", deleteFaq);
router.patch("/", validateRequest(updateFAQZodSchema), updateFaq);
router.get("/:faqId", getSingleFaq);
router.get("/", getAllFaq);

//
export const FaqRoutes = router;
