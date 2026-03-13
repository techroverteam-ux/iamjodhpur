import { readData, writeData, addItem, updateItem, deleteItem } from '../../../lib/dataUtils';

export async function GET() {
  const data = readData();
  return Response.json(data);
}

export async function POST(request) {
  const { action, category, item, id } = await request.json();
  
  let result = false;
  
  switch (action) {
    case 'add':
      result = addItem(category, item);
      break;
    case 'update':
      result = updateItem(category, id, item);
      break;
    case 'delete':
      result = deleteItem(category, id);
      break;
    default:
      return Response.json({ error: 'Invalid action' }, { status: 400 });
  }
  
  if (result) {
    return Response.json({ success: true });
  } else {
    return Response.json({ error: 'Operation failed' }, { status: 500 });
  }
}