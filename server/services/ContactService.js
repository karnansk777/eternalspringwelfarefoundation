import {
    findAllMessages,
    insertMessage,
    deleteMessageById,
  } from "../models/ContactModel.js";
  
  export const getAllMessagesService = async () => {
    return await findAllMessages();
  };
  
  export const createMessageService = async (data) => {
    return await insertMessage(data);
  };
  
  export const deleteMessageService = async (id) => {
    return await deleteMessageById(id);
  };