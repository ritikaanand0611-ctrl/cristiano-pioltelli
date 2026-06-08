export default function OurStory() {
  return (
    <section className="bg-[#FAFAFA] py-24 md:py-32 px-8 md:px-24">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center max-w-7xl mx-auto">

        {/* Text side */}
        <div className="flex-1 min-w-0">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#C2A373] uppercase mb-6">
            Our Story
          </p>
          <h2 className="font-serif text-[2.6rem] md:text-[3.8rem] leading-[1.1] text-[#2C2A29] mb-8">
            Crafting modern<br />
            <em>silhouettes</em> rooted<br />
            in heritage.
          </h2>
          <p className="font-sans text-[0.88rem] leading-relaxed text-zinc-500 max-w-[42ch] mb-6">
            Cristiano Pioltelli is built on the belief that clothing should feel
            like a second skin — intentional, unhurried, and deeply personal.
            Each piece begins with a conversation between fabric and form.
          </p>
          <p className="font-sans text-[0.88rem] leading-relaxed text-zinc-500 max-w-[42ch] mb-10">
            Our atelier in Pavia brings together master weavers,
            natural dyes, and contemporary pattern-cutting to produce garments
            that outlast every season.
          </p>
          <a
            href="#"
            className="font-sans text-[9px] font-bold tracking-[0.38em] text-[#2C2A29] uppercase border-b border-[#2C2A29]/40 pb-0.5 hover:border-[#2C2A29] transition-colors"
          >
            Read the full story
          </a>
        </div>

        {/* Image side */}
        <div className="w-full md:w-[38%] flex-shrink-0">
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#E8E2D9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images_hero/look-05-saffron-tapestry.jpg"
              alt="Cristiano Pioltelli atelier"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
          <p className="mt-3 font-sans text-[8px] tracking-[0.3em] text-zinc-400 uppercase">
            SS 2025 — Saffron Tapestry
          </p>
        </div>

      </div>
    </section>
  );
}
