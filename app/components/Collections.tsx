const COLLECTIONS = [
  {
    id: "c1",
    label: "Outerwear",
    caption: "Layered with intention",
    image: "/images_hero/look-06-pastoral-edge.png",
    large: true,
    href: "/clothing?category=Outerwear",
  },
  {
    id: "c2",
    label: "Knitwear",
    caption: "Warmth, redefined",
    image: "/images_hero/look-04-earthen-layers.png",
    large: false,
    href: "/clothing?category=Knitwear",
  },
  {
    id: "c3",
    label: "Accessories",
    caption: "The finishing note",
    image: "/images_hero/look-01-nomadic-rose.png",
    large: false,
    href: "/accessories",
  },
];

export default function Collections() {
  return (
    <section className="bg-[#F5F2EE] py-24 md:py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-12">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#C2A373] uppercase mb-3">
            Collections
          </p>
          <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-[#2C2A29]">
            Shop by Category
          </h2>
        </div>

        {/* Bento grid — asymmetric */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-5 md:h-[680px]">

          {/* Large feature tile — spans 3 cols × 2 rows */}
          <CollectionTile item={COLLECTIONS[0]} className="md:col-span-3 md:row-span-2" />

          {/* Two smaller tiles — each 2 cols × 1 row */}
          <CollectionTile item={COLLECTIONS[1]} className="md:col-span-2 md:row-span-1" />
          <CollectionTile item={COLLECTIONS[2]} className="md:col-span-2 md:row-span-1" />

        </div>
      </div>
    </section>
  );
}

function CollectionTile({ item, className }: { item: typeof COLLECTIONS[number]; className?: string }) {
  return (
    <a
      href={item.href}
      className={[
        "relative overflow-hidden bg-[#E8E2D9] group cursor-pointer block",
        "h-[60vw] md:h-auto",
        className,
      ].join(" ")}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      {/* Text */}
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <p className="font-sans text-[9px] font-bold tracking-[0.38em] text-white/70 uppercase mb-1.5">
          {item.caption}
        </p>
        <h3 className="font-serif text-[1.6rem] md:text-[2rem] text-white leading-none">
          {item.label}
        </h3>
      </div>
    </a>
  );
}
