import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const hours = [
  { day: "Mon – Fri", time: "7:00am – 5:00pm" },
  { day: "Saturday", time: "8:00am – 6:00pm" },
  { day: "Sunday", time: "9:00am – 4:00pm" },
];

export default function LocationSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="location"
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
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-seeds-brown font-bold">
            Location &amp; Hours
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-card aspect-[4/3] relative"
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, #2F4A2E 0%, #4E6B3A 30%, #6B8F5B 60%, #C4A882 100%)",
              }}
            />
            {/* Map pin overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 border border-white/30">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-display text-xl font-semibold">
                  Seeds Lifestyle
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Botanical Quarter, Melbourne
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/30 hover:bg-white/30 transition-colors"
              >
                Open in Maps
              </a>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <div
              className="flex gap-4 p-5 rounded-2xl"
              style={{ backgroundColor: "#E7D6BF" }}
            >
              <div className="w-10 h-10 rounded-xl bg-seeds-green/15 flex items-center justify-center shrink-0">
                <MapPin
                  className="w-5 h-5 text-seeds-green"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-seeds-olive mb-1">
                  Address
                </div>
                <p className="text-seeds-brown font-medium">
                  42 Green Lane, Botanical Quarter
                </p>
                <p className="text-seeds-brown/70 text-sm">
                  Melbourne VIC 3000, Australia
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex gap-4 p-5 rounded-2xl"
              style={{ backgroundColor: "#E7D6BF" }}
            >
              <div className="w-10 h-10 rounded-xl bg-seeds-green/15 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-seeds-green" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-seeds-olive mb-1">
                  Phone
                </div>
                <a
                  href="tel:+61398765432"
                  className="text-seeds-brown font-medium hover:text-seeds-green transition-colors"
                >
                  +61 3 9876 5432
                </a>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex gap-4 p-5 rounded-2xl"
              style={{ backgroundColor: "#E7D6BF" }}
            >
              <div className="w-10 h-10 rounded-xl bg-seeds-green/15 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-seeds-green" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-seeds-olive mb-1">
                  Email
                </div>
                <a
                  href="mailto:hello@seedslifestyle.com.au"
                  className="text-seeds-brown font-medium hover:text-seeds-green transition-colors"
                >
                  hello@seedslifestyle.com.au
                </a>
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-5 rounded-2xl"
              style={{ backgroundColor: "#E7D6BF" }}
            >
              <div className="flex gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-seeds-green/15 flex items-center justify-center shrink-0">
                  <Clock
                    className="w-5 h-5 text-seeds-green"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="text-xs uppercase tracking-widest text-seeds-olive mt-3">
                  Opening Hours
                </div>
              </div>
              <div className="flex flex-col gap-2 ml-14">
                {hours.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-1.5 border-b border-seeds-brown/10 last:border-0"
                  >
                    <span className="text-sm text-seeds-brown/70">{day}</span>
                    <span className="text-sm font-medium text-seeds-brown">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
