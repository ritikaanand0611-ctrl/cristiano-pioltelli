export default function OurStory() {
  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 px-8 md:px-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center max-w-7xl mx-auto">

        {/* Text side — 40% */}
        <div className="flex-1 min-w-0">
          <p className="text-xs tracking-[0.25em] text-zinc-400 uppercase mb-6">
            The Founder
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#2C2A29]">
            Cristiano Pioltelli: Redefining modern Italian tailoring.
          </h2>
          <p className="text-sm text-zinc-500 font-light max-w-md mt-6 leading-relaxed">
            Founded on a singular vision, Cristiano Pioltelli bridges the gap between
            traditional craftsmanship and contemporary, pastoral silhouettes. Every piece
            is a testament to the quiet luxury of mindful design and uncompromising quality.
          </p>
          <p className="text-sm text-zinc-500 font-light max-w-md mt-4 leading-relaxed">
            Based in Pavia, Italy, the atelier draws from the region&apos;s rich textile
            heritage — slow fashion rooted in place, season, and intention.
          </p>
          <a
            href="#"
            className="inline-block mt-10 font-sans text-[9px] font-bold tracking-[0.38em] text-[#2C2A29] uppercase border-b border-[#2C2A29]/40 pb-0.5 hover:border-[#2C2A29] transition-colors"
          >
            Discover the Atelier
          </a>
        </div>

        {/* Portrait — 60% */}
        <div className="w-full md:w-[55%] flex-shrink-0">
          <div className="relative aspect-[3/4] md:h-[80vh] w-full overflow-hidden bg-[#E8E2D9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cristiano-portrait.jpeg"
              alt="Cristiano Pioltelli — Founder & Head Designer"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="mt-3 font-sans text-[8px] tracking-[0.3em] text-zinc-400 uppercase">
            Cristiano Pioltelli — Founder & Head Designer · Pavia, Italy
          </p>
        </div>

      </div>
    </section>
  );
}
