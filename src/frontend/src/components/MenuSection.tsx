import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const menuItems = [
  {
    name: "Avocado Toast",
    price: "$18",
    description:
      "Sourdough toast topped with seasonal avocado, poached egg, and microgreens",
    image: "/assets/generated/menu-avocado-toast.dim_600x400.jpg",
    tag: "Breakfast",
  },
  {
    name: "Matcha Latte",
    price: "$8",
    description:
      "Ceremonial grade matcha with house-made oat milk and a touch of honey",
    image: "/assets/generated/menu-matcha-latte.dim_600x400.jpg",
    tag: "Drinks",
  },
  {
    name: "Harvest Bowl",
    price: "$22",
    description:
      "Roasted seasonal vegetables, quinoa, tahini drizzle, and pickled cucumber",
    image: "/assets/generated/menu-harvest-bowl.dim_600x400.jpg",
    tag: "Mains",
  },
];

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="menu"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#F3EBDD" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-seeds-olive font-medium mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-seeds-brown font-bold">
            Menu Highlights
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-ocid="menu.list"
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              data-ocid={`menu.item.${i + 1}`}
              className="card-3d rounded-3xl overflow-hidden shadow-card cursor-pointer group"
              style={{ backgroundColor: "#EDE4D3" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-seeds-green/90 text-seeds-offwhite text-xs font-medium">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-semibold text-seeds-brown">
                    {item.name}
                  </h3>
                  <span className="font-display text-xl font-bold text-seeds-green ml-2 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-seeds-brown/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            data-ocid="menu.primary_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-seeds-green text-seeds-offwhite font-medium text-sm tracking-wide hover:bg-seeds-olive transition-all duration-300 hover:gap-3"
          >
            View Full Menu
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
