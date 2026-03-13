# How to Generate Vercel Blob Storage

## Step 1: Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in to your account
3. Select your **imajodhpur** project

## Step 2: Create Blob Storage
1. In your project dashboard, click on the **"Storage"** tab
2. Click **"Create Database"** or **"Browse Storage"**
3. Select **"Blob"** from the storage options
4. Click **"Create"**
5. Give it a name like `ima-images` or `imajodhpur-blob`
6. Select your preferred region (choose closest to your users)
7. Click **"Create Blob Store"**

## Step 3: Get Your Token
1. After creation, you'll see your Blob store
2. Click on **"Settings"** or **"Environment Variables"**
3. Copy the `BLOB_READ_WRITE_TOKEN` value
4. It will look like: `vercel_blob_rw_xxxxxxxxxx_xxxxxxxxxx`

## Step 4: Add to Environment Variables

### Local Development (.env.local):
```
MONGODB_URI="mongodb+srv://Vercel-Admin-inventory-mongodb:G49Sf4P3x13dVePa@inventory-mongodb.cpw5ztm.mongodb.net/ima_jodhpur?retryWrites=true&w=majority"
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxxxxx_xxxxxxxxxx
```

### Vercel Production:
1. Go to your project settings
2. Click **"Environment Variables"**
3. Add:
   - Key: `MONGODB_URI`
   - Value: `mongodb+srv://Vercel-Admin-inventory-mongodb:G49Sf4P3x13dVePa@inventory-mongodb.cpw5ztm.mongodb.net/ima_jodhpur?retryWrites=true&w=majority`
   
4. Add:
   - Key: `BLOB_READ_WRITE_TOKEN`
   - Value: `your_actual_blob_token_here`

## Step 5: Test the Setup
1. Deploy your project to Vercel
2. Try uploading an image in the admin dashboard
3. Check if the image appears and is stored properly

## Alternative: If Blob Creation Fails
If you can't create Blob storage, you can use Cloudinary instead:

1. Go to [cloudinary.com](https://cloudinary.com)
2. Create a free account
3. Get your credentials from the dashboard
4. Add to environment variables:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Current Status:
✅ MongoDB URL: **READY** (using existing from tiles-inventory)
⏳ Blob Storage: **NEEDS SETUP** (follow steps above)

Once you complete the Blob setup, all your forms and image uploads will work perfectly!