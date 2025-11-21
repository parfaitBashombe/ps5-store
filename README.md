# PS5 Store Project

A modern e-commerce platform for PlayStation 5 products, built with Next.js and Tailwind CSS.

## Features

- **Product Catalog**: Browse a wide range of products including Consoles, Games, Controllers, Headsets, and Accessories.
- **Product Details**: Detailed product pages with image galleries, specifications, and related products.
- **Filtering & Sorting**: Filter products by category, price range, and sort by price or release date.
- **Real-time Search**: Instant search functionality to find products quickly.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Modern UI**: Sleek, dark-themed interface inspired by the PS5 aesthetic.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Material Symbols](https://fonts.google.com/icons)
- **Language**: TypeScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: App router pages and layouts
- `src/components`: Reusable UI components
- `src/lib/data`: Static data files for products
- `src/types`: TypeScript type definitions

## Recent Updates

- **Refactored Product System**: Transitioned from a games-only structure to a generic product system supporting multiple categories.
- **Enhanced Data**: Added comprehensive data for Consoles, Controllers, and Accessories.
- **Improved API**: Updated API endpoints to handle dynamic filtering and product retrieval.
