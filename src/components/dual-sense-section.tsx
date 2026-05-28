import Image from "next/image";
import { FaCheck, FaShoppingCart, FaArrowRight, FaBolt, FaGamepad, FaMicrophone, FaBatteryFull } from "react-icons/fa";
import type { IconType } from "react-icons";

type Dualsense = {
  name: string;
  tagline: string;
  subtitle: string;
  price: number;
  image: string;
  features: string[];
};

const featureIcons: IconType[] = [FaBolt, FaGamepad, FaMicrophone, FaBatteryFull];

const DualSenseSection = ({ dualsense }: { dualsense: Dualsense }) => {
  return (
    <section className="bg-[#060a14] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="text-center mb-16">
          <p className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Signature Controller
          </p>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
            DualSense™
          </h2>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/5">

          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003791]/40 via-[#060a14] to-[#0ea5e9]/10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

          <div className="relative grid lg:grid-cols-2 gap-0">

            {/* Left: Image */}
            <div className="relative h-72 lg:h-auto min-h-[480px] order-2 lg:order-1 overflow-hidden">
              <Image
                src={dualsense.image}
                alt={dualsense.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Edge fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#060a14] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] to-transparent lg:hidden" />
            </div>

            {/* Right: Content */}
            <div className="relative p-10 lg:p-16 flex flex-col justify-center gap-8 order-1 lg:order-2">

              <div>
                <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                  {dualsense.tagline}
                </h3>
                <p className="text-white/40 text-base leading-relaxed max-w-sm">
                  Experience haptic feedback that reacts to every in-game action.
                  Adaptive triggers create real resistance. Feel every moment.
                </p>
              </div>

              {/* Features */}
              <ul className="grid grid-cols-1 gap-3">
                {dualsense.features.map((f, i) => (
                  <li key={f} className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                      {(() => { const Icon = featureIcons[i] ?? FaBolt; return <Icon size={15} className="text-[#0ea5e9]" />; })()}
                    </span>
                    <div>
                      <p className="text-white font-semibold text-sm">{f}</p>
                    </div>
                    <FaCheck size={11} className="text-[#0ea5e9] ml-auto shrink-0" />
                  </li>
                ))}
              </ul>

              {/* Price + Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2 border-t border-white/5">
                <div>
                  <p className="text-4xl font-black text-white">${dualsense.price.toFixed(2)}</p>
                  <p className="text-white/30 text-xs mt-1 tracking-wide">Free shipping</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 h-12 px-6 rounded-xl bg-gradient-to-r from-[#003791] to-[#0055cc] text-white font-bold text-sm hover:from-[#0044aa] hover:to-[#0066dd] transition-all shadow-lg shadow-[#003791]/30">
                    <FaShoppingCart size={13} />
                    Shop Now
                  </button>
                  <button className="flex items-center gap-2 h-12 px-6 rounded-xl border border-white/10 text-white/70 font-semibold text-sm hover:bg-white/5 hover:text-white transition-all">
                    Learn More
                    <FaArrowRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualSenseSection;
