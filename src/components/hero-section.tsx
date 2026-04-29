import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  badge?: string;
  primaryCta?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
  secondaryCta?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
  icon?: ReactNode;
  image?: string;
  imageAlt?: string;
};

const HeroSection = ({
  title,
  subtitle,
  badge,
  primaryCta,
  secondaryCta,
  icon,
  image,
  imageAlt = "Hero image",
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.16),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col justify-center">
          {badge ? (
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
              {icon}
              <span>{badge}</span>
            </div>
          ) : null}

          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
                >
                  {primaryCta.label}
                  {primaryCta.icon}
                </Link>
              ) : null}

              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/10"
                >
                  {secondaryCta.label}
                  {secondaryCta.icon}
                </Link>
              ) : null}
            </div>
          )}
        </div>

        <div className="relative z-10">
          <div className="relative h-80 overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/30 backdrop-blur-xl md:h-115">
            {image ? (
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover opacity-90"
              />
            ) : null}
            <div className="absolute inset-0 bg-linear-to-tr from-[#0a0f1f] via-transparent to-blue-500/20" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,15,31,0.9),rgba(10,15,31,0.2))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                Premium Gaming
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Crafted for speed, style, and immersion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
