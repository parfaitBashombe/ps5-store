import { NextResponse } from 'next/server';
import { allProducts, Product } from '@/lib/data/products-data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const genre = searchParams.get('genre');
    const category = searchParams.get('category');
    const searchQuery = searchParams.get('search');
    const sortBy = searchParams.get('sort');

    let filteredProducts: Product[] = [...allProducts];

    // Filter by category
    if (category && category !== 'All') {
      if (category.toLowerCase() === 'games') {
        filteredProducts = filteredProducts.filter(p => p.category === 'games');
      } else if (category.toLowerCase() === 'consoles') {
        filteredProducts = filteredProducts.filter(p => p.category === 'consoles');
      } else if (category.toLowerCase() === 'controllers') {
        filteredProducts = filteredProducts.filter(p => p.category === 'controllers');
      } else if (category.toLowerCase() === 'accessories') {
        filteredProducts = filteredProducts.filter(p => p.category === 'accessories');
      } else if (category.toLowerCase() === 'headsets') {
        filteredProducts = filteredProducts.filter(p => p.category === 'headsets');
      }
    }

    // Filter by genre (if applicable)
    if (genre) {
      filteredProducts = filteredProducts.filter((product) =>
        product.genre?.toLowerCase().includes(genre.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by specified field
    if (sortBy === 'title') {
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price') {
      filteredProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'releaseDate') {
      filteredProducts.sort((a, b) => 
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    }

    return NextResponse.json({ success: true, data: filteredProducts });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch products' }, { status: 500 });
  }
}
