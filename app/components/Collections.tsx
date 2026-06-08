"use client";

import { useLang } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/translations";

const TILE_HREFS = [
  "/clothing?category=Outerwear",
  "/clothing?category=Knitwear",
  "/accessories",
];

const TILE_IMAGES = [
  "/images_hero/look-06-pastoral-edge.png",
  "/images_hero/look-04-earthen-layers.png",
  "/images_hero/look-01-nomadic-rose.png",
];

export default function Collections() {
  const { lang } = useLang();
  const tx = useTranslations(lang).collections;

  return (
    <section className="bg-[#F5F2EE] py-24 md:py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#C2A373] uppercase mb-3">
            {tx.eyebrow}
          </p>
          <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-[#2C2A29]">
            {tx.heading}
          </h2>
        </div>

        {/* Bento grid — asymmetric */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-5 md:h-[680px]">

          {/* Large feature tile — spans 3 cols × 2 rows */}
          <CollectionTile
            label={tx.tiles[0].label}
            caption={tx.tiles[0].caption}
            image={TILE_IMAGES[0]}
            href={TILE_HREFS[0]}
            className="md:col-span-3 md:row-span-2"
          />

          {/* Two smaller tiles */}
          <CollectionTile
            label={tx.tiles[1].label}
            caption={tx.tiles[1].caption}
            image={TILE_IMAGES[1]}
            href={TILE_HREFS[1]}
            className="md:col-span-2 md:row-span-1"
          />
          <CollectionTile
            label={tx.tiles[2].label}
            caption={tx.tiles[2].caption}
            image={TILE_IMAGES[2]}
            href={TILE_HREFS[2]}
            className="md:col-span-2 md:row-span-1"
          />

        </div>
      </div>
    </section>
  );
}

function CollectionTile({
  label,
  caption,
  image,
  href,
  className,
}: {
  label: string;
  caption: string;
  image: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={[
        "relative overflow-hidden bg-[#E8E2D9] group cursor-pointer block",
        "h-[60vw] md:h-auto",
        className,
      ].join(" ")}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      {/* Text */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <p className="font-sans text-[9px] font-bold tracking-[0.38em] text-white/70 uppercase mb-1.5">
          {caption}
        </p>
        <h3 className="font-serif text-[1.6rem] md:text-[2rem] text-white leading-none">
          {label}
        </h3>
      </div>
    </a>
  );
}
