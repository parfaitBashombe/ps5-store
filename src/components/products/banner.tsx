import { FaStore } from "react-icons/fa";

type HeroData = {
  images: string[];
  videos: {
    home: string,
    products: string
  };
};

const ShopBanner = ({ hero }: { hero: HeroData }) => {
  return (
    <div className="min-h-87.5 bg-[#060a14] relative overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105">
        <source src={hero.videos.products} type="video/mp4" />
      </video>


      {/* gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ps-blue-dark to-ps-surface"></div>

      {/* Multi-layer overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060a14] via-[#060a14]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-[#060a14]/40" />
      <div className="absolute inset-0 bg-[#003791]/10 mix-blend-multiply" />

      {/* bubles */}
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-white/15 blur-3xl animate-pulse"></div>
      <div className="absolute left-1/5 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse animate-bounce"></div>

      {/* content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">

        <div className="flex items-center gap-2 z-2">
          <FaStore size={12} className="text-[#0ea5e9]" />
          <p className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase">
            PlayStation Store
          </p>
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
          Browse Our Collection
        </h1>
        <p className="text-white/40 text-sm mt-1">
          Consoles, games, controllers and accessories — all in one place.
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;