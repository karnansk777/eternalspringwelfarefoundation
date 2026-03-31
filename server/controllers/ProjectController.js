import {
    getAllProjectsService,
    getProjectService,
    createProjectService,
    updateProjectService,
    deleteProjectService,
  } from '../services/ProjectService.js';
  
  export const getProjectsController = async (req, res) => {
    try {
      const projects = await getAllProjectsService();
      res.json(projects);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const getProjectController = async (req, res) => {
    try {
      const project = await getProjectService(req.params.id);
      res.json(project);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const createProjectController = async (req, res) => {
    try {
      const { title, description } = req.body;
      let image_url = null;
  
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`; // path saved in DB
      }
  
      const project = await createProjectService({ title, description, image_url });
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const updateProjectController = async (req, res) => {
    try {
      const { title, description } = req.body;
      let image_url = null;
  
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`;
      }
  
      const data = { title, description };
      if (image_url) data.image_url = image_url; // only update if new file uploaded
  
      const project = await updateProjectService(req.params.id, data);
      res.json(project);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const deleteProjectController = async (req, res) => {
    try {
      const result = await deleteProjectService(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };