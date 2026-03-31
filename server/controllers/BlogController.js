import {
    getAllBlogsService,
    getBlogService,
    createBlogService,
    updateBlogService,
    deleteBlogService,
  } from '../services/BlogService.js';
  import { findBlogById } from '../models/BlogModel.js';
  
  export const getBlogsController = async (req, res) => {
    try {
      const blogs = await getAllBlogsService();
      res.json(blogs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const getBlogController = async (req, res) => {
    try {
      const blog = await getBlogService(req.params.id);
      res.json(blog);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const createBlogController = async (req, res) => {
    try {
      const { title, description } = req.body;
  
      if (!title || !description) {
        return res.status(400).json({ message: "Title & Description required" });
      }
  
      // 🔥 generate slug
      const slug = title.toLowerCase().replace(/\s+/g, "-");
  
      let image_url = null;
  
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`;
      }
  
      const blog = await createBlogService({
        title,
        description,
        content: description, // 🔥 map to content
        slug,
        image_url,
      });
  
      res.status(201).json(blog);
    } catch (err) {
      console.error("BLOG ERROR:", err);
      res.status(500).json({ message: err.message });
    }
  };
  
  export const updateBlogController = async (req, res) => {
    try {
      const { title, description } = req.body;
  
      const slug = title.toLowerCase().replace(/\s+/g, "-");
  
      let image_url = null;
  
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`;
      }
  
      const blog = await updateBlogService(req.params.id, {
        title,
        description,
        content: description,
        slug,
        image_url,
      });
  
      res.json(blog);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: err.message });
    }
  };
  
  export const deleteBlogController = async (req, res) => {
    try {
      const result = await deleteBlogService(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };