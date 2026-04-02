"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Carte", href: "#carte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar visible before scroll */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
        <a
          href="#accueil"
          className="font-[family-name:var(--font-heading)] font-bold text-xl text-[var(--color-text)]"
        >
          Saf Juice
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Floating pill nav */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border border-[var(--color-muted)]/30"
          >
            <a
              href="#accueil"
              className="px-4 py-2 rounded-full font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--color-primary)]"
            >
              Saf Juice
            </a>
            <div className="w-px h-5 bg-[var(--color-muted)]" />
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#commander"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-colors"
            >
              Commander
            </a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#commander"
              onClick={() => setMenuOpen(false)}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold text-lg"
            >
              Commander
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
