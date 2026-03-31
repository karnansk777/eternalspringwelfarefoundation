import {
    getAllProgramsService,
    getProgramService,
    createProgramService,
    updateProgramService,
    deleteProgramService,
  } from '../services/ProgramService.js';
  
  export const getProgramsController = async (req, res) => {
    try {
      const programs = await getAllProgramsService();
      res.json(programs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const getProgramController = async (req, res) => {
    try {
      const program = await getProgramService(req.params.id);
      res.json(program);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const createProgramController = async (req, res) => {
    try {
      const { title, short_description, full_description } = req.body;
  
      let image_url = null;
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`;
      }
  
      const program = await createProgramService({
        title,
        short_description,
        full_description,
        image_url,
      });
  
      res.status(201).json(program);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  export const updateProgramController = async (req, res) => {
    try {
      const { title, short_description, full_description } = req.body;
  
      let image_url = null;
      if (req.file) {
        image_url = `/uploads/${req.file.filename}`;
      }
  
      const data = { title, short_description, full_description };
      if (image_url) data.image_url = image_url;
  
      const program = await updateProgramService(req.params.id, data);
      res.json(program);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  export const deleteProgramController = async (req, res) => {
    try {
      const result = await deleteProgramService(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };