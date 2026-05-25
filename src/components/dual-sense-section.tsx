import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import db from "@/lib/db.json";

const { dualsense } = db;

export default function DualSenseSection() {
  return (
    <section className="bg-[#f5f5f7] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#003791] to-[#001f5b] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Text side */}
            <div className="p-10 lg:p-16 flex flex-col justify-center gap-6">
              <p className="text-[#00b4d8] text-sm font-semibold tracking-widest uppercase">
                Controller
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {dualsense.tagline}
                <br />
                <span className="text-white/70">{dualsense.subtitle}</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed max-w-sm">
                Experience haptic feedback, adaptive triggers, and a built-in microphone.
                The DualSense wireless controller offers a deeper, more immersive gaming experience.
              </p>

              <ul className="flex flex-col gap-3">
                {dualsense.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <FaCheck size={9} className="text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-2">
                <div>
                  <p className="text-2xl font-black text-white">${dualsense.price.toFixed(2)}</p>
                  <p className="text-white/40 text-xs">Free shipping</p>
                </div>
                <button className="h-11 px-7 rounded-full bg-white text-[#003791] font-bold text-sm hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
                <button className="h-11 px-7 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image side */}
            <div className="relative h-72 lg:h-auto min-h-[320px]">
              <Image
                src={dualsense.image}
                alt={dualsense.name}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#003791]/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f5b]/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
