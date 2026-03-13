export const fetchData = async () => {
  try {
    // Add cache-busting parameters and headers to ensure fresh data
    const timestamp = new Date().getTime();
    const response = await fetch(`/api/data?t=${timestamp}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Fresh data fetched from DB:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const addData = async (category, item) => {
  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({ action: 'add', category, item })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
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
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({ action: 'update', category, id, item })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
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
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({ action: 'delete', category, id })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error deleting data:', error);
    return { error: 'Failed to delete data' };
  }
};