import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import db from "@/lib/db.json";

export default function ConsoleSection() {
  return (
    <section id="consoles" className="bg-[#f5f5f7] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[#003791] text-sm font-semibold tracking-widest uppercase mb-3">
            Hardware
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1d1d1f] tracking-tight">
            Choose Your PS5
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Two ways to play. Same next-gen power. Zero compromises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {db.consoles.map((c) => (
            <div
              key={c.id}
              className="relative bg-white border rounded-3xl flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ borderColor: c.cardBorder + "44" }}
            >
              {/* Badge */}
              <span
                className="absolute top-5 left-5 z-10 text-xs font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: c.badgeBg, color: c.badgeText }}
              >
                {c.badge}
              </span>

              {/* Product image */}
              <div
                className="relative w-full h-56 overflow-hidden"
                style={{ backgroundColor: c.cardBg }}
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">{c.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{c.tagline}</p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: c.accent + "18" }}
                      >
                        <FaCheck size={9} style={{ color: c.accent }} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-black text-[#1d1d1f]">${c.price.toFixed(2)}</p>
                    <p className="text-xs text-gray-400">Free delivery</p>
                  </div>
                  <button
                    className="h-11 px-6 rounded-full text-sm font-bold text-white transition-colors"
                    style={{ backgroundColor: c.accent }}
                  >
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
