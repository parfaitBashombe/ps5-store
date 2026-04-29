import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08101f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6 lg:px-8">
        <div>
          <h3 className="text-2xl font-black text-white">
            PS5 <span className="text-blue-400">Store</span>
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Premium gaming gear and iconic PlayStation titles in one polished
            digital experience.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-blue-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PS5 Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
