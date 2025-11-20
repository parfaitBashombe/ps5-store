import { NextRequest, NextResponse } from 'next/server';
import { allGames } from '@/lib/data/games-data';
import type { Game } from '@/types';

// GET /api/games - Get all games or filter by query parameters
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const genre = searchParams.get('genre');
    const searchQuery = searchParams.get('search');
    const sortBy = searchParams.get('sortBy') as 'price' | 'title' | 'releaseDate' | null;

    let filteredGames: Game[] = [...allGames];

    // Filter by genre
    if (genre) {
      filteredGames = filteredGames.filter((game) =>
        game.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery) {
      filteredGames = filteredGames.filter(
        (game) =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by specified field
    if (sortBy === 'title') {
      filteredGames.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price') {
      filteredGames.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'releaseDate') {
      filteredGames.sort((a, b) => 
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      );
    }

    return NextResponse.json({
      success: true,
      count: filteredGames.length,
      data: filteredGames,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch games',
      },
      { status: 500 }
    );
  }
}
