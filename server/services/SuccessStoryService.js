import {
    findAllStories,
    findStoryById,
    insertStory,
    updateStoryById,
    deleteStoryById,
  } from '../models/SuccessStoryModel.js';
  
  export const getAllStoriesService = async () => {
    return await findAllStories();
  };
  
  export const getStoryService = async (id) => {
    const story = await findStoryById(id);
    if (!story) throw new Error('Story not found');
    return story;
  };
  
  export const createStoryService = async (data) => {
    return await insertStory(data);
  };
  
  export const updateStoryService = async (id, data) => {
    const story = await findStoryById(id);
    if (!story) throw new Error('Story not found');
    return await updateStoryById(id, data);
  };
  
  export const deleteStoryService = async (id) => {
    const story = await findStoryById(id);
    if (!story) throw new Error('Story not found');
    return await deleteStoryById(id);
  };