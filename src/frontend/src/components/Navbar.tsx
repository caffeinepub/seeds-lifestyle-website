import { Leaf, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-seeds-cream/95 backdrop-blur-md shadow-md border-b border-seeds-beige"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <div
            className={`p-1.5 rounded-full transition-colors ${
              scrolled ? "bg-seeds-green/10" : "bg-white/15"
            }`}
          >
            <Leaf
              className={`w-5 h-5 ${
                scrolled ? "text-seeds-green" : "text-white"
              }`}
              strokeWidth={1.5}
            />
          </div>
          <div className="leading-none">
            <div
              className={`font-display text-xl font-bold tracking-wide ${
                scrolled ? "text-seeds-green" : "text-white"
              }`}
            >
              SEEDS
            </div>
            <div
              className={`text-[10px] uppercase tracking-[0.2em] font-light ${
                scrolled ? "text-seeds-brown/70" : "text-white/80"
              }`}
            >
              Lifestyle
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                scrolled ? "text-seeds-brown" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            data-ocid="nav.primary_button"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              scrolled
                ? "bg-seeds-green text-seeds-offwhite hover:bg-seeds-olive"
                : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
            }`}
          >
            Book a Table
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-seeds-brown" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-seeds-cream border-t border-seeds-beige overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={() => setMenuOpen(false)}
                  className="text-seeds-brown font-medium py-1 hover:text-seeds-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                data-ocid="nav.primary_button"
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full text-center px-5 py-2.5 rounded-full bg-seeds-green text-seeds-offwhite font-medium text-sm"
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
