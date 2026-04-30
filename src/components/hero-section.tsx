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
    <section className="relative overflow-hidden pb-10 pt-28">
      {/* Radial glow backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(0,102,255,0.2), transparent 65%), radial-gradient(ellipse 40% 40% at 20% 70%, rgba(0,212,255,0.1), transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Horizontal scan line */}
      <div
        style={{
          position: "absolute",
          top: "35%",
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.15) 30%, rgba(0,102,255,0.25) 50%, rgba(0,212,255,0.15) 70%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 md:grid-cols-2 md:px-6 lg:px-8">
        {/* ── Left: Copy ──────────────────────────────── */}
        <div className="relative z-10 flex flex-col justify-center">
          {badge ? (
            <div className="eyebrow-badge mb-6 inline-flex w-fit items-center gap-2">
              {icon}
              <span>{badge}</span>
            </div>
          ) : null}

          <h1
            className="font-display animate-fadeInUp max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ color: "var(--foreground)" }}
          >
            {/* Split title to apply gradient on last word */}
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="gradient-text">
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </h1>

          <p
            className="animate-fadeInUp delay-200 mt-6 max-w-lg text-base leading-8 md:text-lg"
            style={{ color: "var(--muted-foreground)" }}
          >
            {subtitle}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="animate-fadeInUp delay-300 mt-9 flex flex-wrap gap-4">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="btn-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white"
                  style={{ background: "var(--primary)" }}
                >
                  {primaryCta.label}
                  {primaryCta.icon}
                </Link>
              ) : null}

              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    border: "1px solid var(--card-border)",
                    background: "rgba(255,255,255,0.04)",
                    color: "var(--foreground)",
                  }}
                >
                  {secondaryCta.label}
                  {secondaryCta.icon}
                </Link>
              ) : null}
            </div>
          )}

          {/* Decorative stat pills */}
          <div className="animate-fadeInUp delay-500 mt-10 flex flex-wrap gap-3">
            {[
              { label: "PS5 Ready", dot: "var(--accent)" },
              { label: "4K / 120fps", dot: "var(--primary)" },
              { label: "Free Returns", dot: "#a78bfa" },
            ].map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
                style={{
                  border: "1px solid var(--card-border)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--muted-foreground)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: pill.dot,
                    display: "inline-block",
                    boxShadow: `0 0 6px ${pill.dot}`,
                  }}
                />
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Image frame ───────────────────────── */}
        <div className="animate-fadeInUp delay-200 relative z-10">
          {/* Outer glow ring */}
          <div
            style={{
              position: "absolute",
              inset: -2,
              borderRadius: "1.75rem",
              background:
                "linear-gradient(135deg, rgba(0,102,255,0.5), rgba(0,212,255,0.3), transparent 60%)",
              filter: "blur(1px)",
              zIndex: 0,
            }}
          />

          <div
            className="relative overflow-hidden rounded-3xl backdrop-blur-xl"
            style={{
              height: 440,
              border: "1px solid rgba(0,212,255,0.18)",
              background: "rgba(10,18,40,0.6)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,102,255,0.2)",
              zIndex: 1,
            }}
          >
            {image ? (
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
              />
            ) : null}

            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(5,8,22,0.75) 0%, rgba(5,8,22,0.15) 50%, transparent 100%)",
              }}
            />

            {/* Corner accent lines */}
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                width: 40,
                height: 40,
                borderTop: "2px solid rgba(0,212,255,0.6)",
                borderLeft: "2px solid rgba(0,212,255,0.6)",
                borderRadius: "6px 0 0 0",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 16,
                right: 16,
                width: 40,
                height: 40,
                borderBottom: "2px solid rgba(0,102,255,0.6)",
                borderRight: "2px solid rgba(0,102,255,0.6)",
                borderRadius: "0 0 6px 0",
              }}
            />

            {/* Caption card */}
            <div
              className="absolute bottom-5 left-5 right-5 rounded-2xl p-5 backdrop-blur-md"
              style={{
                border: "1px solid rgba(0,212,255,0.15)",
                background: "rgba(5,8,22,0.7)",
              }}
            >
              <p
                className="font-display text-xs font-semibold uppercase tracking-[0.25em]"
                style={{ color: "var(--accent)" }}
              >
                Premium Gaming
              </p>
              <p
                className="mt-1.5 text-base font-semibold"
                style={{ color: "var(--foreground)" }}
              >
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
