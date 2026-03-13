import clientPromise from './mongodb';

const DB_NAME = 'ima_jodhpur';

export const readData = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const [users, courses, blogs, testimonials, achievements, facilities, events, banners, contacts] = await Promise.all([
      db.collection('users').find({}).toArray(),
      db.collection('courses').find({}).toArray(),
      db.collection('blogs').find({}).toArray(),
      db.collection('testimonials').find({}).toArray(),
      db.collection('achievements').find({}).toArray(),
      db.collection('facilities').find({}).toArray(),
      db.collection('events').find({}).toArray(),
      db.collection('banners').findOne({ _id: 'main' }),
      db.collection('contacts').find({}).toArray()
    ]);

    return {
      users,
      courses,
      blogs,
      testimonials,
      achievements,
      facilities,
      events,
      banners: banners?.data || {},
      contacts
    };
  } catch (error) {
    console.error('MongoDB Error:', error);
    throw new Error('Database connection failed: ' + error.message);
  }
};

export const addItem = async (category, item) => {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const newItem = {
      ...item,
      id: Date.now(),
      createdAt: new Date()
    };
    
    const result = await db.collection(category).insertOne(newItem);
    console.log('MongoDB Insert Result:', result);
    return true;
  } catch (error) {
    console.error('MongoDB Insert Error:', error);
    throw new Error('Failed to add item: ' + error.message);
  }
};

export const updateItem = async (category, id, updatedItem) => {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    if (category === 'banners') {
      await db.collection('banners').updateOne(
        { _id: 'main' },
        { $set: { data: updatedItem, updatedAt: new Date() } },
        { upsert: true }
      );
    } else {
      const result = await db.collection(category).updateOne(
        { id: parseInt(id) },
        { $set: { ...updatedItem, id: parseInt(id), updatedAt: new Date() } }
      );
      console.log('MongoDB Update Result:', result);
    }
    
    return true;
  } catch (error) {
    console.error('MongoDB Update Error:', error);
    throw new Error('Failed to update item: ' + error.message);
  }
};

export const deleteItem = async (category, id) => {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const result = await db.collection(category).deleteOne({ id: parseInt(id) });
    console.log('MongoDB Delete Result:', result);
    return true;
  } catch (error) {
    console.error('MongoDB Delete Error:', error);
    throw new Error('Failed to delete item: ' + error.message);
  }
};