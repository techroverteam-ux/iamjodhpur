import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'admin.json');

export const readData = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {
      users: [],
      courses: [],
      blogs: [],
      testimonials: [],
      achievements: [],
      facilities: [],
      events: []
    };
  }
};

export const writeData = (data) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing data:', error);
    return false;
  }
};

export const addItem = (category, item) => {
  const data = readData();
  data[category].push({ ...item, id: Date.now() });
  return writeData(data);
};

export const updateItem = (category, id, updatedItem) => {
  const data = readData();
  const index = data[category].findIndex(item => item.id === id);
  if (index !== -1) {
    data[category][index] = { ...updatedItem, id };
    return writeData(data);
  }
  return false;
};

export const deleteItem = (category, id) => {
  const data = readData();
  data[category] = data[category].filter(item => item.id !== id);
  return writeData(data);
};