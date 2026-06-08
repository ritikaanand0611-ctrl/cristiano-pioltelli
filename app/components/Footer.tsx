const FOOTER_LINKS = ["Privacy", "Terms", "Contact", "Stockists"] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[#DDD5C8] bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-10 py-8">
        <p className="font-serif text-sm tracking-[0.15em] text-[#2C2A29]/70">
          Cristiano Pioltelli
        </p>

        <p className="font-sans text-[9px] tracking-[0.3em] text-[#2C2A29]/30 uppercase">
          © 2025 Cristiano Pioltelli. All rights reserved.
        </p>

        <div className="flex gap-6">
          {FOOTER_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#2C2A29]/35 hover:text-[#2C2A29] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
