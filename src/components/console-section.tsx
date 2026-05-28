import Image from "next/image";
import { FaCheck, FaShoppingCart } from "react-icons/fa";

type Console = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  accent: string;
  cardBg: string;
  cardBorder: string;
  digital: boolean;
  features: string[];
};

const ConsoleSection = ({ consoles }: { consoles: Console[] }) => {
  return (
    <section id="consoles" className="bg-[#060a14] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Hardware
          </p>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Choose Your PS5
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto leading-relaxed">
            Two ways to play. Same next-gen power. Zero compromises.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {consoles.map((c, i) => (
            <div
              key={c.id}
              className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0e1a] hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#003791]/20"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${c.accent}12 0%, transparent 60%)` }}
              />

              {/* Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span
                  className="text-[11px] font-black px-3 py-1.5 rounded-full tracking-wide"
                  style={{ backgroundColor: c.accent, color: c.badgeText }}
                >
                  {c.badge}
                </span>
              </div>

              {/* Popular indicator */}
              {i === 0 && (
                <div className="absolute top-5 right-5 z-20">
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/70 border border-white/10 tracking-wider uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-[#0a0e1a] to-[#111a30]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">{c.name}</h3>
                  <p className="text-white/40 text-sm">{c.tagline}</p>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-1 gap-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: c.accent + "20" }}
                      >
                        <FaCheck size={9} style={{ color: c.accent }} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-white/5" />

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-white">${c.price.toFixed(2)}</p>
                    <p className="text-white/30 text-xs mt-0.5 tracking-wide">Free delivery</p>
                  </div>
                  <button
                    className="flex items-center gap-2.5 h-12 px-6 rounded-xl text-sm font-bold text-white transition-all hover:brightness-110 hover:-translate-y-0.5 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${c.accent}, ${c.accent}cc)`,
                      boxShadow: `0 8px 24px ${c.accent}30`,
                    }}
                  >
                    <FaShoppingCart size={13} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-white/20 text-sm mt-10">
          All consoles include DualSense™ controller · HDMI cable · USB cable · AC adapter
        </p>
      </div>
    </section>
  );
};

export default ConsoleSection;
