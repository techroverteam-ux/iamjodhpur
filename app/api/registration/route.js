import { addItem } from '../../../lib/mongoDataUtils';

export async function POST(request) {
  try {
    const { name, phone, course, email } = await request.json();
    
    if (!name || !phone || !course) {
      return Response.json({ error: 'Name, phone, and course are required' }, { status: 400 });
    }

    const registrationData = {
      name,
      phone,
      course,
      email: email || '',
      type: 'registration',
      date: new Date().toISOString().split('T')[0],
      createdAt: new Date()
    };

    const result = await addItem('courses', registrationData);
    
    if (result) {
      return Response.json({ success: true, message: 'Registration submitted successfully' });
    } else {
      return Response.json({ error: 'Failed to submit registration' }, { status: 500 });
    }
  } catch (error) {
    console.error('Registration error:', error);
    return Response.json({ error: 'Server error: ' + error.message }, { status: 500 });
  }
}