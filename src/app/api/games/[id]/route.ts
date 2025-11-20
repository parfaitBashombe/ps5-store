import { NextRequest, NextResponse } from 'next/server';
import { allGames } from '@/lib/data/games-data';

// GET /api/games/[id] - Get a single game by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const game = allGames.find((g) => g.id === id);

    if (!game) {
      return NextResponse.json(
        {
          success: false,
          error: 'Game not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: game,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch game',
      },
      { status: 500 }
    );
  }
}
