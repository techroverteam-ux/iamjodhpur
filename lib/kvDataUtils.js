import { kv } from '@vercel/kv';

const DEFAULT_DATA = {
  users: [],
  courses: [],
  blogs: [],
  testimonials: [],
  achievements: [],
  facilities: [],
  events: []
};

export const readData = async () => {
  try {
    const data = await kv.get('admin-data');
    return data || DEFAULT_DATA;
  } catch (error) {
    console.error('Error reading data:', error);
    return DEFAULT_DATA;
  }
};

export const writeData = async (data) => {
  try {
    await kv.set('admin-data', data);
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
};

export const addItem = async (category, item) => {
  try {
    const data = await readData();
    if (!data[category]) {
      console.error('Invalid category:', category);
      return false;
    }
    data[category].push({ ...item, id: Date.now() });
    return await writeData(data);
  } catch (error) {
    console.error('Error adding item:', error);
    return false;
  }
};

export const updateItem = async (category, id, updatedItem) => {
  try {
    const data = await readData();
    const index = data[category].findIndex(item => item.id === id);
    if (index !== -1) {
      data[category][index] = { ...updatedItem, id };
      return await writeData(data);
    }
    return false;
  } catch (error) {
    console.error('Error updating item:', error);
    return false;
  }
};

export const deleteItem = async (category, id) => {
  try {
    const data = await readData();
    data[category] = data[category].filter(item => item.id !== id);
    return await writeData(data);
  } catch (error) {
    console.error('Error deleting item:', error);
    return false;
  }
};