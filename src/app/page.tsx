import {
  FaArrowRight,
  FaGamepad,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaPaperPlane,
  FaStar,
  FaShoppingBag,
  FaTruck,
  FaCheckCircle,
  FaQuoteLeft,
  FaQuestionCircle,
  FaBolt,
  FaFire,
  FaUsers,
  FaTrophy,
  FaChevronRight,
} from "react-icons/fa";
import HeroSection from "@/components/hero-section";
import SectionTitle from "@/components/section-title";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/data/product";

const Page = () => {
  const featured = products.slice(0, 4);

  const stats = [
    { icon: FaUsers, value: "50K+", label: "Active Players" },
    { icon: FaGamepad, value: "1,200+", label: "Games & Gear" },
    { icon: FaTrophy, value: "99%", label: "Satisfaction Rate" },
    { icon: FaBolt, value: "24h", label: "Fast Delivery" },
  ];

  const features = [
    {
      icon: FaShippingFast,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping for your favorite gaming gear. Orders processed same-day.",
      gradient: "from-blue-600/20 to-cyan-500/10",
      iconBg: "bg-blue-500/10 text-blue-400",
    },
    {
      icon: FaShieldAlt,
      title: "Authentic Products",
      description:
        "Only genuine PlayStation-compatible products. Every item quality-checked before dispatch.",
      gradient: "from-cyan-500/20 to-blue-400/10",
      iconBg: "bg-cyan-500/10 text-cyan-400",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description:
        "Dedicated support team at your service around the clock, any day of the year.",
      gradient: "from-indigo-500/20 to-blue-500/10",
      iconBg: "bg-indigo-500/10 text-indigo-400",
    },
  ];

  const steps = [
    {
      icon: FaShoppingBag,
      step: "01",
      title: "Browse Products",
      description:
        "Explore premium gaming consoles, accessories, and exclusive titles curated for you.",
    },
    {
      icon: FaTruck,
      step: "02",
      title: "Fast Checkout",
      description:
        "Place your order in seconds with a seamless, secure checkout experience.",
    },
    {
      icon: FaCheckCircle,
      step: "03",
      title: "Enjoy Gaming",
      description:
        "Receive your products quickly, unbox, and dive straight into your next adventure.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Carter",
      role: "Pro Gamer",
      avatar: "AC",
      review:
        "Best gaming store experience I've ever had. Clean design, amazing products, and smooth navigation. Already ordered three times.",
    },
    {
      name: "Sophia Kim",
      role: "Streamer",
      avatar: "SK",
      review:
        "Love the premium PlayStation feel. Everything looks polished and professional. Delivery was faster than expected!",
    },
    {
      name: "James Brown",
      role: "Collector",
      avatar: "JB",
      review:
        "Excellent collection of authentic products. The packaging is immaculate. Definitely my go-to gaming store from now on.",
    },
  ];

  const faqs = [
    {
      question: "Do you sell authentic PlayStation products?",
      answer:
        "Yes, every product listed is quality checked and sourced from trusted, verified suppliers. We guarantee authenticity on all items.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Orders are processed same-day and shipped with reliable delivery partners. Most orders arrive within 24–48 hours.",
    },
    {
      question: "Can I contact support anytime?",
      answer:
        "Absolutely. Our support team is available 24/7 via live chat and email. We average a response time under 5 minutes.",
    },
  ];

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* ── Floating Background Orbs ──────────────────── */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          top: -200,
          left: "60%",
          background: "rgba(0, 102, 255, 0.12)",
          animationDuration: "14s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          top: "30%",
          left: -150,
          background: "rgba(0, 212, 255, 0.08)",
          animationDuration: "18s",
          animationDelay: "3s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          bottom: "10%",
          right: -100,
          background: "rgba(0, 102, 255, 0.09)",
          animationDuration: "20s",
          animationDelay: "7s",
        }}
      />

      {/* ── Hero Section ─────────────────────────────── */}
      <HeroSection
        badge="Premium PlayStation Store"
        icon={<FaGamepad className="text-primary" />}
        title="Level Up Your Gaming Experience"
        subtitle="Discover premium PS5 gear, accessories, and iconic titles designed to elevate every session."
        primaryCta={{
          label: "Shop Now",
          href: "/products",
          icon: <FaArrowRight />,
        }}
        secondaryCta={{
          label: "Explore Products",
          href: "/products",
        }}
        image="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Gaming setup"
      />

      {/* ── Stats Bar ────────────────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-4 pb-6 md:px-6 lg:px-8">
        <div
          className="rounded-3xl border p-6 backdrop-blur-xl"
          style={{
            borderColor: "var(--card-border)",
            background:
              "linear-gradient(135deg, rgba(0,102,255,0.08) 0%, rgba(10,18,40,0.7) 50%, rgba(0,212,255,0.06) 100%)",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center gap-2 text-center animate-fadeInUp delay-${(i + 1) * 100}`}
                >
                  <div
                    className="flex items-center justify-center rounded-2xl p-3"
                    style={{ background: "rgba(0,102,255,0.12)" }}
                  >
                    <Icon
                      className="text-xl"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <p className="stat-number text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p
                    className="text-xs font-medium tracking-widest uppercase"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <SectionTitle
            eyebrow="Featured"
            title="Top Gaming Picks"
            description="Handpicked products built for gamers who want performance and style."
          />
          <a
            href="/products"
            className="hidden items-center gap-2 text-sm font-semibold md:flex"
            style={{ color: "var(--accent)" }}
          >
            View All
            <FaChevronRight className="text-xs" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className={`animate-fadeInUp delay-${(i + 1) * 100}`}
            >
              <ProductCard product={product} variant="featured" />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5"
            style={{
              borderColor: "var(--card-border)",
              color: "var(--accent)",
            }}
          >
            View All Products
            <FaArrowRight className="text-xs" />
          </a>
        </div>
      </section>

      {/* ── Promo Banner ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-3xl border px-8 py-10 md:px-14 md:py-12"
          style={{
            borderColor: "rgba(0, 212, 255, 0.25)",
            background:
              "linear-gradient(120deg, rgba(0,102,255,0.18) 0%, rgba(0,212,255,0.08) 60%, rgba(0,102,255,0.04) 100%)",
            boxShadow:
              "0 0 60px rgba(0,102,255,0.15), inset 0 1px 0 rgba(0,212,255,0.15)",
            position: "relative",
          }}
        >
          {/* Decorative lines */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 300,
              height: "100%",
              background:
                "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,212,255,0.03) 12px, rgba(0,212,255,0.03) 13px)",
            }}
          />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <span
                className="eyebrow-badge mb-3 inline-flex"
                style={{ color: "var(--accent)" }}
              >
                <FaFire />
                Limited Offer
              </span>
              <h2
                className="font-display text-2xl font-bold md:text-3xl"
                style={{ color: "var(--foreground)" }}
              >
                PS5 Bundles — Up to{" "}
                <span className="gradient-text-blue">30% Off</span>
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Exclusive discounts on console + controller + game bundles.
                Limited stock.
              </p>
            </div>

            <a
              href="/products"
              className="btn-glow inline-flex shrink-0 items-center gap-3 rounded-full px-8 py-3.5 text-sm font-bold tracking-wide text-white"
              style={{ background: "var(--primary)" }}
            >
              Grab the Deal
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Built for Gamers Who Want More"
          centered
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`card-glow animate-fadeInUp delay-${(i + 1) * 100} rounded-3xl border p-7 backdrop-blur-xl`}
                style={{
                  borderColor: "var(--card-border)",
                  background: "var(--card)",
                }}
              >
                <div
                  className={`inline-flex rounded-2xl p-4 text-2xl ${feature.iconBg}`}
                >
                  <Icon />
                </div>

                <h3
                  className="mt-5 font-display text-lg font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How It Works"
          title="Simple, Fast & Premium"
          centered
        />

        {/* Connector line (desktop) */}
        <div className="relative mt-12">
          <div
            className="absolute top-10 left-1/2 hidden h-px w-[60%] -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent), var(--primary), transparent)",
              opacity: 0.25,
            }}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className={`card-glow animate-fadeInUp delay-${(i + 1) * 200} relative rounded-3xl border p-7 text-center backdrop-blur-xl`}
                  style={{
                    borderColor: "var(--card-border)",
                    background: "var(--card)",
                  }}
                >
                  {/* Step number watermark */}
                  <div
                    className="font-display absolute top-4 right-5 text-5xl font-900 opacity-5 select-none"
                    style={{
                      color: "var(--accent)",
                      fontWeight: 900,
                      fontSize: "3.5rem",
                    }}
                  >
                    {step.step}
                  </div>

                  <div
                    className="mx-auto inline-flex rounded-2xl p-5 text-3xl"
                    style={{
                      background: "rgba(0,102,255,0.12)",
                      color: "var(--primary)",
                    }}
                  >
                    <Icon />
                  </div>

                  <h3
                    className="mt-5 font-display text-lg font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="What Gamers Say" centered />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-glow animate-fadeInUp delay-${(i + 1) * 100} flex flex-col rounded-3xl border p-7 backdrop-blur-xl`}
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card)",
              }}
            >
              <FaQuoteLeft
                className="text-2xl"
                style={{ color: "var(--primary)" }}
              />

              <p
                className="mt-4 flex-1 text-sm leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                {t.review}
              </p>

              <div className="mt-5 flex gap-0.5" style={{ color: "#fbbf24" }}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FaStar key={idx} className="text-sm" />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary), var(--accent))",
                    color: "#fff",
                    fontFamily: "Orbitron, sans-serif",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.name}
                  </h4>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          centered
        />

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`card-glow animate-fadeInUp delay-${(i + 1) * 100} rounded-2xl border p-6 backdrop-blur-xl`}
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="mt-0.5 shrink-0 rounded-xl p-2"
                  style={{ background: "rgba(0,102,255,0.12)" }}
                >
                  <FaQuestionCircle style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3
                    className="font-display text-sm font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-7"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-10 pb-24 md:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl border px-8 py-12 backdrop-blur-xl md:px-12 md:py-16"
          style={{
            borderColor: "rgba(0,212,255,0.2)",
            background:
              "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, rgba(10,18,40,0.8) 50%, rgba(0,212,255,0.08) 100%)",
            boxShadow:
              "0 0 80px rgba(0,102,255,0.15), inset 0 1px 0 rgba(0,212,255,0.1)",
          }}
        >
          {/* Decorative orb inside */}
          <div
            style={{
              position: "absolute",
              width: 350,
              height: 350,
              top: -100,
              right: -80,
              borderRadius: "50%",
              background: "rgba(0,102,255,0.12)",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-center">
            <div>
              <span className="eyebrow-badge mb-4 inline-flex">Newsletter</span>

              <h2
                className="font-display text-2xl font-bold md:text-4xl"
                style={{ color: "var(--foreground)" }}
              >
                Stay in the <span className="gradient-text-blue">Game</span>
              </h2>
              <p
                className="mt-3 text-sm leading-7"
                style={{ color: "var(--muted-foreground)" }}
              >
                Get early access to new drops, exclusive discounts, and premium
                gaming deals delivered straight to your inbox.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <div
                  className="flex flex-1 items-center rounded-full px-5 py-3"
                  style={{
                    border: "1px solid var(--card-border)",
                    background: "rgba(5, 8, 22, 0.6)",
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-sm focus:outline-none"
                    style={{
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <button
                  className="btn-glow inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white"
                  style={{ background: "var(--primary)" }}
                >
                  <FaPaperPlane />
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right card */}
            <div
              className="rounded-2xl border p-6 text-center"
              style={{
                borderColor: "var(--card-border)",
                background: "rgba(5,8,22,0.5)",
              }}
            >
              <p
                className="font-display text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                Exclusive Access
              </p>
              <p
                className="mt-3 font-display text-xl font-bold leading-tight"
                style={{ color: "var(--foreground)" }}
              >
                Deals, launches & inspiration.
              </p>
              <div
                className="mt-5 flex justify-center gap-1"
                style={{ color: "#fbbf24" }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <p
                className="mt-2 text-xs"
                style={{ color: "var(--muted-foreground)" }}
              >
                Joined by 50,000+ gamers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
