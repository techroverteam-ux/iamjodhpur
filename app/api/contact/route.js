import { addItem } from '../../../lib/mongoDataUtils';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    
    if (!name || !email || !phone || !message) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    const contactData = {
      name,
      email,
      phone,
      message,
      type: 'contact',
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date()
    };

    const result = await addItem('contacts', contactData);
    
    if (result) {
      return Response.json({ success: true, message: 'Contact form submitted successfully' });
    } else {
      return Response.json({ error: 'Failed to submit contact form' }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Server error: ' + error.message }, { status: 500 });
  }
}