import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const stats = [
  { value: "825GB", label: "SSD Storage" },
  { value: "120fps", label: "Max Framerate" },
  { value: "4K", label: "Ultra HD" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#003791 1px, transparent 1px), linear-gradient(90deg, #003791 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div className="flex flex-col gap-7">
          <span className="inline-flex self-start items-center gap-2 bg-[#e8f0fc] text-[#003791] text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#003791] animate-pulse" />
            Next Gen Gaming
          </span>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#1d1d1f] leading-[1.05] tracking-tight">
            Play Has{" "}
            <span className="text-[#003791]">No&nbsp;Limits.</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-md">
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
              className="inline-flex items-center h-12 px-7 rounded-full border-2 border-[#003791] text-[#003791] font-semibold text-sm hover:bg-[#003791] hover:text-white transition-colors"
            >
              Explore Games
            </Link>
          </div>

          <div className="flex gap-8 pt-2">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-black text-[#003791]">{s.value}</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — real image */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-[480px] rounded-3xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/gaming-ps5/600/800"
              alt="Gaming setup"
              fill
              className="object-cover"
              priority
            />
            {/* Blue overlay card */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f5b]/80 via-[#003791]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4">
              <div className="bg-[#003791] rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <span className="text-white font-black text-sm leading-none">PS5</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">PlayStation 5</p>
                <p className="text-white/60 text-xs">Next-gen console — starting at $399.99</p>
              </div>
              <Link
                href="#consoles"
                className="ml-auto shrink-0 bg-white text-[#003791] text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
