import express from "express";
import {createFaq, deleteFaq, getAllFaq, getSingleFaq, updateFaq} from "./faq.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createFAQZodSchema, updateFAQZodSchema} from "./faq.validation";
import {auth} from "../../middlewares/auth";
import {ENUM_USER_ROLE} from "../../../enums/user";

const router = express.Router();
//,
router.post("/", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(createFAQZodSchema), createFaq);
router.delete("/:faqId", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), deleteFaq);
router.patch("/", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(updateFAQZodSchema), updateFaq);
router.get("/:faqId", getSingleFaq);
router.get("/", getAllFaq);

//
export const FaqRoutes = router;
