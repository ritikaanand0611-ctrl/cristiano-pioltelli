"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useLang } from "@/app/context/LanguageContext";
import { useTranslations } from "@/app/translations";

interface HeaderProps {
  right?: ReactNode;
}

export default function Header({ right }: HeaderProps) {
  const pathname = usePathname();
  const isHero   = pathname === "/";
  const { count, openCart } = useCart();
  const { lang, setLang } = useLang();
  const tx = useTranslations(lang);

  const NAV_LINKS = [
    { label: tx.nav.clothing,    href: "/clothing"    },
    { label: tx.nav.lookbook,    href: "/lookbook"    },
    { label: tx.nav.accessories, href: "/accessories" },
  ];

  return (
    <header className={`flex-shrink-0 bg-white${isHero ? "" : " border-b border-[#DDD5C8]"}`}>

      {/* ── Row 1: brand  |  RUNWAY  |  lang toggle + bag ── */}
      <div className="grid grid-cols-3 items-center px-4 md:px-10 py-4">

        {/* Left — brand */}
        <Link
          href="/"
          className="font-sans text-[11px] font-bold tracking-[0.28em] text-[#2C2A29] uppercase hover:opacity-60 transition-opacity"
        >
          Cristiano Pioltelli
        </Link>

        {/* Center — bold hero label */}
        <div className="flex justify-center">
          <Link
            href="/"
            className={[
              "font-sans text-[11px] tracking-[0.42em] uppercase font-bold transition-colors",
              isHero
                ? "text-[#2C2A29]"
                : "text-[#2C2A29]/40 hover:text-[#2C2A29]",
            ].join(" ")}
          >
            RUNWAY
          </Link>
        </div>

        {/* Right — language toggle + bag icon */}
        <div className="flex items-center justify-end gap-4">
          {right}

          {/* EN | IT toggle */}
          <div className="flex items-center gap-1.5 font-sans text-[9px] tracking-[0.22em] font-bold uppercase select-none">
            <button
              onClick={() => setLang("en")}
              aria-label="Switch to English"
              className={`transition-colors ${
                lang === "en"
                  ? "text-[#2C2A29]"
                  : "text-[#2C2A29]/30 hover:text-[#2C2A29]/60"
              }`}
            >
              EN
            </button>
            <span className="text-[#2C2A29]/20 font-light">|</span>
            <button
              onClick={() => setLang("it")}
              aria-label="Switch to Italian"
              className={`transition-colors ${
                lang === "it"
                  ? "text-[#2C2A29]"
                  : "text-[#2C2A29]/30 hover:text-[#2C2A29]/60"
              }`}
            >
              IT
            </button>
          </div>

          <button
            onClick={openCart}
            aria-label="Open bag"
            className="relative text-[#2C2A29]/60 hover:text-[#2C2A29] transition-colors p-1"
          >
            <ShoppingBag size={22} strokeWidth={1.5} className="md:w-4 md:h-4" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#2C2A29] text-white rounded-full font-sans text-[7px] font-bold flex items-center justify-center leading-none">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── Row 2: category sub-navigation ── */}
      <nav
        aria-label="Category navigation"
        className="flex justify-center gap-9 py-3"
      >
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={[
                "font-sans text-[10px] tracking-[0.32em] uppercase font-bold transition-colors",
                isActive
                  ? "text-[#2C2A29]"
                  : "text-[#2C2A29]/70 hover:text-[#2C2A29]",
              ].join(" ")}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
