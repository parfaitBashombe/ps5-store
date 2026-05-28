import { FaArrowRight } from "react-icons/fa";
import AccessoryCard, { type Accessory } from "@/components/accessory-card";

const AccessoriesSection = ({ accessories }: { accessories: Accessory[] }) => {
  return (
    <section id="accessories" className="bg-[#060a14] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Accessories
            </p>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
              Level Up Your Setup
            </h2>
          </div>
          <button className="self-start sm:self-auto flex items-center gap-2 text-sm font-bold text-white/50 hover:text-[#0ea5e9] transition-colors group">
            View all accessories
            <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {accessories.map((a) => (
            <AccessoryCard key={a.id} accessory={a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;
