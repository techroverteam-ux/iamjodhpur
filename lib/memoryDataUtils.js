// Simple in-memory data store for Vercel
let memoryData = {
  users: [],
  courses: [],
  blogs: [],
  testimonials: [],
  achievements: [],
  facilities: [],
  events: []
};

export const readData = () => {
  return memoryData;
};

export const writeData = (data) => {
  memoryData = data;
  return true;
};

export const addItem = (category, item) => {
  try {
    if (!memoryData[category]) {
      console.error('Invalid category:', category);
      return false;
    }
    memoryData[category].push({ ...item, id: Date.now() });
    return true;
  } catch (error) {
    console.error('Error adding item:', error);
    return false;
  }
};

export const updateItem = (category, id, updatedItem) => {
  try {
    const index = memoryData[category].findIndex(item => item.id === id);
    if (index !== -1) {
      memoryData[category][index] = { ...updatedItem, id };
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error updating item:', error);
    return false;
  }
};

export const deleteItem = (category, id) => {
  try {
    memoryData[category] = memoryData[category].filter(item => item.id !== id);
    return true;
  } catch (error) {
    console.error('Error deleting item:', error);
    return false;
  }
};