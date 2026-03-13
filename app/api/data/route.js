import { readData, addItem, updateItem, deleteItem } from '../../../lib/mongoOnlyDataUtils';

export async function GET() {
  try {
    console.log('Fetching fresh data from database...');
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
    console.error('Error in GET /api/data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST(request) {
  try {
    const { action, category, item, id } = await request.json();
    
    console.log('API Request:', { action, category, item: item ? 'present' : 'missing', id });
    
    let result = false;
    
    switch (action) {
      case 'add':
        result = await addItem(category, item);
        console.log('Add result:', result);
        break;
      case 'update':
        result = await updateItem(category, id, item);
        console.log('Update result:', result);
        break;
      case 'delete':
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
      return new Response(JSON.stringify({ error: 'Operation failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Server error: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}