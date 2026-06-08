"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/app/components/Header";
import { useCart } from "@/app/context/CartContext";

// ─────────────────────────────────────────────────────────────────────────────
// Mock Data  (inline — swap `gradient` for a real <img> src when photos arrive)
// ─────────────────────────────────────────────────────────────────────────────
interface LookItem {
  id: string;
  name: string;
  category: string;
  price: string;
  swatch?: string;
  imagePath?: string;
}

interface Look {
  id: string | number;
  label: string;
  title: string;
  description: string;
  imagePath?: string;  // real photo — takes priority over gradient when present
  imgFilter?: string;  // extra CSS filter applied before mix-blend-multiply
  from?: string;       // gradient fallback colours
  via?: string;
  to?: string;
  items: LookItem[];
}

const LOOKS: Look[] = [
  {
    id: "look-01",
    label: "Look 01",
    title: "Nomadic Rose",
    description:
      "A study in contrast: structured peach outerwear layered over flowing, geometrically-printed artisanal burgundy fabric.",
    imagePath: "/images_hero/look-01-nomadic-rose.png",
    items: [
      { id: "item-01-a", name: "Structured Peach Zip Jacket",      category: "OUTERWEAR", price: "$245", swatch: "#E8A88A", imagePath: "/clothes/Structured-Peach-Zip-Jacket.png" },
      { id: "item-01-b", name: "Burgundy Block-Print Maxi Dress",  category: "DRESS",      price: "$320", swatch: "#6B2035", imagePath: "/clothes/Burgundy-Block-Print-Maxi-Dress.png" },
      { id: "item-01-c", name: "Minimalist Black Leather Boot",    category: "FOOTWEAR",   price: "$290", swatch: "#1C1C1C", imagePath: "/clothes/Minimalist-Black-Leather-Boot.png" },
    ],
  },
  {
    id: "look-02",
    label: "Look 02",
    title: "Emerald Voyage",
    description:
      "Fluid, jewel-toned outerwear draped effortlessly over structured, nautical-inspired woven stripes.",
    imagePath: "/images_hero/look-02-emerald-voyage.png",
    items: [
      { id: "item-02-a", name: "Emerald Silk-Blend Trench", category: "OUTERWEAR", price: "$380", swatch: "#1E6B4A", imagePath: "/clothes/Emerald-Silk-Blend-Trench.png" },
      { id: "item-02-b", name: "Striped Linen Wrap Dress",  category: "DRESS",     price: "$290", swatch: "#A8C0C8", imagePath: "/clothes/Striped-Linen-Wrap-Dress.png" },
    ],
  },
  {
    id: "look-03",
    label: "Look 03",
    title: "Cerulean Bloom",
    description:
      "Soft, gathered sky-blue cotton layered over a delicate, vibrant floral silk set.",
    imagePath: "/images_hero/look-03-cerulean-bloom.png",
    items: [
      { id: "item-03-a", name: "Gathered Cerulean Duster", category: "OUTERWEAR", price: "$310", swatch: "#5BA8D0", imagePath: "/clothes/Gathered-Cerulean-Duster.png" },
      { id: "item-03-b", name: "Floral Silk Button-Down",  category: "TOPS",      price: "$185", swatch: "#E8A8B8", imagePath: "/clothes/Floral-Silk-Button-Down.png" },
    ],
  },
  {
    id: "look-04",
    label: "Look 04",
    title: "Earthen Layers",
    description:
      "A masterclass in texture: raw sage gauze, warm coral stripes, and relaxed cream wool.",
    imagePath: "/images_hero/look-04-earthen-layers.png",
    items: [
      { id: "item-04-a", name: "Ribbed Cream Cardigan",      category: "KNITWEAR",    price: "$220", swatch: "#EAE0D0", imagePath: "/clothes/Ribbed-Cream-Cardigan.png" },
      { id: "item-04-b", name: "Raw Gauze Sage Scarf",       category: "ACCESSORIES", price: "$95",  swatch: "#7A8C5A", imagePath: "/clothes/Raw-Gauze-Sage-Scarf.png" },
      { id: "item-04-c", name: "Coral Striped Tunic",        category: "TOPS",        price: "$160", swatch: "#D87060", imagePath: "/clothes/Coral-Striped-Tunic.png" },
      { id: "item-04-d", name: "Wide-Leg Canvas Trouser",    category: "BOTTOMS",     price: "$210", swatch: "#C8B48A", imagePath: "/clothes/Wide-Leg-Canvas-Trouser.png" },
    ],
  },
  {
    id: "look-05",
    label: "Look 05",
    title: "Saffron Tapestry",
    description:
      "Bold, artisanal velvet ikat paired with sun-bleached saffron layers for a deeply opulent silhouette.",
    imagePath: "/images_hero/look-05-saffron-tapestry.jpg",
    imgFilter: "brightness(1.12)",
    items: [
      { id: "item-05-a", name: "Velvet Ikat Statement Coat", category: "OUTERWEAR",   price: "$450", swatch: "#1E472E", imagePath: "/clothes/Velvet-Ikat-Statement-Coat.png" },
      { id: "item-05-b", name: "Textured Saffron Scarf",     category: "ACCESSORIES", price: "$110", swatch: "#E8A820", imagePath: "/clothes/Textured-Saffron-Scarf.png" },
      { id: "item-05-c", name: "Flowing Marigold Maxi",      category: "DRESS",       price: "$275", swatch: "#F0D060", imagePath: "/clothes/Flowing-Marigold-Maxi.png" },
    ],
  },
  {
    id: "look-06",
    label: "Look 06",
    title: "Pastoral Edge",
    description:
      "Eclectic countryside tailoring mixing oversized gingham, structured wool, and raw linen.",
    imagePath: "/images_hero/look-06-pastoral-edge.png",
    items: [
      { id: "item-06-a", name: "Felted Green Waistcoat",     category: "TOPS",    price: "$195", swatch: "#2D5A27", imagePath: "/clothes/Felted-Green-Waistcoat.png" },
      { id: "item-06-b", name: "Oversized Gingham Tunic",    category: "TOPS",    price: "$170", swatch: "#D8C8A0", imagePath: "/clothes/Oversized-Gingham-Tunic.png" },
      { id: "item-06-c", name: "Raw Linen Trouser",          category: "BOTTOMS", price: "$200", swatch: "#C8B890", imagePath: "/clothes/Raw-Linen-Trouser.png" },
      { id: "item-06-d", name: "Artisanal Beaded Necklace",  category: "JEWELRY", price: "$145", swatch: "#C8A84B", imagePath: "/clothes/Artisanal-Beaded-Necklace.png" },
    ],
  },
];

// Film-grain SVG for editorial texture on the hero cards
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// ─────────────────────────────────────────────────────────────────────────────
// ItemRow — right-sidebar product row
// ─────────────────────────────────────────────────────────────────────────────
function ItemRow({ item }: { item: LookItem }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded]   = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    addItem({ id: item.id, name: item.name, category: item.category, price: item.price, imagePath: item.imagePath, swatch: item.swatch });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex items-start gap-4 group">
      {/* Square product thumbnail */}
      <div className="w-[4.4rem] h-[4.4rem] flex-shrink-0 bg-[#F0EBE1] overflow-hidden transition-opacity duration-300 group-hover:opacity-80">
        {item.imagePath ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imagePath}
            alt={item.name}
            className="w-full h-full object-contain mix-blend-multiply"
          />
        ) : (
          <div
            className="w-full h-full bg-[#EAE6DF]"
            style={item.swatch ? { backgroundColor: item.swatch } : undefined}
          />
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="font-serif text-[13.5px] leading-snug text-[#2C2A29]">
          {item.name}
        </p>
        <p className="mt-0.5 font-sans text-[8px] font-bold tracking-[0.34em] text-[#2C2A29]/60 uppercase">
          {item.category}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-2.5 flex-shrink-0 pt-0.5">
        <button
          onClick={() => setWished((w) => !w)}
          aria-label="Save to wishlist"
          className="text-[#2C2A29]/25 hover:text-[#2C2A29] transition-colors"
        >
          <Heart
            size={13}
            strokeWidth={1.5}
            className={wished ? "fill-[#2C2A29] text-[#2C2A29]" : ""}
          />
        </button>
        <button
          onClick={handleAdd}
          aria-label="Add to bag"
          className={[
            "w-[22px] h-[22px] border flex items-center justify-center transition-all",
            added
              ? "bg-[#2C2A29] border-[#2C2A29] text-white"
              : "border-[#2C2A29]/28 text-[#2C2A29]/45 hover:bg-[#2C2A29] hover:text-white hover:border-transparent",
          ].join(" ")}
        >
          <Plus size={11} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Runway positioning — asymmetric, floor-anchored, trailing to the left
// ─────────────────────────────────────────────────────────────────────────────
function computeOffset(index: number, activeIndex: number): number {
  let offset = index - activeIndex;
  const half = LOOKS.length / 2;
  // Use >= so the boundary item (offset === half) folds into the trail side,
  // giving exactly 3 trail models visible at every active index with 6 looks.
  if (offset >= half) offset -= LOOKS.length;
  if (offset < -half) offset += LOOKS.length;
  return offset;
}

function getRunwayStyle(index: number, activeIndex: number, isMobile: boolean) {
  const offset = computeOffset(index, activeIndex);

  if (isMobile) {
    if (offset === 0) {
      return { x: "8vw",   y: "0%",   scale: 1.00, opacity: 1,   filter: "blur(0px)",   zIndex: 50 };
    } else if (offset === -1) {
      return { x: "-14vw", y: "3%",   scale: 0.75, opacity: 0.9, filter: "blur(2.5px)", zIndex: 40 };
    } else if (offset === -2) {
      return { x: "-30vw", y: "6%",   scale: 0.55, opacity: 0.7, filter: "blur(6px)",   zIndex: 30 };
    } else if (offset === -3) {
      return { x: "-40vw", y: "9%",   scale: 0.40, opacity: 0.4, filter: "blur(10px)",  zIndex: 20 };
    } else if (offset > 0) {
      return { x: "60vw",  y: "0%",   scale: 1.00, opacity: 0,   filter: "blur(0px)",   zIndex: 60 };
    } else {
      return { x: "-48vw", y: "12%",  scale: 0.25, opacity: 0,   filter: "blur(14px)",  zIndex: 10 };
    }
  }

  // Desktop
  if (offset === 0) {
    return { x: "5vw",   y: "0%",  scale: 1.00, opacity: 1,   filter: "blur(0px)",   zIndex: 50 };
  } else if (offset === -1) {
    return { x: "-12vw", y: "2%",  scale: 0.72, opacity: 0.9, filter: "blur(2.5px)", zIndex: 40 };
  } else if (offset === -2) {
    return { x: "-26vw", y: "4%",  scale: 0.48, opacity: 0.7, filter: "blur(6px)",   zIndex: 30 };
  } else if (offset === -3) {
    return { x: "-36vw", y: "6%",  scale: 0.28, opacity: 0.4, filter: "blur(10px)",  zIndex: 20 };
  } else if (offset > 0) {
    return { x: "50vw",  y: "0%",  scale: 1.00, opacity: 0,   filter: "blur(0px)",   zIndex: 60 };
  } else {
    return { x: "-42vw", y: "8%",  scale: 0.14, opacity: 0,   filter: "blur(14px)",  zIndex: 10 };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// ShopFullLookButton — adds every item in the current look to the cart at once
// ─────────────────────────────────────────────────────────────────────────────
function ShopFullLookButton({ items }: { items: LookItem[] }) {
  const { addItem, openCart } = useCart();
  const [done, setDone] = useState(false);

  function handleShopFull() {
    items.forEach((item) =>
      addItem({ id: item.id, name: item.name, category: item.category, price: item.price, imagePath: item.imagePath, swatch: item.swatch })
    );
    openCart();
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  }

  return (
    <div className="flex-shrink-0 px-10 py-7 border-t border-[#EAE6DF]">
      <button
        onClick={handleShopFull}
        className={[
          "w-full border py-3.5 font-sans text-[9px] tracking-[0.36em] uppercase transition-all duration-300",
          done
            ? "bg-[#2C2A29] text-[#FDFBF7] border-[#2C2A29]"
            : "border-[#2C2A29]/55 text-[#2C2A29] hover:bg-[#2C2A29] hover:text-[#FDFBF7]",
        ].join(" ")}
      >
        {done ? "Added to Bag ✓" : "Shop Full Look"}
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LookbookShell — main layout
// ─────────────────────────────────────────────────────────────────────────────
export default function LookbookShell() {
  const [activeIndex, setActiveIndex] = useState(LOOKS.length - 1);
  const activeIndexRef = useRef(LOOKS.length - 1); // always current, no stale closure
  const prevActiveRef  = useRef(LOOKS.length - 1); // one step behind, for teleport detection
  const lastGoRef      = useRef(0);                // throttle: timestamp of last change

  // Single gatekeeper for all index changes — must be declared first so the
  // wheel useEffect below can reference it in its dependency array without TDZ.
  // - Syncs prevActiveRef before the change (teleport detection always accurate)
  // - Throttles to 480 ms so each spring animation completes before the next starts
  const goTo = useCallback((n: number) => {
    const now = performance.now();
    if (now - lastGoRef.current < 480) return;
    lastGoRef.current = now;
    prevActiveRef.current = activeIndexRef.current;
    const next = ((n % LOOKS.length) + LOOKS.length) % LOOKS.length;
    activeIndexRef.current = next;
    setActiveIndex(next);
  }, []);

  // Mobile breakpoint detection (matches Tailwind's md: 768px)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Measure left pane so card widths are pixel-perfect
  const paneRef = useRef<HTMLDivElement>(null);
  const [paneW, setPaneW] = useState(0);

  useEffect(() => {
    const el = paneRef.current;
    if (!el) return;
    const measure = () => setPaneW(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Touchpad: two-finger horizontal swipe → wheel events with deltaX ──────────
  const wheelAccumRef = useRef(0);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = paneRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < 5) return;   // ignore near-vertical scroll
      e.preventDefault();                     // block page scroll while we handle it

      wheelAccumRef.current += e.deltaX;

      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => {
        const delta = wheelAccumRef.current;
        wheelAccumRef.current = 0;

        let step = 0;
        if      (Math.abs(delta) > 400) step = delta > 0 ? 3 : -3;
        else if (Math.abs(delta) > 150) step = delta > 0 ? 2 : -2;
        else if (Math.abs(delta) >   5) step = delta > 0 ? 1 : -1;

        if (step !== 0) {
          goTo(activeIndexRef.current + step);
        }
      }, 120); // commit after swipe gesture settles
    };

    // Must be non-passive to call preventDefault()
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
    };
  }, [goTo]);

  // Drag overlay handler — Framer Motion measures offset + velocity for us
  const didDragRef = useRef(false);

  function onRunwayDragStart() {
    didDragRef.current = true;
  }

  function onRunwayDragEnd(_: never, info: { offset: { x: number }; velocity: { x: number } }) {
    const { offset, velocity } = info;
    if (offset.x < -40 || velocity.x < -400) {
      goTo(activeIndexRef.current + 1); // swipe left → advance
    } else if (offset.x > 40 || velocity.x > 400) {
      goTo(activeIndexRef.current - 1); // swipe right → retreat
    }
  }

  // Tap handler — left half goes back, right half goes forward
  function onRunwayTap(e: React.MouseEvent<HTMLDivElement>) {
    if (didDragRef.current) { didDragRef.current = false; return; }
    const rect = e.currentTarget.getBoundingClientRect();
    const x    = e.clientX - rect.left;
    if (x < rect.width / 2) {
      goTo(activeIndexRef.current - 1);
    } else {
      goTo(activeIndexRef.current + 1);
    }
  }

  const look = LOOKS[activeIndex];

  return (
    <div className="flex flex-col h-full w-full bg-[#EAE6DF] overflow-hidden">

      <Header />

      {/* 70/30 split — stacks vertically on mobile */}
      <main className="flex flex-col md:flex-row w-full min-h-0 flex-1 overflow-hidden">

      {/* ══════════════════════════════════════════════════════════════════════
          LEFT PANE — The Runway  (70 %)
          ══════════════════════════════════════════════════════════════════════ */}
      <motion.div
        ref={paneRef}
        className="relative w-full md:w-[70%] h-[70vh] md:h-full flex items-center justify-center overflow-hidden select-none bg-[#EAE6DF]"
      >
        {/* ── Models ─────────────────────────────────────────────────────── */}
        {paneW > 0 &&
          LOOKS.map((l, i) => {
            const offset     = computeOffset(i, activeIndex);
            const prevOffset = computeOffset(i, prevActiveRef.current);

            const teleportingLeft  = prevOffset > 0 && offset <= 0;
            const teleportingRight = prevOffset < 0 && offset > 0;
            const itemKey =
              teleportingLeft  ? `${l.id}-tpl${activeIndex}` :
              teleportingRight ? `${l.id}-tpr${activeIndex}` :
              l.id;
            const itemInitial =
              teleportingLeft  ? { x: isMobile ? "-55vw" : "-42vw", y: isMobile ? "12%" : "8%", scale: isMobile ? 0.25 : 0.14, opacity: 0 } :
              teleportingRight ? { x: isMobile ? "60vw"  : "50vw",  y: "0%", scale: 1.00, opacity: 0 } :
              false;

            return (
              <motion.div
                key={itemKey}
                initial={itemInitial}
                className="absolute bottom-0 left-[50%] w-[44%] h-[95%] mix-blend-multiply"
                style={{ transformOrigin: "center center", cursor: offset !== 0 ? "pointer" : undefined }}
                animate={getRunwayStyle(i, activeIndex, isMobile)}
                transition={{ type: "spring", stiffness: 150, damping: 22, mass: 1.2 }}
                onClick={() => offset !== 0 && goTo(i)}
              >
                {l.imagePath ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={l.imagePath}
                    alt={l.title}
                    className="w-full h-full object-contain pointer-events-none"
                    style={l.imgFilter ? { filter: l.imgFilter } : undefined}
                    draggable={false}
                  />
                ) : (
                  <div className="w-full h-full relative">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(165deg, ${l.from ?? "#C9A96E"} 0%, ${l.via ?? "#E8D5B0"} 52%, ${l.to ?? "#F5EDD5"} 100%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
                      style={{ backgroundImage: GRAIN, backgroundSize: "128px" }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}

        {/* ── Mobile text veil: fades runway bg over text zone so copy is legible */}
        <div
          className="absolute inset-y-0 left-0 w-[52%] z-[65] pointer-events-none md:hidden"
          style={{ background: "linear-gradient(to right, #EAE6DF 55%, transparent)" }}
        />

        {/* ── Invisible drag overlay — above models (max z:60), below UI (z:80+) */}
        <motion.div
          className="absolute inset-0 z-[70] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragStart={onRunwayDragStart}
          onDragEnd={onRunwayDragEnd}
          onClick={onRunwayTap}
          style={{ touchAction: "pan-y" }}
        />

        {/* ── Top-left overlay: season + description ─────────────────────── */}
        <div className="absolute top-8 left-0 z-[80] w-[50%] md:w-auto pl-4 md:pl-10 md:max-w-[22ch] pointer-events-none select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={look.id + "-tl"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-[8.5px] md:text-[10px] font-bold tracking-[0.18em] md:tracking-[0.44em] text-[#2C2A29]/60 uppercase mb-2 md:mb-3 whitespace-nowrap">
                Spring / Summer 2025
              </p>
              <p className="font-serif text-[1.45rem] leading-tight text-[#2C2A29] mb-2">
                {look.title}
              </p>
              <p className="font-sans text-[0.68rem] md:text-[0.78rem] font-semibold leading-relaxed text-[#2C2A29]/75">
                {look.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Bottom-left overlay: look number + title + dots ────────────── */}
        <div className="absolute bottom-10 left-4 md:left-10 z-[80] pointer-events-none select-none w-[40%] md:w-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={look.id + "-bl"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-sans text-[1.5rem] md:text-[2.8rem] font-bold tracking-[0.06em] leading-none text-[#2C2A29] uppercase">
                {look.label}
              </h2>
              <button className="mt-1 md:mt-2 pointer-events-auto font-sans text-[8px] md:text-[9px] font-bold tracking-[0.38em] text-[#2C2A29]/50 uppercase hover:text-[#2C2A29] transition-colors">
                Shop the Look
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Pill dot nav */}
          <nav className="flex items-center gap-[7px] mt-5 pointer-events-auto" aria-label="Look navigation">
            {LOOKS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to look ${i + 1}`}
                className={[
                  "h-[2px] rounded-full transition-all duration-500 focus-visible:outline-none",
                  i === activeIndex
                    ? "w-6 bg-[#2C2A29]"
                    : "w-[5px] bg-[#2C2A29]/40 hover:bg-[#2C2A29]/70",
                ].join(" ")}
              />
            ))}
          </nav>

          {/* AI disclosure — tucked below dots, EU AI Act Art. 50 */}
          <p className="mt-3 font-sans text-[7px] uppercase tracking-[0.22em] text-[#2C2A29]/35">
            Digital Models · AI-Generated
          </p>
        </div>

        {/* ── Bottom-right: arrow controls — hidden on mobile (swipe instead) */}
        <div className="absolute bottom-10 right-10 z-[80] hidden md:flex gap-3">
          <button
            onClick={() => goTo(activeIndexRef.current + 1)}
            aria-label="Previous look"
            className="w-10 h-10 border border-[#2C2A29]/50 flex items-center justify-center text-[#2C2A29]/70 hover:border-[#2C2A29] hover:text-[#2C2A29] transition-all"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => goTo(activeIndexRef.current - 1)}
            aria-label="Next look"
            className="w-10 h-10 border border-[#2C2A29]/50 flex items-center justify-center text-[#2C2A29]/70 hover:border-[#2C2A29] hover:text-[#2C2A29] transition-all"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>

      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════════
          RIGHT PANE — Outfit Breakdown  (30 %)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="w-full md:w-[30%] h-auto md:h-full flex flex-col border-t md:border-t-0 md:border-l border-[#D4CEC6] bg-[#F5F1EB] overflow-hidden">

        <div className="flex-1 overflow-y-auto px-10 pt-8 md:pt-8">
          <p className="font-sans text-[8.5px] font-bold tracking-[0.44em] text-[#2C2A29]/60 uppercase mb-7">
            Outfit Breakdown
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{    opacity: 0, y: -6  }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="flex flex-col gap-7 pb-4"
            >
              {look.items.map((item) => (
                <ItemRow key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <ShopFullLookButton items={look.items} />
      </div>

      </main>
    </div>
  );
}
