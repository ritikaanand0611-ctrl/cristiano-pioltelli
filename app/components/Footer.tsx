"use client";

import { useLang } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/translations";

export default function Footer() {
  const { lang } = useLang();
  const tx = useTranslations(lang).footer;

  return (
    <footer className="bg-[#141414] text-white py-20 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Top row: brand + columns */}
        <div className="flex flex-col md:flex-row gap-14 md:gap-0 justify-between border-t border-white/10 pt-12">

          {/* Brand */}
          <div className="md:w-1/4 flex-shrink-0">
            <p className="font-serif text-[1.4rem] tracking-wide text-white mb-4">
              Cristiano Pioltelli
            </p>
            <p className="font-sans text-[0.78rem] leading-relaxed text-white/35 max-w-[28ch]">
              {tx.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            {tx.columns.map((col) => (
              <div key={col.heading}>
                <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#C2A373] uppercase mb-5">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-sans text-[12px] text-white/45 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-sans text-[9px] tracking-[0.28em] text-white/20 uppercase">
            {tx.copyright}
          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="font-sans text-[9px] tracking-[0.22em] text-white/20 uppercase hover:text-white/60 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
