import Image from "next/image";
import {
  FaGamepad,
  FaHeadphones,
  FaCamera,
  FaMobileAlt,
  FaBolt,
  FaVrCardboard,
  FaArrowRight,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import db from "@/lib/db.json";

const iconMap: Record<string, IconType> = {
  gamepad: FaGamepad,
  headphones: FaHeadphones,
  camera: FaCamera,
  mobile: FaMobileAlt,
  bolt: FaBolt,
  vr: FaVrCardboard,
};

const AccessoriesSection = () => {
  return (
    <section id="accessories" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#003791] text-sm font-semibold tracking-widest uppercase mb-3">
              Accessories
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f] tracking-tight">
              Level Up Your Setup
            </h2>
          </div>
          <button className="self-start sm:self-auto text-sm font-semibold text-[#003791] hover:underline flex items-center gap-1.5">
            View all accessories
            <FaArrowRight size={12} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {db.accessories.map((a) => {
            const Icon = iconMap[a.iconType] ?? FaGamepad;
            return (
              <div
                key={a.id}
                className="group border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Product image */}
                <div className="relative h-44 overflow-hidden" style={{ backgroundColor: a.accent + "12" }}>
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {a.badge && (
                    <span
                      className="absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: a.accent }}
                    >
                      {a.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col gap-4 flex-1">
                  {/* Icon + name */}
                  <div className="flex items-start gap-3">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: a.accent + "15" }}
                    >
                      <Icon size={16} style={{ color: a.accent }} />
                    </span>
                    <div>
                      <h3 className="font-bold text-[#1d1d1f] text-sm group-hover:text-[#003791] transition-colors">
                        {a.name}
                      </h3>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{a.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-lg font-black text-[#1d1d1f]">${a.price.toFixed(2)}</span>
                    <button
                      className="h-9 px-4 rounded-full text-xs font-bold text-white transition-colors"
                      style={{ backgroundColor: a.accent }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccessoriesSection;
