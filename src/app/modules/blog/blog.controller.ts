import {Request, Response} from "express";
import {catchAsync} from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import httpStatus from "http-status";
import {IBlog} from "./blog.interface";
import {addBlogService, deleteBlogService, getAllBlogService, getSingleBlogService, updateBlogService} from "./blog.service";

//create blog
export const createBlog = catchAsync(async (req: Request, res: Response) => {
  const blog = req.body;

  const result = await addBlogService(blog);
  sendResponse<IBlog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog created successfully!",
    data: result,
  });
});
//get a single Blog
export const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const blog = await getSingleBlogService(id);
  sendResponse<IBlog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrieved successfully!",
    data: blog,
  });
});
//get all blog
export const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const blogs = await getAllBlogService();
  sendResponse<IBlog[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs retrieved successfully!",
    data: blogs,
  });
});
//update blog
export const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const {id, data} = req?.body;
  const result = await updateBlogService(id, data);
  sendResponse<IBlog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully!",
    data: result,
  });
});

//delete Blog
export const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await deleteBlogService(id);
  sendResponse<IBlog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully!",
    data: result,
  });
});
