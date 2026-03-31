import {
    getAllStoriesService,
    getStoryService,
    createStoryService,
    updateStoryService,
    deleteStoryService,
  } from '../services/SuccessStoryService.js';
  
  export const getStoriesController = async (req, res) => {
    try {
      const stories = await getAllStoriesService();
      res.json(stories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const getStoryController = async (req, res) => {
    try {
      const story = await getStoryService(req.params.id);
      res.json(story);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const createStoryController = async (req, res) => {
    try {
      const { title, description } = req.body;
      let image_url = null;
  
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`;
      }
  
      const story = await createStoryService({ title, description, image_url });
      res.status(201).json(story);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const updateStoryController = async (req, res) => {
    try {
      const { title, description } = req.body;
      let image_url = null;
  
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`;
      }
  
      const data = { title, description };
      if (image_url) data.image_url = image_url;
  
      const story = await updateStoryService(req.params.id, data);
      res.json(story);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const deleteStoryController = async (req, res) => {
    try {
      const result = await deleteStoryService(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };