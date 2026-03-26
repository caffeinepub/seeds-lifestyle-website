import { Heart, Leaf, Sprout } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Suspense, lazy, useRef } from "react";

const AboutCanvas = lazy(() => import("./three/AboutCanvas"));

const values = [
  { icon: Leaf, label: "100% Organic", desc: "Sourced from local farms" },
  { icon: Sprout, label: "Seasonal Menu", desc: "Fresh ingredients daily" },
  { icon: Heart, label: "Community First", desc: "Supporting local growers" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#F3EBDD" }}
    >
      {/* Blob decorations */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 blob-shape opacity-50"
        style={{ backgroundColor: "#E7D6BF" }}
      />
      <div
        className="absolute -bottom-16 right-0 w-80 h-80 blob-shape-2 opacity-40"
        style={{ backgroundColor: "#EADBC8" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]">
              <img
                src="/assets/generated/restaurant-interior.dim_1200x800.jpg"
                alt="Seeds Lifestyle interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-seeds-brown/30 to-transparent" />
            </div>
            {/* Floating 3D accent */}
            <div className="absolute -bottom-12 -right-12 w-36 h-36 hidden lg:block">
              <Suspense fallback={null}>
                <AboutCanvas />
              </Suspense>
            </div>
            {/* Badge */}
            <div className="absolute -top-4 -left-4 bg-seeds-green text-seeds-offwhite rounded-2xl px-4 py-3 shadow-card">
              <div className="font-display text-2xl font-bold">5+</div>
              <div className="text-xs opacity-80">
                Years of Conscious Cuisine
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-seeds-olive font-medium mb-3">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-seeds-brown font-bold leading-tight mb-6">
              Crafting
              <br />
              <em className="text-seeds-green">Conscious</em> Cuisine
            </h2>
            <p className="text-seeds-brown/75 leading-relaxed mb-4">
              Born from a deep love of the land and its rhythms, Seeds Lifestyle
              is more than a café — it's a gathering place for those who believe
              that what we eat shapes who we are. Every dish we create
              celebrates the farmers, growers, and communities that make our
              region abundant.
            </p>
            <p className="text-seeds-brown/75 leading-relaxed mb-8">
              We partner with over 20 local organic farms to bring the freshest
              seasonal produce to your plate. Our kitchen philosophy is simple:
              handle each ingredient with respect, let its natural beauty shine,
              and cook with intention and joy.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {values.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-seeds-green/10 flex items-center justify-center mx-auto mb-2">
                    <Icon
                      className="w-5 h-5 text-seeds-green"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-sm font-semibold text-seeds-brown">
                    {label}
                  </div>
                  <div className="text-xs text-seeds-brown/60 mt-0.5">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
