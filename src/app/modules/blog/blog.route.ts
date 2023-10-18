import express from "express";
import {createBlog, deleteBlog, getAllBlog, getSingleBlog, updateBlog} from "./blog.controller";
import {validateRequest} from "../../middlewares/validateRequest";
import {createBlogZodSchema, updateBlogZodSchema} from "./blog.validation";
import {ENUM_USER_ROLE} from "../../../enums/user";
import {auth} from "../../middlewares/auth";

const router = express.Router();

//,

router.post("/", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(createBlogZodSchema), createBlog);
router.get("/:id", getSingleBlog);
router.get("/getAll", getAllBlog);
router.delete("/:id", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), deleteBlog);
router.patch("/", auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), validateRequest(updateBlogZodSchema), updateBlog);

//
export const BlogRoutes = router;
