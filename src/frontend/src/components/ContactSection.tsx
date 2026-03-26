import { CheckCircle, Send } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Suspense, lazy, useRef, useState } from "react";
import { useActor } from "../hooks/useActor";

const ContactCanvas = lazy(() => import("./three/ContactCanvas"));

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { actor } = useActor();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      if (actor) {
        await actor.submitContactForm(form.name, form.email, form.message);
      }
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (_err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#2F4A2E" }}
    >
      {/* 3D canvas background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Suspense fallback={null}>
          <ContactCanvas />
        </Suspense>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-seeds-beige/70 font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-seeds-offwhite font-bold">
            Contact Us
          </h2>
          <p className="mt-4 text-seeds-offwhite/60 text-sm leading-relaxed">
            Have a question, want to book a table, or just want to say hello?
            We’d love to hear from you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {success ? (
            <div
              className="text-center py-16 px-8 rounded-3xl"
              style={{
                backgroundColor: "rgba(78,107,58,0.2)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              data-ocid="contact.success_state"
            >
              <CheckCircle
                className="w-16 h-16 text-seeds-beige mx-auto mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl text-seeds-offwhite font-semibold mb-2">
                Message Sent!
              </h3>
              <p className="text-seeds-offwhite/70 text-sm">
                We’ll get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-6 px-6 py-2.5 rounded-full border border-white/30 text-white/70 text-sm hover:bg-white/10 transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
              data-ocid="contact.modal"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-widest text-seeds-offwhite/60 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Jane Smith"
                  data-ocid="contact.input"
                  className="w-full px-4 py-3 rounded-xl text-seeds-offwhite placeholder-seeds-offwhite/30 text-sm outline-none transition-colors focus:ring-2 focus:ring-white/20"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs uppercase tracking-widest text-seeds-offwhite/60 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="jane@example.com"
                  data-ocid="contact.input"
                  className="w-full px-4 py-3 rounded-xl text-seeds-offwhite placeholder-seeds-offwhite/30 text-sm outline-none transition-colors focus:ring-2 focus:ring-white/20"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-widest text-seeds-offwhite/60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell us what’s on your mind..."
                  data-ocid="contact.textarea"
                  className="w-full px-4 py-3 rounded-xl text-seeds-offwhite placeholder-seeds-offwhite/30 text-sm outline-none resize-none transition-colors focus:ring-2 focus:ring-white/20"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                />
              </div>

              {error && (
                <p
                  className="text-red-400 text-xs"
                  data-ocid="contact.error_state"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                data-ocid="contact.submit_button"
                className="w-full py-3.5 rounded-full bg-seeds-beige text-seeds-brown font-medium text-sm tracking-wide hover:bg-seeds-offwhite transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-seeds-brown/30 border-t-seeds-brown rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
