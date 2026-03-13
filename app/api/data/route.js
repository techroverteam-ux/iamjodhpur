import { readData, addItem, updateItem, deleteItem } from '../../../lib/mongoOnlyDataUtils';
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    console.log('Fetching fresh data from database...');
    
    // Test MongoDB connection first
    const client = await clientPromise;
    console.log('MongoDB connection successful');
    
    const data = await readData();
    console.log('Data fetched successfully:', Object.keys(data));
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error in GET /api/data:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch data',
      details: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST(request) {
  try {
    const { action, category, item, id } = await request.json();
    
    console.log('API Request:', { action, category, item: item ? 'present' : 'missing', id });
    console.log('Full item data:', item);
    
    let result = false;
    
    switch (action) {
      case 'add':
        console.log('Adding item to category:', category);
        result = await addItem(category, item);
        console.log('Add result:', result);
        break;
      case 'update':
        console.log('Updating item in category:', category, 'with ID:', id);
        result = await updateItem(category, id, item);
        console.log('Update result:', result);
        break;
      case 'delete':
        console.log('Deleting item from category:', category, 'with ID:', id);
        result = await deleteItem(category, id);
        console.log('Delete result:', result);
        break;
      default:
        console.error('Invalid action:', action);
        return new Response(JSON.stringify({ error: 'Invalid action' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
    }
    
    if (result) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });
    } else {
      console.error('Operation returned false result');
      return new Response(JSON.stringify({ error: 'Operation failed - no result' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('API Error Details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return new Response(JSON.stringify({ 
      error: 'Server error: ' + error.message,
      details: error.stack
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}