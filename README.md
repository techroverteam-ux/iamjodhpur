# IMA Jodhpur Website Clone

A pixel-perfect clone of the IMA Jodhpur website built with Next.js 14 (App Router) and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **next/image** for optimized images

## Features

- ✅ Fully responsive (Mobile, Tablet, Desktop)
- ✅ SEO optimized with metadata
- ✅ Reusable component architecture
- ✅ Smooth animations and transitions
- ✅ Sticky navigation
- ✅ Optimized images with next/image
- ✅ Clean folder structure

## Project Structure

```
/app
  /components
    Navbar.jsx       # Sticky navigation with mobile menu
    Hero.jsx         # Hero section with CTA buttons
    About.jsx        # About section with stats
    Services.jsx     # Services grid with cards
    Events.jsx       # Upcoming events section
    Gallery.jsx      # Image gallery grid
    Contact.jsx      # Contact form and info
    Footer.jsx       # Footer with links
  page.jsx           # Main homepage
  layout.jsx         # Root layout with metadata
  globals.css        # Global styles with Tailwind
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Components Overview

### Navbar
- Sticky header with logo
- Desktop navigation menu
- Mobile hamburger menu
- Smooth scroll to sections
- "Join Us" CTA button

### Hero Section
- Full-width background gradient
- Large heading and subheading
- Two CTA buttons
- Wave SVG divider at bottom

### About Section
- Two-column layout (image + content)
- Mission statement
- Statistics cards (Members, Years)

### Services Section
- 3-column grid layout
- 6 service cards with icons
- Hover animations (lift effect)

### Events Section
- 3-column event cards
- Event images with date badges
- Location and registration CTA

### Gallery Section
- 3-column image grid
- Hover overlay effects
- "View All Photos" button

### Contact Section
- Contact form (Name, Email, Phone, Message)
- Contact information cards
- Social media links
- Office hours

### Footer
- 4-column layout
- Quick links and resources
- Contact information
- Copyright and legal links

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#1e40af',    // Blue
  secondary: '#0ea5e9',  // Light Blue
  accent: '#f59e0b',     // Amber
}
```

### Images
Replace placeholder images in components with actual images. Update the `next.config.js` domains array if using external image sources.

### Content
Update text content directly in each component file.

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Performance Optimizations

- Next.js Image component for automatic optimization
- Lazy loading for images
- CSS-only animations (no JavaScript)
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a clone project for educational purposes.
