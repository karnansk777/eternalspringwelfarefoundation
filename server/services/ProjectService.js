import {
    findAllProjects,
    findProjectById,
    insertProject,
    updateProjectById,
    deleteProjectById,
  } from '../models/ProjectModel.js';
  
  export const getAllProjectsService = async () => {
    return await findAllProjects();
  };
  
  export const getProjectService = async (id) => {
    const project = await findProjectById(id);
    if (!project) throw new Error('Project not found');
    return project;
  };
  
  export const createProjectService = async (data) => {
    return await insertProject(data);
  };
  
  export const updateProjectService = async (id, data) => {
    const project = await findProjectById(id);
    if (!project) throw new Error('Project not found');
    return await updateProjectById(id, data);
  };
  
  export const deleteProjectService = async (id) => {
    const project = await findProjectById(id);
    if (!project) throw new Error('Project not found');
    return await deleteProjectById(id);
  };