import { NextResponse } from 'next/server';
import { allGames } from '@/lib/data/games-data';
import { testimonials } from '@/lib/data/testimonials-data';

// GET /api/stats - Get statistics about the store
export async function GET() {
  try {
    // Calculate average rating
    const avgRating =
      testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

    // Get unique genres
    const genres = [...new Set(allGames.map((game) => game.displayGenre))];

    // Count games by genre
    const gamesByGenre = allGames.reduce((acc, game) => {
      const genre = game.displayGenre;
      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return NextResponse.json({
      success: true,
      data: {
        totalGames: allGames.length,
        totalTestimonials: testimonials.length,
        averageRating: parseFloat(avgRating.toFixed(2)),
        genres: genres,
        gamesByGenre: gamesByGenre,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch stats',
      },
      { status: 500 }
    );
  }
}
