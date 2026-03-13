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
    console.error('Error reading data:', error);
    return {
      users: [],
      courses: [],
      blogs: [],
      testimonials: [],
      achievements: [],
      facilities: [],
      events: [],
      banners: {},
      contacts: []
    };
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
    
    await db.collection(category).insertOne(newItem);
    return true;
  } catch (error) {
    console.error('Error adding item:', error);
    return false;
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
      await db.collection(category).updateOne(
        { id: parseInt(id) },
        { $set: { ...updatedItem, id: parseInt(id), updatedAt: new Date() } }
      );
    }
    
    return true;
  } catch (error) {
    console.error('Error updating item:', error);
    return false;
  }
};

export const deleteItem = async (category, id) => {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    await db.collection(category).deleteOne({ id: parseInt(id) });
    return true;
  } catch (error) {
    console.error('Error deleting item:', error);
    return false;
  }
};