import {
    findAllVolunteers,
    findVolunteerById,
    insertVolunteer,
    deleteVolunteerById,
  } from "../models/VolunteerModel.js";
  
  export const getAllVolunteersService = async () => {
    return await findAllVolunteers();
  };
  
  export const createVolunteerService = async (data) => {
    return await insertVolunteer(data);
  };
  
  export const deleteVolunteerService = async (id) => {
    const v = await findVolunteerById(id);
    if (!v) throw new Error("Volunteer not found");
    return await deleteVolunteerById(id);
  };