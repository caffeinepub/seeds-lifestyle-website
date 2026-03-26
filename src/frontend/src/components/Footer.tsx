import { Leaf } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = `utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      style={{ backgroundColor: "#2F4A2E" }}
      className="text-seeds-offwhite"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-full bg-white/10">
                <Leaf
                  className="w-5 h-5 text-seeds-offwhite"
                  strokeWidth={1.5}
                />
              </div>
              <div className="leading-none">
                <div className="font-display font-bold text-xl tracking-wide">
                  SEEDS
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-light opacity-70">
                  Lifestyle
                </div>
              </div>
            </div>
            <p className="text-seeds-offwhite/55 text-sm leading-relaxed max-w-xs">
              A sanctuary of conscious cuisine, where every meal tells a story
              of the earth.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-seeds-offwhite/50 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-sm text-seeds-offwhite/70 hover:text-seeds-offwhite transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + address */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-seeds-offwhite/50 mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="w-4 h-4" />
              </a>
            </div>
            <p className="text-seeds-offwhite/55 text-sm">
              42 Green Lane, Botanical Quarter
              <br />
              Melbourne VIC 3000, Australia
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-seeds-offwhite/40">
          <span>&copy; {year} Seeds Lifestyle. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-seeds-offwhite/70 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
