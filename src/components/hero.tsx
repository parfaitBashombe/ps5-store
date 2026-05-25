import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const VIDEO_URL =
  "https://ik.imagekit.io/zzot6yvyh/images/ps5%20trailer.mp4?updatedAt=1763649847383";

const stats = [
  { value: "825GB", label: "SSD Storage" },
  { value: "120fps", label: "Max Framerate" },
  { value: "4K", label: "Ultra HD" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#001030]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-xl bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-10 flex flex-col gap-7">
          <span className="inline-flex self-start items-center gap-2 bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#003791] animate-pulse" />
            Next Gen Gaming
          </span>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight">
            Play Has{" "}
            <span className="text-[#7eb3ff]">No&nbsp;Limits.</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed">
            Experience lightning-fast loading, haptic feedback, and breathtaking
            4K visuals with the PlayStation 5 — the most powerful console ever made.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#consoles"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#003791] text-white font-semibold text-sm hover:bg-[#00277a] transition-colors"
            >
              Shop PS5
              <FaArrowRight size={13} />
            </Link>
            <Link
              href="#games"
              className="inline-flex items-center h-12 px-7 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#003791] transition-colors"
            >
              Explore Games
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-2">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-xs text-white/60 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
