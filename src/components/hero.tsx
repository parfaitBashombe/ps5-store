import Link from "next/link";
import { FaArrowRight, FaPlay } from "react-icons/fa";

type HeroData = {
  images: string[];
  videos: {
    home: string;
    products: string;
  };
};

const stats = [
  { value: "825GB", label: "NVMe SSD" },
  { value: "120fps", label: "Max Framerate" },
  { value: "4K", label: "Ultra HD" },
  { value: "3D", label: "Tempest Audio" },
];

const Hero = ({ hero }: { hero: HeroData }) => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-[#060a14]">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src={hero.videos.home} type="video/mp4" />
      </video>

      {/* Multi-layer overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060a14] via-[#060a14]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-transparent to-[#060a14]/40" />
      <div className="absolute inset-0 bg-[#003791]/10 mix-blend-multiply" />

      {/* Animated glow orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#003791]/20 blur-[120px] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl flex flex-col gap-8">

          {/* Eyebrow badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 bg-[#003791]/30 border border-[#003791]/50 backdrop-blur-sm text-[#7eb3ff] text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse shadow-lg shadow-[#0ea5e9]/60" />
              Next Gen Gaming
            </span>
          </div>

          {/* Main heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
              Play Has
            </h1>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight bg-gradient-to-r from-[#0ea5e9] via-[#7eb3ff] to-[#003791] bg-clip-text text-transparent">
              No Limits.
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg text-white/60 leading-relaxed max-w-lg">
            Lightning-fast loading. Haptic feedback that puts you in the game.
            Breathtaking 4K visuals. The PlayStation 5 redefines what's possible.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#consoles"
              className="group inline-flex items-center gap-2.5 h-14 px-8 rounded-xl bg-gradient-to-r from-[#003791] to-[#0055cc] text-white font-bold text-sm hover:from-[#0044aa] hover:to-[#0066dd] transition-all shadow-xl shadow-[#003791]/40 hover:shadow-[#003791]/60 hover:-translate-y-0.5"
            >
              Shop PS5
              <FaArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#games"
              className="group inline-flex items-center gap-2.5 h-14 px-8 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/8 hover:border-white/40 backdrop-blur-sm transition-all"
            >
              <FaPlay size={10} />
              Watch Games
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black text-white leading-none">{s.value}</span>
                <span className="text-xs text-white/40 font-medium tracking-wider uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/30 text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
