import Image from "next/image";
import { FaStar, FaArrowRight, FaShoppingCart } from "react-icons/fa";

type Game = {
  id: string;
  title: string;
  genre: string;
  price: number;
  rating: string;
  image: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  tag: string;
};

const GamesSection = ({ games }: { games: Game[] }) => {
  const featured = games.slice(0, 6);

  return (
    <section id="games" className="bg-[#060a14] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              New Releases
            </p>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
              Featured Games
            </h2>
          </div>
          <button className="self-start sm:self-auto flex items-center gap-2 text-sm font-bold text-white/50 hover:text-[#0ea5e9] transition-colors group">
            View all games
            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Game grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((g) => (
            <div
              key={g.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/10 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl"
              style={{ boxShadow: `0 0 0 0 ${g.gradientFrom}` }}
            >
              {/* Game cover image */}
              <div
                className="relative h-56 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${g.gradientFrom}, ${g.gradientVia}, ${g.gradientTo})`,
                }}
              >
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tag badge */}
                <span className="absolute top-3.5 left-3.5 text-[10px] font-black text-white bg-[#003791]/80 backdrop-blur-sm px-2.5 py-1 rounded-full tracking-wide border border-[#003791]/40">
                  {g.tag}
                </span>

                {/* Rating */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <FaStar size={9} className="text-yellow-400" />
                  <span className="text-white text-[11px] font-black">{g.rating}</span>
                </div>

                {/* Hover overlay CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 h-10 px-5 rounded-full bg-white text-[#003791] text-xs font-black shadow-xl hover:bg-white/90 transition-colors">
                    <FaShoppingCart size={11} />
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="bg-[#0a0e1a] p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-widest mb-1">
                    {g.genre}
                  </p>
                  <h3 className="font-bold text-white text-[15px] leading-snug truncate group-hover:text-[#7eb3ff] transition-colors">
                    {g.title}
                  </h3>
                </div>
                <div className="shrink-0">
                  <span className="text-xl font-black text-white">${g.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all banner */}
        <div className="mt-10 rounded-2xl border border-white/5 bg-[#0a0e1a] px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Explore all {games.length} titles</p>
            <p className="text-white/40 text-sm">From exclusives to the latest releases</p>
          </div>
          <button className="flex items-center gap-2.5 h-11 px-7 rounded-xl bg-gradient-to-r from-[#003791] to-[#0055cc] text-white text-sm font-bold hover:from-[#0044aa] hover:to-[#0066dd] transition-all shadow-lg shadow-[#003791]/30 shrink-0">
            Browse All Games
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
