import clientPromise from '../../../lib/mongodb';
import { put } from '@vercel/blob';

const DB_NAME = 'ima_jodhpur';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const bannerDoc = await db.collection('banners').findOne({ _id: 'main' });
    const banners = bannerDoc?.data || {};
    
    return new Response(JSON.stringify({ banners }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching banners:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch banners' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const page = formData.get('page');
    const imageFile = formData.get('image');
    
    if (!page || !imageFile) {
      return new Response(JSON.stringify({ error: 'Page and image are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Upload to Vercel Blob
    const blob = await put(`banners/${page}-${Date.now()}.${imageFile.name.split('.').pop()}`, imageFile, {
      access: 'public',
    });

    // Save to MongoDB
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const currentBanners = await db.collection('banners').findOne({ _id: 'main' });
    const banners = currentBanners?.data || {};
    banners[page] = blob.url;
    
    await db.collection('banners').updateOne(
      { _id: 'main' },
      { $set: { data: banners, updatedAt: new Date() } },
      { upsert: true }
    );

    return new Response(JSON.stringify({ success: true, url: blob.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error uploading banner:', error);
    return new Response(JSON.stringify({ error: 'Failed to upload banner' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function DELETE(request) {
  try {
    const { page } = await request.json();
    
    if (!page) {
      return new Response(JSON.stringify({ error: 'Page is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    
    const currentBanners = await db.collection('banners').findOne({ _id: 'main' });
    const banners = currentBanners?.data || {};
    delete banners[page];
    
    await db.collection('banners').updateOne(
      { _id: 'main' },
      { $set: { data: banners, updatedAt: new Date() } },
      { upsert: true }
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error deleting banner:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete banner' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}