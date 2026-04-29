export type Product = {
  id: string;
  title: string;
  price: number;
  main_image: string;
  images: string[];
  description: string;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: "ps5-console",
    title: "PS5 Console",
    price: 499.99,
    main_image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Experience next-gen gaming with lightning-fast loading, stunning visuals, and immersive performance.",
    rating: 4.9,
    reviews: 1240,
  },
  {
    id: "dualsense-controller",
    title: "DualSense Controller",
    price: 74.99,
    main_image:
      "https://images.unsplash.com/photo-1600080972464-8e6f9f1e9c0a?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600080972464-8e6f9f1e9c0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Adaptive triggers and haptic feedback deliver a deeply responsive and tactile gameplay experience.",
    rating: 4.8,
    reviews: 860,
  },
  {
    id: "pulse-3d-headset",
    title: "Pulse 3D Headset",
    price: 99.99,
    main_image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586075010920-e59c0b1f0ef2?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Immersive 3D audio, crystal-clear chat, and premium comfort for marathon gaming sessions.",
    rating: 4.7,
    reviews: 540,
  },
  {
    id: "charging-dock",
    title: "Charging Dock",
    price: 29.99,
    main_image:
      "https://images.unsplash.com/photo-1605980776566-0481dd2d5321?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1605980776566-0481dd2d5321?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff8a6f8f1c9?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Keep your DualSense controllers ready with a sleek, space-saving charging solution.",
    rating: 4.6,
    reviews: 310,
  },
  {
    id: "ps5-hd-camera",
    title: "PS5 HD Camera",
    price: 59.99,
    main_image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Capture gameplay moments and stream with sharp video quality and easy setup.",
    rating: 4.5,
    reviews: 260,
  },
  {
    id: "spider-man-2",
    title: "Spider-Man 2",
    price: 69.99,
    main_image:
      "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1592451465827-3c56b17b4f19?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Swing across an expanded New York City with intense combat, cinematic missions, and iconic heroes.",
    rating: 4.9,
    reviews: 980,
  },
  {
    id: "fifa-25",
    title: "FIFA 25",
    price: 69.99,
    main_image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Fast-paced football action with smoother movement, better control, and vibrant stadium atmosphere.",
    rating: 4.6,
    reviews: 730,
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarok",
    price: 59.99,
    main_image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579373903781-fd5c0c6d3e74?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A powerful narrative adventure with breathtaking combat and unforgettable mythic storytelling.",
    rating: 4.9,
    reviews: 1110,
  },
  {
    id: "ssd-expansion",
    title: "SSD Expansion",
    price: 149.99,
    main_image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Boost your storage with a high-speed expansion drive designed for big games and instant access.",
    rating: 4.7,
    reviews: 430,
  },
  {
    id: "gaming-monitor",
    title: "Gaming Monitor",
    price: 279.99,
    main_image:
      "https://images.unsplash.com/photo-1616711906333-23c9b0a1c2a7?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1616711906333-23c9b0a1c2a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Crisp visuals, fast response, and a sleek design built for competitive and cinematic gaming.",
    rating: 4.8,
    reviews: 520,
  },
];
