import { addItem } from '../../../lib/mongoDataUtils';

export async function POST(request) {
  try {
    const { name, phone, course, message } = await request.json();
    
    if (!name || !phone || !course) {
      return Response.json({ error: 'Name, phone, and course are required' }, { status: 400 });
    }

    const inquiryData = {
      name,
      phone,
      course,
      message: message || '',
      type: 'inquiry',
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date()
    };

    const result = await addItem('users', inquiryData);
    
    if (result) {
      return Response.json({ success: true, message: 'Inquiry submitted successfully' });
    } else {
      return Response.json({ error: 'Failed to submit inquiry' }, { status: 500 });
    }
  } catch (error) {
    console.error('Inquiry error:', error);
    return Response.json({ error: 'Server error: ' + error.message }, { status: 500 });
  }
}