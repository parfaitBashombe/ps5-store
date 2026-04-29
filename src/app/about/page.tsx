import {
  FaPlaystation,
  FaRocket,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaHeart,
  FaBolt,
} from "react-icons/fa";
import HeroSection from "@/components/hero-section";
import SectionTitle from "@/components/section-title";

const Page = () => {
  const values = [
    {
      icon: FaAward,
      title: "Quality First",
      description: "We focus on premium products and top-tier presentation.",
    },
    {
      icon: FaShieldAlt,
      title: "Trusted Service",
      description: "A shopping experience built around confidence and clarity.",
    },
    {
      icon: FaHeart,
      title: "Gamer-Focused",
      description: "Every part of the store is designed with gamers in mind.",
    },
    {
      icon: FaBolt,
      title: "Fast Experience",
      description:
        "Smooth browsing, quick access, and responsive interactions.",
    },
  ];

  return (
    <>
      <HeroSection
        badge="About PS5 Store"
        icon={<FaPlaystation className="text-blue-400" />}
        title="A Store Crafted for PlayStation Fans"
        subtitle="PS5 Store is built to celebrate premium gaming with a clean, modern, and immersive shopping experience."
        image="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Premium gaming setup"
      />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Mission"
          title="To Make Gaming Shopping Feel Premium"
          description="We aim to deliver a polished destination where gamers can discover consoles, accessories, and must-play titles with confidence."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Gamers Choose Us"
          title="The Experience Matters"
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <FaRocket className="text-3xl text-blue-400" />
            <h3 className="mt-5 text-xl font-semibold text-white">
              Next-Gen Feel
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A visual style inspired by the speed and polish of PlayStation.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <FaUsers className="text-3xl text-blue-400" />
            <h3 className="mt-5 text-xl font-semibold text-white">
              Built for Community
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Designed to feel welcoming, modern, and easy to navigate on every
              device.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <FaShieldAlt className="text-3xl text-blue-400" />
            <h3 className="mt-5 text-xl font-semibold text-white">
              Reliable Selection
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A curated store layout that makes browsing feel smooth and
              trustworthy.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Brand Values"
          title="What Drives This Store"
          centered
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-[1.75rem] border border-white/10 bg-linear-to-br from-white/5 to-blue-500/10 p-6 shadow-xl shadow-blue-950/20 backdrop-blur-xl transition hover:-translate-y-1"
              >
                <Icon className="text-3xl text-blue-400" />
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;
