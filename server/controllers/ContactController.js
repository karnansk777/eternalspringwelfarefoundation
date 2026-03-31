import {
    getAllMessagesService,
    createMessageService,
    deleteMessageService,
  } from "../services/ContactService.js";
  
  // ADMIN → GET ALL
  export const getMessagesController = async (req, res) => {
    try {
      const data = await getAllMessagesService();
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // USER → SUBMIT FORM
  export const createMessageController = async (req, res) => {
    try {
      const message = await createMessageService(req.body);
      res.status(201).json(message);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // ADMIN → DELETE
  export const deleteMessageController = async (req, res) => {
    try {
      const result = await deleteMessageService(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };