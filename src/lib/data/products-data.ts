import type { Game } from '@/types';
import { allGames } from './games-data';

// Define a broader Product type that extends Game
// For now we can reuse the Game interface as it has all necessary fields
export type Product = Game & {
  category: 'consoles' | 'games' | 'controllers' | 'headsets' | 'accessories';
};

const consoles: Product[] = [
  {
    id: "ps5-slim-disc",
    title: "PlayStation 5 Slim Console",
    genre: "console hardware",
    displayGenre: "Console",
    releaseDate: "Nov 10, 2023",
    price: "$499.99",
    image: "/games/consoles/ps5-slim.png", // Placeholder path
    description: "The PS5® console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation® games.",
    videoUrl: "",
    screenshots: [],
    category: 'consoles'
  },
  {
    id: "ps5-slim-digital",
    title: "PlayStation 5 Slim Digital Edition",
    genre: "console hardware",
    displayGenre: "Console",
    releaseDate: "Nov 10, 2023",
    price: "$449.99",
    image: "/games/consoles/ps5-digital.png", // Placeholder path
    description: "PS5® Digital Edition is an all-digital version of the PS5® console with no disc drive. Sign into your account for PlayStation Network and go to PlayStation®Store to buy and download games.",
    videoUrl: "",
    screenshots: [],
    category: 'consoles'
  },
  {
    id: "ps5-spiderman-edition",
    title: "PlayStation 5 Console - Marvel's Spider-Man 2 Limited Edition",
    genre: "console limited-edition",
    displayGenre: "Limited Edition Console",
    releaseDate: "Sep 1, 2023",
    price: "$599.99",
    image: "/games/consoles/spider-man console.jpeg",
    description: "Get the PlayStation 5 Console – Marvel's Spider-Man 2 Limited Edition Bundle with a symbiote takeover design.",
    videoUrl: "",
    screenshots: [],
    category: 'consoles'
  },
  {
    id: "ps5-chelsea-edition",
    title: "PlayStation 5 Console - Chelsea FC Edition",
    genre: "console custom",
    displayGenre: "Custom Console",
    releaseDate: "Available Now",
    price: "$549.99",
    image: "/games/consoles/chelsea console.jpeg",
    description: "Show your support for the Blues with this custom Chelsea FC themed PlayStation 5 console.",
    videoUrl: "",
    screenshots: [],
    category: 'consoles'
  },
  {
    id: "ps5-gta-edition",
    title: "PlayStation 5 Console - GTA V Edition",
    genre: "console custom",
    displayGenre: "Custom Console",
    releaseDate: "Available Now",
    price: "$549.99",
    image: "/games/consoles/gta console.jpeg",
    description: "Experience Los Santos like never before with this custom Grand Theft Auto V themed console.",
    videoUrl: "",
    screenshots: [],
    category: 'consoles'
  },
  {
    id: "ps5-deathstroke-edition",
    title: "PlayStation 5 Console - Deathstroke Edition",
    genre: "console custom",
    displayGenre: "Custom Console",
    releaseDate: "Available Now",
    price: "$549.99",
    image: "/games/consoles/deathstroke console.jpeg",
    description: "A custom console featuring the formidable mercenary Deathstroke.",
    videoUrl: "",
    screenshots: [],
    category: 'consoles'
  },
  {
    id: "ps5-black-edition",
    title: "PlayStation 5 Console - Midnight Black",
    genre: "console hardware",
    displayGenre: "Console",
    releaseDate: "Available Now",
    price: "$499.99",
    image: "/games/consoles/black console.jpeg",
    description: "The PS5 console in a sleek Midnight Black finish.",
    videoUrl: "",
    screenshots: [],
    category: 'consoles'
  }
];

const controllers: Product[] = [
  {
    id: "dualsense-white",
    title: "DualSense™ Wireless Controller - White",
    genre: "accessory controller",
    displayGenre: "Controller",
    releaseDate: "Nov 12, 2020",
    price: "$69.99",
    image: "/games/controllers/default controller.jpeg",
    description: "Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands.",
    videoUrl: "",
    screenshots: [],
    category: 'controllers'
  },
  {
    id: "dualsense-edge",
    title: "DualSense Edge™ Wireless Controller",
    genre: "accessory controller pro",
    displayGenre: "Pro Controller",
    releaseDate: "Jan 26, 2023",
    price: "$199.99",
    image: "/games/accessories/dualsense-edge.png", // Placeholder
    description: "Get an edge in gameplay with remappable buttons, tunable triggers and sticks, changeable stick caps, back buttons, and more.",
    videoUrl: "",
    screenshots: [],
    category: 'controllers'
  },
  {
    id: "dualsense-spiderman",
    title: "DualSense™ - Marvel's Spider-Man 2 Limited Edition",
    genre: "accessory controller limited",
    displayGenre: "Limited Edition",
    releaseDate: "Sep 1, 2023",
    price: "$79.99",
    image: "/games/controllers/spider man controller.jpeg",
    description: "Equip yourself with the DualSense Wireless Controller – Marvel's Spider-Man 2 Limited Edition.",
    videoUrl: "",
    screenshots: [],
    category: 'controllers'
  },
  {
    id: "dualsense-gta",
    title: "DualSense™ - GTA V Edition",
    genre: "accessory controller custom",
    displayGenre: "Custom Controller",
    releaseDate: "Available Now",
    price: "$74.99",
    image: "/games/controllers/gta controller.jpeg",
    description: "Custom DualSense controller featuring GTA V artwork.",
    videoUrl: "",
    screenshots: [],
    category: 'controllers'
  },
  {
    id: "dualsense-red-black",
    title: "DualSense™ - Volcanic Red",
    genre: "accessory controller color",
    displayGenre: "Controller",
    releaseDate: "Available Now",
    price: "$74.99",
    image: "/games/controllers/red-black controller.jpeg",
    description: "Ignite your gaming nights with the blazing metallic finish of the Volcanic Red DualSense wireless controller.",
    videoUrl: "",
    screenshots: [],
    category: 'controllers'
  },
  {
    id: "dualsense-sky-blue",
    title: "DualSense™ - Starlight Blue",
    genre: "accessory controller color",
    displayGenre: "Controller",
    releaseDate: "Available Now",
    price: "$74.99",
    image: "/games/controllers/sky blue controller.jpeg",
    description: "Reach for the stars with the Starlight Blue DualSense wireless controller.",
    videoUrl: "",
    screenshots: [],
    category: 'controllers'
  },
  {
    id: "dualsense-uefa",
    title: "DualSense™ - UEFA Champions League",
    genre: "accessory controller custom",
    displayGenre: "Custom Controller",
    releaseDate: "Available Now",
    price: "$79.99",
    image: "/games/controllers/uefa champions league controller.jpeg",
    description: "Official UEFA Champions League themed DualSense controller.",
    videoUrl: "",
    screenshots: [],
    category: 'controllers'
  }
];

const headsets: Product[] = [
  {
    id: "pulse-3d-white",
    title: "PULSE 3D™ Wireless Headset",
    genre: "accessory audio",
    displayGenre: "Headset",
    releaseDate: "Nov 12, 2020",
    price: "$99.99",
    image: "/games/accessories/pulse-3d.png", // Placeholder
    description: "Enjoy a seamless, wireless experience with a headset fine-tuned for 3D Audio on PS5™ consoles.",
    videoUrl: "",
    screenshots: [],
    category: 'headsets'
  },
  {
    id: "pulse-elite",
    title: "PULSE Elite™ Wireless Headset",
    genre: "accessory audio pro",
    displayGenre: "Pro Headset",
    releaseDate: "Feb 21, 2024",
    price: "$149.99",
    image: "/games/accessories/pulse-elite.png", // Placeholder
    description: "Enter a new era of gaming audio with studio-inspired planar magnetic drivers and ultra-low latency lossless connection.",
    videoUrl: "",
    screenshots: [],
    category: 'headsets'
  }
];

const accessories: Product[] = [
  {
    id: "media-remote",
    title: "Media Remote",
    genre: "accessory media",
    displayGenre: "Remote",
    releaseDate: "Nov 12, 2020",
    price: "$29.99",
    image: "/games/accessories/media-remote.png", // Placeholder
    description: "Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.",
    videoUrl: "",
    screenshots: [],
    category: 'accessories'
  },
  {
    id: "hd-camera",
    title: "HD Camera",
    genre: "accessory camera",
    displayGenre: "Camera",
    releaseDate: "Nov 12, 2020",
    price: "$59.99",
    image: "/games/accessories/hd-camera.png", // Placeholder
    description: "Put yourself at the center of your gameplay sharing with the HD camera for PS5.",
    videoUrl: "",
    screenshots: [],
    category: 'accessories'
  },
  {
    id: "charging-station",
    title: "DualSense™ Charging Station",
    genre: "accessory power",
    displayGenre: "Charging Station",
    releaseDate: "Nov 12, 2020",
    price: "$29.99",
    image: "/games/accessories/charging-station.png", // Placeholder
    description: "Charge up to two DualSense wireless controllers simultaneously without having to connect them to your PS5 console.",
    videoUrl: "",
    screenshots: [],
    category: 'accessories'
  }
];

// Convert existing games to Products
const games: Product[] = allGames.map(game => ({
  ...game,
  category: 'games'
}));

export const allProducts: Product[] = [
  ...consoles,
  ...games,
  ...controllers,
  ...headsets,
  ...accessories
];

export const getProductsByCategory = (category: string) => {
  return allProducts.filter(p => p.category === category);
};
