"use client";

import { motion } from "framer-motion";
import { menuJus, menuShots } from "@/lib/data";

export default function MenuSection() {
  return (
    <section id="carte" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest">
            La Carte
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mt-2">
            Nos Jus
          </h2>
          <p className="mt-4 text-[var(--color-secondary)] text-lg max-w-md mx-auto">
            Tous nos jus sont sans sucres ajout&eacute;s, en bouteilles de 330ml
          </p>
        </motion.div>

        {/* Jus grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
          {menuJus.map((jus, i) => (
            <motion.div
              key={jus.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              className="group flex items-baseline gap-3 py-4 border-b border-[var(--color-muted)]/40"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {jus.name}
                  </h3>
                  <div className="flex-1 border-b border-dotted border-[var(--color-muted)]/60 translate-y-[-4px]" />
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-primary)] whitespace-nowrap">
                    {jus.price} F
                  </span>
                </div>
                <p className="text-sm text-[var(--color-secondary)] mt-0.5">
                  {jus.ingredients}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[var(--color-primary)]/20" />
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary)]">
              Shots Bien-&ecirc;tre
            </h3>
            <div className="h-px flex-1 bg-[var(--color-primary)]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuShots.map((shot, i) => (
              <motion.div
                key={shot.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl border-2 border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5 hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-[var(--color-accent)] text-xs font-bold text-[var(--color-text)]">
                  SHOT
                </div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-xl">
                  {shot.name}
                </h4>
                <p className="text-sm text-[var(--color-secondary)] mt-1">
                  {shot.ingredients}
                </p>
                <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-primary)] text-lg mt-3">
                  {shot.price} Fcfa
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
