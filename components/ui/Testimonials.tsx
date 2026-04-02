"use client";

import { motion } from "framer-motion";
import { avis } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest">
            T&eacute;moignages
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-2">
            Ils adorent
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {avis.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-[var(--color-bg)] border border-[var(--color-muted)]/30"
            >
              {/* Quote mark */}
              <div className="absolute -top-3 left-6 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-lg font-bold">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <svg
                    key={j}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="var(--color-accent)"
                    stroke="none"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-[var(--color-text)] leading-relaxed mb-4">
                {review.text}
              </p>

              <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--color-primary)]">
                &mdash; {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
