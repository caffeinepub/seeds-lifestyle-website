import { motion, useInView } from "motion/react";
import { useRef } from "react";

const galleryImages = [
  {
    src: "/assets/generated/gallery-barista.dim_600x800.jpg",
    alt: "Barista crafting a latte",
    className: "row-span-2",
  },
  {
    src: "/assets/generated/gallery-brunch.dim_600x400.jpg",
    alt: "Brunch spread",
    className: "",
  },
  {
    src: "/assets/generated/gallery-outdoor.dim_600x400.jpg",
    alt: "Outdoor seating",
    className: "",
  },
  {
    src: "/assets/generated/gallery-ingredients.dim_600x400.jpg",
    alt: "Fresh farm ingredients",
    className: "",
  },
  {
    src: "/assets/generated/gallery-exterior.dim_600x800.jpg",
    alt: "Café exterior",
    className: "row-span-2",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 md:py-32"
      style={{ backgroundColor: "#EADBC8" }}
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
            Visual Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-seeds-brown font-bold">
            Gallery
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-[280px]"
          data-ocid="gallery.list"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-ocid={`gallery.item.${i + 1}`}
              className={`gallery-tilt relative overflow-hidden rounded-2xl shadow-card cursor-pointer ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-seeds-brown/0 hover:bg-seeds-brown/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-seeds-brown/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
