// Game-related types

export interface Game {
  id: string;
  title: string;
  genre: string;
  displayGenre: string;
  releaseDate: string;
  price: string;
  image: string;
  description: string;
  videoUrl: string;
  screenshots: string[];
}

export interface GameCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export type GameFilter = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;
  sortBy?: 'price' | 'rating' | 'releaseDate' | 'title';
  sortOrder?: 'asc' | 'desc';
};
