import express from "express";
import {createFaq, deleteFaq, getAllFaq, getSingleFaq, updateFaq} from "./faq.controller";

const router = express.Router();
//,
router.post("/", createFaq);
router.delete("/:faqId", deleteFaq);
router.patch("/", updateFaq);
router.get("/:faqId", getSingleFaq);
router.get("/", getAllFaq);

//
export const FaqRoutes = router;
