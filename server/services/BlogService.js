import {
    findAllBlogs,
    findBlogById,
    insertBlog,
    updateBlogById,
    deleteBlogById,
  } from '../models/BlogModel.js';
  
  export const getAllBlogsService = async () => {
    return await findAllBlogs();
  };
  
  export const getBlogService = async (id) => {
    const blog = await findBlogById(id);
    if (!blog) throw new Error('Blog not found');
    return blog;
  };
  
  export const createBlogService = async (data) => {
    return await insertBlog(data);
  };
  
  export const updateBlogService = async (id, data) => {
    const blog = await findBlogById(id);
    if (!blog) throw new Error('Blog not found');
  
    return await updateBlogById(id, data);
  };
  
  export const deleteBlogService = async (id) => {
    const blog = await findBlogById(id);
    if (!blog) throw new Error('Blog not found');
  
    return await deleteBlogById(id);
  };