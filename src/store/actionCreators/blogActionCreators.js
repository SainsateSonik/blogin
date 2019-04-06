import blogActionTypes from "../actionTypes/blogActionTypes";

export const setBlogs = (blogs) => ({ type: blogActionTypes.SET_BLOGS, blogs });

export const updateBlog = (blogId, blogContent) => ({ type: blogActionTypes.UPDATE_BLOG, blogId, blogContent });

export const discardEdit = () => ({ type: blogActionTypes.DISCARD_EDIT });

export const updateHandler = (mode, content) => ({ type: blogActionTypes.INPUT_HANDLER, mode, content });