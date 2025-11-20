import { NextRequest, NextResponse } from "next/server";
import { testimonials } from '@/lib/data/testimonials-data';
import type { Testimonial } from '@/types';

// In-memory storage for new reviews (will be lost on server restart)
// TODO: Replace with database storage (Supabase, MongoDB, etc.)
let newReviews: Testimonial[] = [];

// GET /api/reviews - Get all reviews/testimonials
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const tag = searchParams.get('tag');
    const minRating = searchParams.get('minRating');

    // Combine static testimonials with new reviews (new ones first)
    let filteredReviews: Testimonial[] = [...newReviews, ...testimonials];

    // Filter by tag
    if (tag) {
      filteredReviews = filteredReviews.filter(
        (review) => review.tag.toLowerCase() === tag.toLowerCase()
      );
    }

    // Filter by minimum rating
    if (minRating) {
      const minRatingNum = parseInt(minRating);
      filteredReviews = filteredReviews.filter(
        (review) => review.rating >= minRatingNum
      );
    }

    return NextResponse.json({
      success: true,
      count: filteredReviews.length,
      data: filteredReviews,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch reviews',
      },
      { status: 500 }
    );
  }
}

// POST /api/reviews - Create a new review/testimonial
export async function POST(request: Request) {
  try {
    const body = await request.json();
    

    const newTestimonial: Testimonial = {
      name: body.name,
      location: "Online", 
      tag: body.product, 
      rating: body.rating,
      title: body.title,
      text: body.review,
      img: `https://i.pravatar.cc/150?u=${encodeURIComponent(body.name)}`, 
    };


    newReviews.unshift(newTestimonial);

    console.log("Review submitted successfully:", newTestimonial);

    return NextResponse.json(
      { 
        success: true,
        message: "Review submitted successfully",
        data: newTestimonial
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json(
      { 
        success: false,
        message: "Error submitting review" 
      },
      { status: 500 }
    );
  }
}
