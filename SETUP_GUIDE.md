# Setup Instructions for Dynamic Data & Images

## 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free account and cluster
3. Create a database user with read/write permissions
4. Get your connection string
5. Replace in `.env.local`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ima_jodhpur?retryWrites=true&w=majority
   ```

## 2. Vercel Blob Setup (for images)

1. Go to your Vercel Dashboard
2. Select your project
3. Go to Storage → Create Blob Store
4. Copy the token and add to `.env.local`:
   ```
   BLOB_READ_WRITE_TOKEN=your_blob_token_here
   ```

## 3. Environment Variables in Vercel

Add these in your Vercel project settings → Environment Variables:
- `MONGODB_URI` (your MongoDB connection string)
- `BLOB_READ_WRITE_TOKEN` (your Vercel Blob token)

## 4. What's Now Dynamic

✅ **Contact Form** - Submissions go to MongoDB `contacts` collection
✅ **STHE Inquiries** - From navbar form, go to `users` collection  
✅ **Course Registrations** - From courses page, go to `courses` collection
✅ **Blog Management** - Create/edit blogs with image uploads
✅ **Achievement Images** - Upload/manage achievement images
✅ **Banner Images** - Upload/manage page banners
✅ **Admin Dashboard** - View all submissions with clickable phone/email links

## 5. Admin Dashboard Sections

- **STHE Inquiries** - View scholarship test inquiries
- **Contact Forms** - View contact form submissions  
- **Registrations** - View course registrations
- **Blogs** - Manage blog posts with images
- **Achievements** - Manage achievement images
- **Banners** - Manage page banner images

## 6. Deploy & Test

1. Push your code to GitHub
2. Deploy to Vercel
3. Test all forms on your live site
4. Check admin dashboard for submissions

All data now persists permanently in MongoDB and images are stored in Vercel Blob!