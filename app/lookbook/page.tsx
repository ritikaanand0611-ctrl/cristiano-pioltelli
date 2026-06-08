"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { LOOKBOOK_DATA, LookbookItem } from "@/app/data/lookbook-data";

const rowSpan: Record<string, string> = {
  tall:   "row-span-2",
  wide:   "row-span-1",
  square: "row-span-1",
};

export default function LookbookPage() {
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#F0EBE1]">
      <Header />

      <main className="flex-1 px-10 py-14">
        {/* Page title */}
        <div className="mb-14">
          <p className="font-sans text-[9px] tracking-[0.44em] text-[#2C2A29]/35 uppercase mb-3">
            Editorial
          </p>
          <h1 className="font-serif text-5xl text-[#2C2A29] tracking-tight">Lookbook</h1>
        </div>

        {/* Masonry grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          style={{ gridAutoRows: "280px" }}
        >
          {LOOKBOOK_DATA.map((look) => (
            <div
              key={look.id}
              className={[
                "relative overflow-hidden group cursor-pointer",
                rowSpan[look.size],
              ].join(" ")}
              onClick={() => setSelectedLook(look)}
            >
              {/* Model image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={look.imagePath}
                alt={look.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />

              {/* Dark gradient overlay behind text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Hover tint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Text overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
                <p className="font-sans text-[8.5px] tracking-[0.38em] text-white/60 uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {look.season}
                </p>
                <p className="font-sans text-[9px] tracking-[0.3em] text-white/70 uppercase mb-0.5">
                  {look.label}
                </p>
                <h3 className="font-serif text-xl text-white">{look.title}</h3>
              </div>

              {/* Look number badge */}
              <div className="absolute top-4 right-4 z-10 font-sans text-[9px] tracking-[0.3em] text-white/50 tabular-nums">
                {look.num}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-[#DDD5C8] pt-12 text-center">
          <p className="font-sans text-[9px] tracking-[0.44em] text-[#2C2A29]/35 uppercase mb-3">
            Spring / Summer 2025
          </p>
          <h2 className="font-serif text-3xl text-[#2C2A29] mb-5">The Full Story</h2>
          <button className="font-sans text-[9px] tracking-[0.36em] uppercase border border-[#2C2A29]/40 text-[#2C2A29] px-8 py-3.5 hover:bg-[#2C2A29] hover:text-[#F0EBE1] transition-all duration-300">
            Download Lookbook PDF
          </button>
        </div>
      </main>

      <Footer />

      {/* ── Lightbox modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedLook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#F0EBE1] flex flex-col items-center justify-center p-6 md:p-12"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedLook(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-2xl font-light text-[#2C2A29] hover:opacity-50 transition-opacity"
            >
              ✕
            </button>

            {/* Full image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="h-[75vh] w-full flex items-center justify-center"
            >
              <div
                role="img"
                aria-label={selectedLook.title}
                className="h-full w-full max-w-lg"
                style={{
                  backgroundImage:     `url(${selectedLook.imagePath})`,
                  backgroundColor:     "#F0EBE1",
                  backgroundBlendMode: "multiply",
                  backgroundSize:      "contain",
                  backgroundRepeat:    "no-repeat",
                  backgroundPosition:  "center",
                }}
              />
            </motion.div>

            {/* Look details footer */}
            <div className="mt-6 text-center">
              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-1">
                Look {selectedLook.id.replace("look-", "")}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-[#2C2A29]">
                {selectedLook.title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
