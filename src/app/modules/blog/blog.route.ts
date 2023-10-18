import express from "express";
import {createBlog, deleteBlog, getAllBlog, getSingleBlog, updateBlog} from "./blog.controller";

const router = express.Router();

//,

router.post("/", createBlog);
router.get("/:id", getSingleBlog);
router.get("/getAll", getAllBlog);
router.delete("/:id", deleteBlog);
router.patch("/", updateBlog);

//
export const BlogRoutes = router;
