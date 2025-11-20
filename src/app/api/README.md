# API Endpoints Documentation

This document describes all available API endpoints for the PS5 Store.

## Base URL
```
http://localhost:3000/api
```

---

## Games Endpoints

### Get All Games
```
GET /api/games
```

**Query Parameters:**
- `genre` (optional) - Filter games by genre (e.g., "action", "rpg", "exclusives")
- `search` (optional) - Search games by title or description
- `sortBy` (optional) - Sort by: `price`, `title`, or `releaseDate`

**Example Requests:**
```bash
# Get all games
GET /api/games

# Filter by genre
GET /api/games?genre=action

# Search for games
GET /api/games?search=spider

# Sort by price
GET /api/games?sortBy=price

# Combine filters
GET /api/games?genre=rpg&sortBy=releaseDate
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "id": "godofwar",
      "title": "God of War Ragnarök",
      "genre": "action adventure exclusives",
      "displayGenre": "Action-Adventure",
      "releaseDate": "Nov 9, 2022",
      "price": "$69.99",
      "image": "...",
      "description": "...",
      "videoUrl": "...",
      "screenshots": ["..."]
    }
  ]
}
```

---

### Get Single Game
```
GET /api/games/[id]
```

**Path Parameters:**
- `id` (required) - The game ID (e.g., "godofwar", "spiderman2")

**Example Request:**
```bash
GET /api/games/godofwar
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "godofwar",
    "title": "God of War Ragnarök",
    "genre": "action adventure exclusives",
    "displayGenre": "Action-Adventure",
    "releaseDate": "Nov 9, 2022",
    "price": "$69.99",
    "image": "...",
    "description": "...",
    "videoUrl": "...",
    "screenshots": ["..."]
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "error": "Game not found"
}
```

---

## Testimonials Endpoints

### Get All Testimonials
```
GET /api/testimonials
```

**Query Parameters:**
- `tag` (optional) - Filter by tag (e.g., "PS5 Console", "Game", "Controller")
- `minRating` (optional) - Filter by minimum rating (1-5)

**Example Requests:**
```bash
# Get all testimonials
GET /api/testimonials

# Filter by tag
GET /api/testimonials?tag=PS5 Console

# Filter by minimum rating
GET /api/testimonials?minRating=4

# Combine filters
GET /api/testimonials?tag=Game&minRating=5
```

**Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "name": "Alex J.",
      "location": "New York, NY",
      "tag": "PS5 Console",
      "rating": 3,
      "title": "A True Next-Gen Leap!",
      "text": "...",
      "img": "https://i.pravatar.cc/150?u=alex"
    }
  ]
}
```

---

## Statistics Endpoint

### Get Store Statistics
```
GET /api/stats
```

**Example Request:**
```bash
GET /api/stats
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalGames": 10,
    "totalTestimonials": 6,
    "averageRating": 4.33,
    "genres": [
      "Action-Adventure",
      "Action RPG",
      "Sports",
      "Survival Horror"
    ],
    "gamesByGenre": {
      "Action-Adventure": 5,
      "Action RPG": 2,
      "Sports": 1,
      "Survival Horror": 1
    }
  }
}
```

---

## Error Handling

All endpoints return errors in this format:

```json
{
  "success": false,
  "error": "Error message"
}
```

Common HTTP status codes:
- `200` - Success
- `404` - Resource not found
- `500` - Internal server error

---

## Usage in Your App

### Using Fetch
```typescript
// Get all games
const response = await fetch('/api/games');
const { data } = await response.json();

// Get single game
const response = await fetch('/api/games/godofwar');
const { data } = await response.json();

// Filter games
const response = await fetch('/api/games?genre=action&sortBy=price');
const { data } = await response.json();
```

### Using in Server Components
```typescript
import { allGames } from '@/lib/data/games-data';
// Use the data directly - no API call needed
```

### Using in Client Components
```typescript
'use client';

import { useEffect, useState } from 'react';
import type { Game } from '@/types';

export function GamesList() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/games')
      .then(res => res.json())
      .then(({ data }) => setGames(data));
  }, []);

  return <div>{/* render games */}</div>;
}
```
