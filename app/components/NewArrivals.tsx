const ARRIVALS = [
  { id: "a1", name: "Emerald Silk-Blend Trench", price: "$380", image: "/clothes/Emerald-Silk-Blend-Trench.png",     bg: "#D6E8DF" },
  { id: "a2", name: "Velvet Ikat Statement Coat", price: "$450", image: "/clothes/Velvet-Ikat-Statement-Coat.png",   bg: "#E2D6C8" },
  { id: "a3", name: "Gathered Cerulean Duster",   price: "$310", image: "/clothes/Gathered-Cerulean-Duster.png",    bg: "#D6E0E8" },
  { id: "a4", name: "Burgundy Block-Print Maxi",  price: "$320", image: "/clothes/Burgundy-Block-Print-Maxi-Dress.png", bg: "#E8D6D6" },
];

export default function NewArrivals() {
  return (
    <section className="bg-white py-24 md:py-32 px-8 md:px-24">

      {/* Section header */}
      <div className="flex items-baseline justify-between mb-12 max-w-7xl mx-auto">
        <h2 className="font-serif text-[2rem] md:text-[2.6rem] text-[#2C2A29]">New Arrivals</h2>
        <a
          href="/clothing"
          className="font-sans text-[9px] font-bold tracking-[0.34em] text-[#2C2A29]/45 uppercase hover:text-[#2C2A29] transition-colors"
        >
          View All
        </a>
      </div>

      {/* Cards — horizontal scroll on mobile, 4-col grid on desktop */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5 overflow-x-auto md:overflow-visible md:grid md:grid-cols-4 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {ARRIVALS.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[72vw] md:w-auto snap-start group cursor-pointer"
            >
              {/* Image */}
              <div
                className="relative w-full aspect-[3/4] overflow-hidden mb-4"
                style={{ backgroundColor: item.bg }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105 p-4"
                />
              </div>

              {/* Info */}
              <p className="font-serif text-[15px] leading-snug text-[#2C2A29] mb-1">{item.name}</p>
              <p className="font-sans text-[11px] font-bold tracking-[0.1em] text-[#2C2A29]/55">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
