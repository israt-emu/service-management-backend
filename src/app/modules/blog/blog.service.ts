import httpStatus from "http-status";
import {ApiError} from "../../../handleErrors/ApiError";
import {IBlog} from "./blog.interface";
import {Blog} from "./blog.model";

//-----add blog
export const addBlogService = async (payload: IBlog) => {
  const newBlog = await Blog.create({...payload});
  if (!newBlog) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create blog!");
  }

  return newBlog;
};
//-----update blog
export const updateBlogService = async (id: string, data: Partial<IBlog>): Promise<IBlog | null> => {
  const blog = await Blog.findOneAndUpdate({_id: id}, data, {new: true});
  if (!blog) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to update blog!");
  }
  return blog;
};
//-----get a single blog
export const getSingleBlogService = async (id: string): Promise<IBlog | null> => {
  const blog = await Blog.findOne({_id: id});
  if (blog) {
    blog.views++;
    await blog.save();
  }
  return blog;
};
//-----get all booking
export const getAllBlogService = async (): Promise<IBlog[]> => {
  const blog = await Blog.find({});
  return blog;
};

//-----delete blog
export const deleteBlogService = async (id: string): Promise<IBlog | null> => {
  const blog = await Blog.findOneAndDelete({_id: id});
  if (!blog) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to delete blog!");
  }
  return blog;
};
