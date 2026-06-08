"use client";

import { useLang } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/translations";

const TILES = [
  {
    href: "/clothing?category=Outerwear",
    bg: "#DDD8D0",
    images: [
      "/clothes/Gathered-Cerulean-Duster.png",
      "/clothes/Velvet-Ikat-Statement-Coat.png",
      "/clothes/Structured-Peach-Zip-Jacket.png",
    ],
    large: true,
  },
  {
    href: "/clothing?category=Knitwear",
    bg: "#F0EBE1",
    images: ["/clothes/Ribbed-Cream-Cardigan.png"],
    large: false,
  },
  {
    href: "/accessories",
    bg: "#E4DDD4",
    images: [
      "/clothes/Artisanal-Beaded-Necklace.png",
      "/clothes/Minimalist-Black-Leather-Boot.png",
    ],
    large: false,
  },
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
            tile={TILES[0]}
            label={tx.tiles[0].label}
            caption={tx.tiles[0].caption}
            className="md:col-span-3 md:row-span-2"
          />

          {/* Two smaller tiles */}
          <CollectionTile
            tile={TILES[1]}
            label={tx.tiles[1].label}
            caption={tx.tiles[1].caption}
            className="md:col-span-2 md:row-span-1"
          />
          <CollectionTile
            tile={TILES[2]}
            label={tx.tiles[2].label}
            caption={tx.tiles[2].caption}
            className="md:col-span-2 md:row-span-1"
          />

        </div>
      </div>
    </section>
  );
}

function CollectionTile({
  tile,
  label,
  caption,
  className,
}: {
  tile: typeof TILES[number];
  label: string;
  caption: string;
  className?: string;
}) {
  return (
    <a
      href={tile.href}
      style={{ backgroundColor: tile.bg }}
      className={[
        "relative overflow-hidden group cursor-pointer block",
        "h-[60vw] md:h-auto",
        className,
      ].join(" ")}
    >
      {/* Clothing images — displayed side-by-side, blend into bg */}
      <div className="absolute inset-0 flex items-end justify-center gap-0">
        {tile.images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={label}
            className="h-[88%] w-0 flex-1 object-contain object-bottom mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          />
        ))}
      </div>

      {/* Subtle vignette at bottom for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${tile.bg}CC 0%, ${tile.bg}55 28%, transparent 60%)`,
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <p className="font-sans text-[9px] font-bold tracking-[0.38em] text-[#2C2A29]/50 uppercase mb-1.5">
          {caption}
        </p>
        <h3 className="font-serif text-[1.6rem] md:text-[2rem] text-[#2C2A29] leading-none">
          {label}
        </h3>
      </div>
    </a>
  );
}
