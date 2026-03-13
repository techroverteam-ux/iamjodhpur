# Icon Fix Guide for IMA Jodhpur Website

## Current Issues
1. Font Awesome icons not loading consistently
2. Social media icons using external URLs
3. Admin panel data stored in localStorage only

## Solutions

### 1. Fix Font Awesome Icons

**Option A: Use Local Font Awesome**
```bash
npm install @fortawesome/fontawesome-free
```

**Option B: Update CDN Link**
Replace in `app/layout.jsx`:
```jsx
// Old
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

// New - Latest version
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
```

### 2. Download Social Media Icons Locally

Create these files in `/public/images/social/`:
- facebook.png
- instagram.png  
- youtube.png

### 3. Add Database Storage

Install database dependencies:
```bash
npm install prisma @prisma/client
```

## Quick Fix Implementation

### Step 1: Update Layout with Better CDN
```jsx
// app/layout.jsx
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" />
```

### Step 2: Download Social Icons
Save these icons to `/public/images/social/`:
- Facebook icon
- Instagram icon  
- YouTube icon

### Step 3: Update Footer Component
```jsx
// In Footer.jsx, replace external URLs with local paths:
<Image src="/images/social/facebook.png" width={28} height={28} alt="Facebook" />
<Image src="/images/social/instagram.png" width={28} height={28} alt="Instagram" />
<Image src="/images/social/youtube.png" width={28} height={28} alt="YouTube" />
```

## Admin Panel Data Storage

Currently using localStorage - consider migrating to:
1. **JSON files** (simple solution)
2. **Database** (recommended for production)
3. **CMS** (content management system)

## Testing

After implementing fixes:
1. Clear browser cache
2. Test on different browsers
3. Check mobile responsiveness
4. Verify all icons load properly

## Files to Modify
- `app/layout.jsx` - Update Font Awesome CDN
- `app/components/Footer.jsx` - Update social icon paths
- `app/admin/dashboard/page.jsx` - Consider database migration
- Add social icons to `/public/images/social/`