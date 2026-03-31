

import {
    getAllVolunteersService,
    createVolunteerService,
    deleteVolunteerService,
  } from "../services/VolunteerService.js";
  
  // ADMIN → GET ALL
  export const getVolunteersController = async (req, res) => {
    try {
      const data = await getAllVolunteersService();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // USER → SUBMIT FORM
  export const createVolunteerController = async (req, res) => {
    try {
      const volunteer = await createVolunteerService(req.body);
      res.status(201).json(volunteer);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // ADMIN → DELETE
  export const deleteVolunteerController = async (req, res) => {
    try {
      const result = await deleteVolunteerService(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };