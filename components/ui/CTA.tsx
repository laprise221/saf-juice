"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function CTA() {
  return (
    <section id="commander" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-[var(--color-primary)] p-12 md:p-16 text-center"
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[var(--color-accent)]/20" />
          <div className="absolute top-1/2 right-0 w-24 h-24 rounded-full bg-white/5 animate-squeeze" />

          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white leading-tight">
              Envie d&apos;un jus frais ?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-md mx-auto">
              Commandez par t&eacute;l&eacute;phone ou Instagram, on vous livre partout &agrave; Dakar.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:+221${siteData.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[var(--color-primary)] font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {siteData.phone}
              </a>
              <a
                href={siteData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                {siteData.instagram}
              </a>
            </div>

            <p className="mt-6 text-white/60 text-sm">
              {siteData.events}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
