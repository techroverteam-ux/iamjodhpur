import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ima_jodhpur');
    
    // Test connection
    await db.admin().ping();
    
    // Get collections info
    const collections = await db.listCollections().toArray();
    
    return Response.json({ 
      success: true, 
      message: 'MongoDB connected successfully',
      database: 'ima_jodhpur',
      collections: collections.map(c => c.name),
      connectionString: process.env.MONGODB_URI ? 'Set' : 'Not Set'
    });
  } catch (error) {
    console.error('MongoDB Test Error:', error);
    return Response.json({ 
      success: false, 
      error: error.message,
      connectionString: process.env.MONGODB_URI ? 'Set' : 'Not Set'
    }, { status: 500 });
  }
}