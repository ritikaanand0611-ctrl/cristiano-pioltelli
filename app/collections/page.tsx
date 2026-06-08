import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { collections } from "@/app/data/products";

// Images mapped to collection IDs
const COLLECTION_IMAGES: Record<string, string> = {
  col1: "/images_hero/look-04-earthen-layers.png",
  col2: "/images_hero/look-05-saffron-tapestry.jpg",
  col3: "/images_hero/look-02-emerald-voyage.png",
  col4: "/images_hero/look-01-nomadic-rose.png",
};

export default function CollectionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0EBE1]">
      <Header />

      <main className="flex-1 px-10 py-14">
        {/* Page title */}
        <div className="mb-14">
          <p className="font-sans text-[9px] tracking-[0.44em] text-[#2C2A29]/35 uppercase mb-3">
            Spring / Summer 2025
          </p>
          <h1 className="font-serif text-5xl text-[#2C2A29] tracking-tight">Collections</h1>
        </div>

        {/* Hero collection — full width */}
        <div className="relative w-full h-[52vh] mb-6 overflow-hidden group cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={COLLECTION_IMAGES[collections[0].id]}
            alt={collections[0].title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/50 to-transparent" />

          <div className="absolute bottom-10 left-10 relative z-10">
            <p className="font-sans text-[9px] tracking-[0.4em] text-white/60 uppercase mb-2">
              {collections[0].subtitle}
            </p>
            <h2 className="font-serif text-4xl text-white mb-3">{collections[0].title}</h2>
            <p className="font-sans text-[11px] text-white/70 max-w-[38ch] leading-relaxed mb-5">
              {collections[0].description}
            </p>
            <button className="font-sans text-[9px] tracking-[0.36em] uppercase border border-white/60 text-white px-6 py-3 hover:bg-white hover:text-[#2C2A29] transition-all duration-300">
              Shop Now — {collections[0].itemCount} Pieces
            </button>
          </div>
        </div>

        {/* Remaining 3 collections — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {collections.slice(1).map((col) => (
            <div
              key={col.id}
              className="relative h-[60vh] overflow-hidden group cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={COLLECTION_IMAGES[col.id]}
                alt={col.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/50 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 relative z-10">
                <p className="font-sans text-[8.5px] tracking-[0.38em] text-white/55 uppercase mb-1.5">
                  {col.subtitle}
                </p>
                <h3 className="font-serif text-2xl text-white mb-2">{col.title}</h3>
                <p className="font-sans text-[10.5px] text-white/65 leading-relaxed mb-4 line-clamp-2">
                  {col.description}
                </p>
                <span className="font-sans text-[8.5px] tracking-[0.32em] uppercase text-white/80 underline underline-offset-4 decoration-white/30 group-hover:decoration-white/70 transition-colors">
                  Explore — {col.itemCount} Pieces
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial banner */}
        <div className="border border-[#DDD5C8] py-16 text-center">
          <p className="font-sans text-[9px] tracking-[0.44em] text-[#2C2A29]/35 uppercase mb-4">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl text-[#2C2A29] mb-4">The Cristiano Pioltelli World</h2>
          <p className="font-sans text-sm text-[#2C2A29]/55 max-w-[50ch] mx-auto leading-relaxed mb-8">
            Each collection is conceived as a distinct world — a mood, a material, a way of moving through space.
          </p>
          <button className="font-sans text-[9px] tracking-[0.36em] uppercase border border-[#2C2A29]/40 text-[#2C2A29] px-8 py-3.5 hover:bg-[#2C2A29] hover:text-[#F0EBE1] transition-all duration-300">
            View All Collections
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
