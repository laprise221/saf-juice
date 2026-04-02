"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--color-primary)]/15 animate-blob-morph"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 -right-24 w-80 h-80 bg-[var(--color-accent)]/20 animate-blob-morph"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-72 h-72 bg-[var(--color-secondary)]/15 animate-blob-morph"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40"
        >
          <img
            src="/photos/logo.png"
            alt="Saf Juice logo"
            className="w-full h-full object-contain animate-float-up"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          <span className="text-[var(--color-text)]">Des fruits,</span>
          <br />
          <span className="text-[var(--color-primary)]">rien que</span>
          <br />
          <span className="text-[var(--color-text)]">des fruits.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-[var(--color-secondary)] max-w-lg mx-auto"
        >
          Jus 100% naturels, sans sucres ajout&eacute;s.
          <br />
          Press&eacute;s &agrave; froid, livr&eacute;s chez vous &agrave; Dakar.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#carte"
            className="group px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold text-lg hover:shadow-lg hover:shadow-[var(--color-primary)]/30 transition-all hover:scale-105"
          >
            Voir la carte
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
          <a
            href="#commander"
            className="px-8 py-4 rounded-full border-2 border-[var(--color-text)] text-[var(--color-text)] font-semibold text-lg hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all"
          >
            Commander
          </a>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)]/20 text-sm font-medium text-[var(--color-text)]"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse-soft" />
          Bouteilles de 330ml &bull; Livraison uniquement
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[var(--color-text)]/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
