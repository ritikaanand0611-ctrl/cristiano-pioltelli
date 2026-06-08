"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NAV_LINKS = [
  // { label: "COLLECTIONS", href: "/collections" }, // hidden — same images as Lookbook
  { label: "CLOTHING",    href: "/clothing"    },
  { label: "LOOKBOOK",    href: "/lookbook"    },
  { label: "ACCESSORIES", href: "/accessories" },
] as const;

interface HeaderProps {
  right?: ReactNode;
}

export default function Header({ right }: HeaderProps) {
  const pathname = usePathname();
  const isHero   = pathname === "/";

  return (
    <header className={`flex-shrink-0 bg-white${isHero ? "" : " border-b border-[#DDD5C8]"}`}>

      {/* ── Row 1: brand  |  RUNWAY (bold hero link)  |  right slot ── */}
      <div className="grid grid-cols-3 items-center px-10 py-4">

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

        {/* Right — injected slot (look counter, etc.) */}
        <div className="flex justify-end">{right}</div>
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
              key={label}
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
