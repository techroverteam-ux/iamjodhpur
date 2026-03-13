export const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const addData = async (category, item) => {
  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'add', category, item })
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding data:', error);
    return { error: 'Failed to add data' };
  }
};

export const updateData = async (category, id, item) => {
  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'update', category, id, item })
    });
    return await response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    return { error: 'Failed to update data' };
  }
};

export const deleteData = async (category, id) => {
  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', category, id })
    });
    return await response.json();
  } catch (error) {
    console.error('Error deleting data:', error);
    return { error: 'Failed to delete data' };
  }
};