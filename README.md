# DR MOBILES: Premium eCommerce Store

## Project Overview
**dr-mobiles-premium-commerce** is a highly polished, Apple-inspired eCommerce web application. It was meticulously crafted to represent DR MOBILES, a premium destination for iPhones, Android smartphones, accessories, wearables, and trusted mobile service bookings. The focus is entirely on product excellence, seamless User Experience (UX), and premium aesthetics characterized by clean typography, white-space, minimal shadows, and responsive glass-blur utilities.

## Final Brand Positioning
**DR MOBILES — Premium iPhone, Android & Mobile Service Store**
A sophisticated, product-first storefront free of unnecessary clutter or automated AI chatbot gimmicks. Designed to elevate the shopping experience for both flagship Android and Apple devices equally.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (thinned globally for an Apple-style aesthetic) & React Icons
- **Animations:** Framer Motion
- **State Management:** Zustand (for client-side interactions)

## Pages Included
- `/` - Home Page (Hero, Categories, Featured Phones, Services, Trust Badges)
- `/shop` - Product Listing Page (Grid/List toggle, advanced sidebar/bottom-sheet filtering)
- `/product/[slug]` - Detailed Product Page (Image gallery, storage/color variants, frequently bought together)
- `/cart` - Shopping Cart
- `/checkout` - Multi-step Checkout Flow
- `/wishlist` - Saved Items
- `/compare` - Side-by-side Product Comparison
- `/track-order` - Order Tracking Interface
- `/service` - Mobile Service Booking Flow

## Features
- **Apple-Inspired Design:** Minimalistic, heavily relies on whitespace, `#F5F5F7` background sections, and refined typography.
- **Fully Responsive:** Beautifully degrades into tablet and mobile views, featuring a sticky mobile bottom navigation.
- **Optimized Assets:** Powered by Next.js `<Image />` tags to prevent cumulative layout shift (CLS).
- **SEO Ready:** Complete metadata, Open Graph configurations, and proper semantic HTML5.
- **No-AI Guarantee:** Completely stripped of distracting chat bots and prompts, ensuring a 100% commerce-first approach.

## How to Run Locally
1. Ensure Node.js 18.18+ is installed.
2. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Build
To verify production readiness locally:
```bash
npm run build
```
This builds an optimized version of the app in the `.next` folder. You can test it locally using:
```bash
npm run start
```

## Deployment Steps

This project is fully ready for deployment on any edge-optimized platform.

### Vercel (Recommended)
1. Push your project to GitHub.
2. Log into [Vercel](https://vercel.com/) and click **Add New > Project**.
3. Import your GitHub repository.
4. **Framework Preset:** Next.js (will be auto-detected).
5. **Build Command:** `npm run build`
6. Click **Deploy**. Vercel will handle image optimization routing automatically.

### Cloudflare Pages
1. Push your project to GitHub.
2. Log into the Cloudflare Dashboard and navigate to **Workers & Pages > Create application > Pages > Connect to Git**.
3. Select your repository.
4. **Framework preset:** Next.js.
5. **Build command:** `npx @cloudflare/next-on-pages` (Note: for full App router compatibility on Cloudflare, you must configure `@cloudflare/next-on-pages` or opt for static export if your app doesn't require server rendering). 
6. Click **Save and Deploy**.
*Note:* The default Next.js output works perfectly on Vercel, but if you choose Cloudflare, be sure to review Cloudflare's specific image optimization constraints regarding the `next/image` component.

---
*Built with precision for DR MOBILES.*
