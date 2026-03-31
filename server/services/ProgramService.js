import {
    findAllPrograms,
    findProgramById,
    insertProgram,
    updateProgramById,
    deleteProgramById,
  } from '../models/ProgramModel.js';
  
  export const getAllProgramsService = async () => {
    return await findAllPrograms();
  };
  
  export const getProgramService = async (id) => {
    const program = await findProgramById(id);
    if (!program) throw new Error('Program not found');
    return program;
  };
  
  export const createProgramService = async (data) => {
    return await insertProgram(data);
  };
  
  export const updateProgramService = async (id, data) => {
    const program = await findProgramById(id);
    if (!program) throw new Error('Program not found');
    return await updateProgramById(id, data);
  };
  
  export const deleteProgramService = async (id) => {
    const program = await findProgramById(id);
    if (!program) throw new Error('Program not found');
    return await deleteProgramById(id);
  };