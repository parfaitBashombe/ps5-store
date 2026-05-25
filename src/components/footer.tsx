import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const footerLinks: Record<string, string[]> = {
  PlayStation: ["PS5 Console", "PS4 Console", "PlayStation VR2", "PlayStation Now"],
  Games: ["New Releases", "PS5 Exclusives", "Free to Play", "PS Plus Games"],
  Accessories: ["Controllers", "Headsets", "Charging Stations", "Cameras"],
  Support: ["Help Center", "Contact Us", "Repairs", "PS Network Status"],
};

const socials = [
  { label: "Twitter", icon: FaTwitter, href: "#" },
  { label: "Facebook", icon: FaFacebook, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="bg-[#003791] rounded-lg w-9 h-9 flex items-center justify-center">
              <span className="text-white font-black text-sm">PS</span>
            </div>
            <span className="text-white/70 text-sm font-medium">PlayStation Store</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon size={15} />
              </Link>
            ))}
          </div>

          <p className="text-white/30 text-xs text-center sm:text-right">
            &copy; {new Date().getFullYear()} PlayStation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
