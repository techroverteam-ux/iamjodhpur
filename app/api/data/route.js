import { readData, addItem, updateItem, deleteItem } from '../../../lib/mongoOnlyDataUtils';

export async function GET() {
  const data = await readData();
  return Response.json(data);
}

export async function POST(request) {
  try {
    const { action, category, item, id } = await request.json();
    
    console.log('API Request:', { action, category, item, id });
    
    let result = false;
    
    switch (action) {
      case 'add':
        result = await addItem(category, item);
        break;
      case 'update':
        result = await updateItem(category, id, item);
        break;
      case 'delete':
        result = await deleteItem(category, id);
        break;
      default:
        console.error('Invalid action:', action);
        return Response.json({ error: 'Invalid action' }, { status: 400 });
    }
    
    console.log('Operation result:', result);
    
    if (result) {
      return Response.json({ success: true });
    } else {
      return Response.json({ error: 'Operation failed' }, { status: 500 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ error: 'Server error: ' + error.message }, { status: 500 });
  }
}