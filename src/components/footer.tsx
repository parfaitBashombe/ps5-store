"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGamepad,
} from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: FaFacebook,
    label: "Facebook",
    color: "#1877f2",
  },
  {
    href: "https://instagram.com",
    icon: FaInstagram,
    label: "Instagram",
    color: "#e1306c",
  },
  {
    href: "https://twitter.com",
    icon: FaTwitter,
    label: "Twitter",
    color: "#1da1f2",
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
    label: "YouTube",
    color: "#ff0000",
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--card-border)",
        background:
          "linear-gradient(180deg, rgba(5,8,22,0) 0%, rgba(3,6,16,0.98) 100%)",
        position: "relative",
      }}
    >
      <div className="glow-divider" style={{ maxWidth: "80%", opacity: 0.5 }} />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-6 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <div
              className="flex items-center justify-center rounded-xl p-2"
              style={{ background: "rgba(0,102,255,0.15)" }}
            >
              <FaGamepad style={{ color: "var(--accent)", fontSize: 14 }} />
            </div>
            <span
              className="font-display text-xl font-bold tracking-wide"
              style={{ color: "var(--foreground)" }}
            >
              PS5{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--primary), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Store
              </span>
            </span>
          </Link>

          <p
            className="mt-5 max-w-xs text-sm leading-7"
            style={{ color: "var(--muted-foreground)" }}
          >
            Premium gaming gear and iconic PlayStation titles in one polished
            digital experience — built for those who play to win.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["50K+ Players", "1,200+ Items", "Worldwide"].map((pill) => (
              <span
                key={pill}
                className="rounded-full px-3 py-1 text-xs"
                style={{
                  border: "1px solid var(--card-border)",
                  color: "var(--muted-foreground)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4
            className="font-display text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--foreground)" }}
          >
            Quick Links
          </h4>

          <div
            className="mt-2 mb-5 h-px w-10"
            style={{
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />

          <div className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 text-sm transition-all duration-200 hover:translate-x-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                <span
                  className="h-px w-3 transition-all duration-200 group-hover:w-5"
                  style={{
                    background: "var(--accent)",
                    opacity: 0.6,
                  }}
                />
                <span className="group-hover:text-white transition-colors duration-200">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4
            className="font-display text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--foreground)" }}
          >
            Follow Us
          </h4>
          <div
            className="mt-2 mb-5 h-px w-10"
            style={{
              background: "linear-gradient(90deg, var(--primary), transparent)",
            }}
          />

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group flex items-center justify-center rounded-xl p-3 transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid var(--card-border)",
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--muted-foreground)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = color;
                  (e.currentTarget as HTMLElement).style.borderColor =
                    `${color}44`;
                  (e.currentTarget as HTMLElement).style.background =
                    `${color}12`;
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 0 20px ${color}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--muted-foreground)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--card-border)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <div
            className="mt-8 rounded-2xl p-5"
            style={{
              border: "1px solid var(--card-border)",
              background: "rgba(0,102,255,0.06)",
            }}
          >
            <p
              className="font-display text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Exclusive Deals
            </p>
            <p
              className="mt-1 text-xs leading-5"
              style={{ color: "var(--muted-foreground)" }}
            >
              Subscribe to get early access to new drops and discounts.
            </p>
            <Link
              href="#newsletter"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-colors hover:underline"
              style={{ color: "var(--primary)" }}
            >
              Subscribe now →
            </Link>
          </div>
        </div>
      </div>

      <div
        className="px-4 py-5 text-center text-xs"
        style={{
          borderTop: "1px solid var(--card-border)",
          color: "var(--muted)",
        }}
      >
        <span>
          © {new Date().getFullYear()} PS5 Store. All rights reserved.
        </span>
        <span className="mx-3" style={{ color: "var(--card-border)" }}>
          |
        </span>
        <span>Built for gamers, by gamers.</span>
      </div>
    </footer>
  );
};

export default Footer;
