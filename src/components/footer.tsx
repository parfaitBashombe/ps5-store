import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaDiscord, FaTruck, FaLock, FaUndo, FaPhoneAlt } from "react-icons/fa";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  PlayStation: [
    { label: "PS5 Console", href: "#" },
    { label: "PS5 Digital Edition", href: "#" },
    { label: "PlayStation VR2", href: "#" },
    { label: "PS Plus", href: "#" },
  ],
  Games: [
    { label: "New Releases", href: "#" },
    { label: "PS5 Exclusives", href: "#" },
    { label: "Free to Play", href: "#" },
    { label: "Coming Soon", href: "#" },
  ],
  Accessories: [
    { label: "Controllers", href: "#" },
    { label: "Headsets", href: "#" },
    { label: "Charging Stations", href: "#" },
    { label: "Console Covers", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Repairs", href: "#" },
    { label: "Network Status", href: "#" },
  ],
};

const socials = [
  { label: "Twitter", icon: FaTwitter, href: "#" },
  { label: "Facebook", icon: FaFacebook, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "YouTube", icon: FaYoutube, href: "#" },
  { label: "Discord", icon: FaDiscord, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#060a14] border-t border-white/5">

      {/* Top strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-white/25 text-sm">
            <FaTruck size={13} />
            Free delivery on all console orders over $299
          </p>
          <div className="flex items-center gap-6 text-white/25 text-sm">
            <span className="flex items-center gap-1.5"><FaLock size={11} /> Secure checkout</span>
            <span className="flex items-center gap-1.5"><FaUndo size={11} /> 30-day returns</span>
            <span className="flex items-center gap-1.5"><FaPhoneAlt size={11} /> 24/7 support</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 pb-14 border-b border-white/5">

          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003791] to-[#0ea5e9] flex items-center justify-center shadow-lg shadow-[#003791]/40">
                <span className="text-white font-black text-sm tracking-tight">PS5</span>
              </div>
              <span className="text-white font-bold text-[15px] tracking-tight">
                PlayStation<span className="text-[#0ea5e9]"> Store</span>
              </span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-xs">
              Experience the next generation of gaming. Play. Share. Create. The future is PlayStation.
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map(({ label, icon: Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#003791]/40 border border-white/5 hover:border-[#003791]/40 flex items-center justify-center text-white/40 hover:text-white transition-all"
                >
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-[11px] font-black text-white/25 uppercase tracking-[0.2em] mb-5">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sony Interactive Entertainment LLC. PlayStation and the PS logo are registered trademarks of Sony Interactive Entertainment Inc.
          </p>
          <div className="flex items-center gap-5 text-white/20 text-xs">
            <Link href="#" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white/50 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
