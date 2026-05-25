import Image from "next/image";
import { FaStar, FaArrowRight } from "react-icons/fa";
import db from "@/lib/db.json";

const GamesSection = () => {
  return (
    <section id="games" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#003791] text-sm font-semibold tracking-widest uppercase mb-3">
              New Releases
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f] tracking-tight">
              Featured Games
            </h2>
          </div>
          <button className="self-start sm:self-auto text-sm font-semibold text-[#003791] hover:underline flex items-center gap-1.5">
            View all games
            <FaArrowRight size={12} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {db.games.map((g) => (
            <div
              key={g.id}
              className="group rounded-2xl overflow-hidden border border-gray-100 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Game art */}
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${g.gradientFrom}, ${g.gradientVia}, ${g.gradientTo})`,
                }}
              >
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-40 mix-blend-overlay"
                />
                <span className="absolute top-3 left-3 text-xs font-bold text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {g.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 right-3 bg-yellow-400 text-black text-xs font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                  <FaStar size={10} />
                  {g.rating}
                </div>
              </div>

              {/* Info */}
              <div className="bg-white p-5">
                <p className="text-[10px] font-bold text-[#003791] uppercase tracking-wider mb-1">
                  {g.genre}
                </p>
                <h3 className="font-bold text-[#1d1d1f] text-base leading-snug group-hover:text-[#003791] transition-colors">
                  {g.title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-black text-[#1d1d1f]">${g.price.toFixed(2)}</span>
                  <button className="h-9 px-4 rounded-full bg-[#003791] text-white text-xs font-bold hover:bg-[#00277a] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamesSection;
