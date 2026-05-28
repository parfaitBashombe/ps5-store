import Image from "next/image";
import { FaGamepad, FaShoppingCart } from "react-icons/fa";
import type { IconType } from "react-icons";

export type Accessory = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  iconType: string;
  accent: string;
  badge: string | null;
};

const iconMap: Record<string, IconType> = {
  gamepad: FaGamepad,
};

const AccessoryCard = ({ accessory: a }: { accessory: Accessory }) => {
  const Icon = iconMap[a.iconType] ?? FaGamepad;

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0e1a] hover:border-white/10 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 60px ${a.accent}15` }}
      />

      {/* Image */}
      <div
        className="relative h-48 overflow-hidden shrink-0"
        style={{ background: `linear-gradient(135deg, ${a.accent}18, #0a0e1a)` }}
      >
        <Image
          src={a.image}
          alt={a.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent" />

        {a.badge && (
          <span
            className="absolute top-3.5 left-3.5 text-[10px] font-black px-2.5 py-1 rounded-full text-white tracking-wide"
            style={{ backgroundColor: a.accent }}
          >
            {a.badge}
          </span>
        )}

        {/* Icon chip */}
        <div
          className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: a.accent + "25", border: `1px solid ${a.accent}40` }}
        >
          <Icon size={15} style={{ color: a.accent }} />
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-white text-[15px] group-hover:text-[#7eb3ff] transition-colors leading-snug">
            {a.name}
          </h3>
          <p className="text-white/35 text-xs mt-1.5 leading-relaxed">{a.description}</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-xl font-black text-white">${a.price.toFixed(2)}</span>
          <button className="flex items-center gap-2 h-9 px-4 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#003791] to-[#0055cc] hover:from-[#0044aa] hover:to-[#0066dd] transition-all shadow-lg shadow-[#003791]/25">
            <FaShoppingCart size={10} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessoryCard;
