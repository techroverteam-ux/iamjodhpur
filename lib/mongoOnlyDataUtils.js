import clientPromise from './mongodb';

const DB_NAME = 'ima_jodhpur';

export const readData = async () => {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const [users, courses, course_content, blogs, testimonials, achievements, facilities, events, banners, contacts] = await Promise.all([
      db.collection('users').find({}).toArray(),
      db.collection('courses').find({}).toArray(),
      db.collection('course_content').find({}).toArray(),
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
      course_content,
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
    console.log('addItem called with:', { category, item });
    
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const newItem = {
      ...item,
      id: Date.now(),
      createdAt: new Date()
    };
    
    console.log('Inserting new item:', newItem);
    
    const result = await db.collection(category).insertOne(newItem);
    console.log('MongoDB Insert Result:', result);
    return true;
  } catch (error) {
    console.error('MongoDB Insert Error:', {
      message: error.message,
      stack: error.stack,
      category,
      item
    });
    return false; // Return false instead of throwing
  }
};

export const updateItem = async (category, id, updatedItem) => {
  try {
    console.log('updateItem called with:', { category, id, updatedItem });
    
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    if (category === 'banners') {
      const result = await db.collection('banners').updateOne(
        { _id: 'main' },
        { $set: { data: updatedItem, updatedAt: new Date() } },
        { upsert: true }
      );
      console.log('Banner update result:', result);
    } else {
      // Try both string and number ID formats
      const numericId = parseInt(id);
      console.log('Attempting to update with IDs:', { original: id, numeric: numericId });
      
      // Remove _id from updatedItem to prevent MongoDB error
      const { _id, ...updateData } = updatedItem;
      console.log('Update data after removing _id:', updateData);
      
      const result = await db.collection(category).updateOne(
        { $or: [{ id: numericId }, { id: id.toString() }, { _id: id }] },
        { $set: { ...updateData, id: numericId, updatedAt: new Date() } }
      );
      
      console.log('MongoDB Update Result:', result);
      
      if (result.matchedCount === 0) {
        console.error('No document found with ID:', id, 'in collection:', category);
        // Check what documents exist in the collection
        const existingDocs = await db.collection(category).find({}).limit(5).toArray();
        console.log('Sample existing documents:', existingDocs.map(doc => ({ id: doc.id, _id: doc._id })));
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('MongoDB Update Error:', {
      message: error.message,
      stack: error.stack,
      category,
      id,
      updatedItem
    });
    return false; // Return false instead of throwing
  }
};

export const deleteItem = async (category, id) => {
  try {
    console.log('deleteItem called with:', { category, id });
    
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    // Try both string and number ID formats
    const numericId = parseInt(id);
    console.log('Attempting to delete with IDs:', { original: id, numeric: numericId });
    
    const result = await db.collection(category).deleteOne({
      $or: [{ id: numericId }, { id: id.toString() }, { _id: id }]
    });
    
    console.log('MongoDB Delete Result:', result);
    
    if (result.deletedCount === 0) {
      console.error('No document found with ID:', id, 'in collection:', category);
      // Check what documents exist in the collection
      const existingDocs = await db.collection(category).find({}).limit(5).toArray();
      console.log('Sample existing documents:', existingDocs.map(doc => ({ id: doc.id, _id: doc._id })));
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('MongoDB Delete Error:', {
      message: error.message,
      stack: error.stack,
      category,
      id
    });
    return false; // Return false instead of throwing
  }
};