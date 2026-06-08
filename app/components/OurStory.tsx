"use client";

import { useLang } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/translations";

export default function OurStory() {
  const { lang } = useLang();
  const tx = useTranslations(lang).ourStory;

  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 px-8 md:px-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center max-w-7xl mx-auto">

        {/* Text side — 40% */}
        <div className="flex-1 min-w-0">
          <p className="text-xs tracking-[0.25em] text-zinc-400 uppercase mb-6">
            {tx.eyebrow}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#2C2A29]">
            {tx.headline}
          </h2>
          <p className="text-sm text-zinc-500 font-light max-w-md mt-6 leading-relaxed">
            {tx.body1}
          </p>
          <p className="text-sm text-zinc-500 font-light max-w-md mt-4 leading-relaxed">
            {tx.body2}
          </p>
          <a
            href="#"
            className="inline-block mt-10 font-sans text-[9px] font-bold tracking-[0.38em] text-[#2C2A29] uppercase border-b border-[#2C2A29]/40 pb-0.5 hover:border-[#2C2A29] transition-colors"
          >
            {tx.cta}
          </a>
        </div>

        {/* Portrait — 60% */}
        <div className="w-full md:w-[55%] flex-shrink-0">
          <div className="relative aspect-[3/4] md:h-[80vh] w-full overflow-hidden bg-[#E8E2D9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cristiano-portrait.jpeg"
              alt="Cristiano Pioltelli — Founder & Head Designer"
              className="w-full h-full object-cover object-[65%_top]"
            />
          </div>
          <p className="mt-3 font-sans text-[8px] tracking-[0.3em] text-zinc-400 uppercase">
            {tx.caption}
          </p>
        </div>

      </div>
    </section>
  );
}
