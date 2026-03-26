import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Suspense, lazy } from "react";

const HeroCanvas = lazy(() => import("./three/HeroCanvas"));

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Restaurant interior photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/generated/restaurant-interior.dim_1200x800.jpg')`,
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-seeds-brown/55" />

      {/* 3D Canvas overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/70 text-xs uppercase tracking-[0.3em] mb-4 font-light"
        >
          Est. 2019 &bull; Organic Lifestyle Café
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-none mb-6 text-balance"
        >
          Nourish.
          <br />
          <span className="italic text-seeds-beige">Connect.</span>
          <br />
          Grow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 text-base md:text-lg max-w-md mb-10 leading-relaxed font-light"
        >
          A sanctuary of conscious cuisine, where every meal tells a story of
          the earth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            data-ocid="hero.primary_button"
            className="px-8 py-3.5 rounded-full bg-seeds-green text-seeds-offwhite font-medium text-sm tracking-wide hover:bg-seeds-olive transition-all duration-300 hover:scale-105"
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            data-ocid="hero.secondary_button"
            className="px-8 py-3.5 rounded-full border border-white/50 text-white font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-scroll-bounce" />
      </motion.div>
    </section>
  );
}
