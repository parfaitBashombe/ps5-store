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
} from "react-icons/fa";
import HeroSection from "@/components/hero-section";
import SectionTitle from "@/components/section-title";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/data/product";

const Page = () => {
  const featured = products.slice(0, 4);

  const features = [
    {
      icon: FaShippingFast,
      title: "Fast Delivery",
      description: "Quick and reliable shipping for your favorite gaming gear.",
    },
    {
      icon: FaShieldAlt,
      title: "Authentic Products",
      description: "Only genuine PlayStation-compatible products and titles.",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Dedicated support whenever you need help with your order.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Carter",
      role: "Pro Gamer",
      review:
        "Best gaming store experience I've seen. Smooth interface, premium products, and fast checkout.",
    },
    {
      name: "Sophia Kim",
      role: "Streamer",
      review:
        "Love the design and product collection. It actually feels like a PlayStation premium experience.",
    },
    {
      name: "James Brown",
      role: "Collector",
      review:
        "Authentic products, excellent support, and super clean user experience.",
    },
  ];

  const steps = [
    {
      icon: FaShoppingBag,
      title: "Browse Products",
      description:
        "Explore consoles, accessories, games, and premium gaming gear.",
    },
    {
      icon: FaTruck,
      title: "Place Order",
      description:
        "Add items to cart and complete checkout in just a few clicks.",
    },
    {
      icon: FaCheckCircle,
      title: "Enjoy Gaming",
      description:
        "Receive your products quickly and start your next gaming adventure.",
    },
  ];

  const faqs = [
    {
      question: "Do you sell authentic PlayStation products?",
      answer:
        "Yes, all products listed in our store are authentic and quality checked.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Orders are processed quickly with fast and reliable delivery options.",
    },
    {
      question: "Can I get support anytime?",
      answer: "Absolutely. Our support team is available 24/7 to assist you.",
    },
  ];

  return (
    <>
      <HeroSection
        badge="Premium PlayStation Store"
        icon={<FaGamepad className="text-primary" />}
        title="Level Up Your Gaming Experience"
        subtitle="Discover a premium PS5-inspired store with the best console gear, accessories, and must-play titles designed to elevate every session."
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
        imageAlt="Gaming setup with neon lights"
      />

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Featured"
          title="Top Gaming Picks"
          description="Handpicked products that bring power, comfort, and immersion together."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="featured"
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Built for Gamers Who Want More"
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-4xl border border-card-border bg-card p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-1"
              >
                <div className="inline-flex rounded-2xl bg-primary/10 p-4 text-2xl text-primary">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Simple Process"
          title="How It Works"
          description="Shopping for your next gaming setup has never been easier."
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-4xl border border-card-border bg-card p-6 text-center backdrop-blur-xl"
              >
                <div className="mx-auto inline-flex rounded-full bg-primary/10 p-5 text-3xl text-primary">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "500+", label: "Products Sold" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-4xl border border-card-border bg-card p-6 text-center backdrop-blur-xl"
            >
              <h3 className="text-3xl font-black text-primary">{stat.value}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Gamers Say About Us"
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-4xl border border-card-border bg-card p-6 backdrop-blur-xl"
            >
              <FaQuoteLeft className="text-3xl text-primary" />
              <p className="mt-4 leading-7 text-muted-foreground">
                {testimonial.review}
              </p>

              <div className="mt-5 flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div className="mt-5">
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          centered
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-card-border bg-card p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <FaQuestionCircle className="text-primary" />
                <h3 className="font-semibold text-white">{faq.question}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <div className="rounded-4xl border border-card-border bg-linear-to-r from-primary/15 via-card to-primary/10 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <SectionTitle
                eyebrow="Newsletter"
                title="Stay Updated With New Drops"
                description="Get updates on special offers, new accessories, and fresh game releases."
              />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-1 items-center rounded-full border border-card-border bg-background/70 px-5 py-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
                  />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-hover">
                  <FaPaperPlane />
                  Subscribe
                </button>
              </div>
            </div>

            <div className="rounded-4xl border border-card-border bg-background/70 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Exclusive Access
              </p>
              <p className="mt-3 text-2xl font-bold text-white">
                Deals, launches, and gaming inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
