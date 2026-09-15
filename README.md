# ShopSyStore MVP

A polished, responsive e-commerce demo for a Pakistani artificial-jewelry brand. The project includes a complete customer-facing browsing and checkout journey with realistic sample products and editorial content.

## Included

- Premium responsive homepage, navigation, mega menu, mobile menu, and detailed footer
- 24 sample products with PKR pricing, materials, stock, ratings, and product detail pages
- Category, collection, bridal, new-arrival, bestseller, sale, and wishlist views
- Search, filters, sorting, product saving, persistent shopping bag, and quantity controls
- Cart, guest checkout, payment placeholders, order confirmation, and order tracking
- ShopSy Journal landing and article pages
- About, materials, care, sizing, gifting, shipping, FAQ, privacy, terms, contact, and account pages
- Vercel-ready configuration

## Local setup

Requirements: Node.js 22.13 or newer and npm.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd shopsystore_mvp
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

No environment variables or external services are required for the demo. The cart and wishlist use browser storage, so they persist on the same device.

## Production check

The Vercel build is configured in `vercel.json`. To test that exact production build locally:

```bash
npx next build --webpack
```

## Deploy from GitHub to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project**.
3. Select **Import Git Repository** and choose this repository.
4. Keep the detected framework as **Next.js**.
5. Leave the root directory as `./` and keep the default install command.
6. The build command is already set to `next build --webpack` by `vercel.json`.
7. No environment variables are needed.
8. Select **Deploy**.

Vercel will create a permanent `*.vercel.app` domain. Later pushes to the main branch will deploy automatically, and pull requests will receive preview deployments.

## Demo content

Product data is stored in `lib/catalog.ts`. The visual assets are in `public/assets/`. Replace those files while keeping their filenames to update the photography without changing the components.

The contact details, policies, reviews, orders, payments, and checkout are demonstration content. Connect a commerce backend, payment provider, email service, and inventory system before accepting real orders.
