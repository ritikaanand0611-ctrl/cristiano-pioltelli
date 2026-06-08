"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Heart, Plus, X, ZoomIn, ZoomOut } from "lucide-react";

export interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  from: string;
  via: string;
  to: string;
  isNew?: boolean;
  isBestseller?: boolean;
  zoomOnHover?: boolean;
  aspectRatio?: "3/4" | "1/1";
  imagePath?: string;
}

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 }); // % within image
  const imgRef = useRef<HTMLImageElement>(null);
  const MIN = 1;
  const MAX = 4;

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Wheel to zoom, centred on cursor position
  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setScale(prev => Math.min(MAX, Math.max(MIN, prev - e.deltaY * 0.002)));
  }, []);

  // Click image to toggle zoom
  const onImgClick = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x, y });
    setScale(prev => (prev > 1.05 ? 1 : 2.5));
  }, []);

  const zoomIn  = () => setScale(p => Math.min(MAX, p + 0.5));
  const zoomOut = () => setScale(p => Math.max(MIN, p - 0.5));

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
      onClick={onClose}
      onWheel={onWheel}
    >
      {/* Image wrapper — prevents backdrop click when clicking image */}
      <div
        className="relative flex items-center justify-center w-full h-full"
        style={{ cursor: scale > 1 ? "zoom-out" : "zoom-in" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onClick={onImgClick}
          className="max-h-[88vh] max-w-[88vw] object-contain select-none transition-transform duration-300 ease-out drop-shadow-2xl"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: `${origin.x}% ${origin.y}%`,
          }}
          draggable={false}
        />
      </div>

      {/* Controls — top-right */}
      <div className="absolute top-5 right-5 flex items-center gap-2" onClick={e => e.stopPropagation()}>
        <button
          onClick={zoomOut}
          disabled={scale <= MIN}
          className="w-9 h-9 flex items-center justify-center border border-[#2C2A29]/15 text-[#2C2A29]/50 hover:text-[#2C2A29] hover:border-[#2C2A29]/40 transition-colors disabled:opacity-25"
          aria-label="Zoom out"
        >
          <ZoomOut size={16} strokeWidth={1.5} />
        </button>
        <button
          onClick={zoomIn}
          disabled={scale >= MAX}
          className="w-9 h-9 flex items-center justify-center border border-[#2C2A29]/15 text-[#2C2A29]/50 hover:text-[#2C2A29] hover:border-[#2C2A29]/40 transition-colors disabled:opacity-25"
          aria-label="Zoom in"
        >
          <ZoomIn size={16} strokeWidth={1.5} />
        </button>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center border border-[#2C2A29]/15 text-[#2C2A29]/50 hover:text-[#2C2A29] hover:border-[#2C2A29]/40 transition-colors ml-1"
          aria-label="Close"
        >
          <X size={16} strokeWidth={1.5} />
        </button>
      </div>

      {/* Hint */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-sans text-[9px] tracking-[0.3em] uppercase text-[#2C2A29]/30 pointer-events-none">
        Click image to zoom · Scroll to adjust · ESC to close
      </p>
    </div>
  );
}

// ── ProductCard ───────────────────────────────────────────────────────────────
export default function ProductCard({
  name,
  category,
  price,
  from,
  via,
  to,
  isNew,
  isBestseller,
  zoomOnHover = false,
  aspectRatio = "3/4",
  imagePath,
}: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="group flex flex-col gap-3">
        {/* Image area */}
        <div
          className={[
            "relative overflow-hidden bg-[#F0EBE1]",
            aspectRatio === "1/1" ? "aspect-square" : "aspect-[3/4]",
            imagePath ? "cursor-zoom-in" : "",
          ].join(" ")}
          onClick={() => imagePath && setLightbox(true)}
        >
          {imagePath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imagePath}
              alt={name}
              className={[
                "absolute inset-0 w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out",
                zoomOnHover ? "group-hover:scale-105" : "",
              ].join(" ")}
            />
          ) : (
            <div
              className={[
                "absolute inset-0 transition-transform duration-700 ease-out",
                zoomOnHover ? "group-hover:scale-105" : "",
              ].join(" ")}
              style={{
                background: `linear-gradient(165deg, ${from} 0%, ${via} 52%, ${to} 100%)`,
              }}
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
            {isNew && (
              <span className="font-sans text-[8px] tracking-[0.3em] uppercase bg-[#2C2A29] text-[#FDFBF7] px-2 py-1">
                New
              </span>
            )}
            {isBestseller && (
              <span className="font-sans text-[8px] tracking-[0.3em] uppercase bg-[#F0EBE1] text-[#2C2A29] border border-[#2C2A29]/20 px-2 py-1">
                Bestseller
              </span>
            )}
          </div>

          {/* Action buttons — appear on hover */}
          <div
            className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setWished(w => !w)}
              className="w-8 h-8 bg-white flex items-center justify-center text-[#2C2A29]/40 hover:text-[#2C2A29] transition-colors shadow-sm"
              aria-label="Save to wishlist"
            >
              <Heart
                size={13}
                strokeWidth={1.5}
                className={wished ? "fill-[#2C2A29] text-[#2C2A29]" : ""}
              />
            </button>
            <button
              className="w-8 h-8 bg-white flex items-center justify-center text-[#2C2A29]/40 hover:text-[#2C2A29] transition-colors shadow-sm"
              aria-label="Add to bag"
            >
              <Plus size={13} strokeWidth={1.5} />
            </button>
          </div>

          {/* Quick shop strip */}
          <div className="absolute bottom-0 inset-x-0 z-10 bg-[#2C2A29] py-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="font-sans text-[9px] tracking-[0.3em] text-[#FDFBF7] uppercase">
              Quick Shop
            </span>
          </div>
        </div>

        {/* Product info */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-serif text-[13.5px] leading-snug text-[#2C2A29] truncate">
              {name}
            </p>
            <p className="mt-0.5 font-sans text-[8.5px] tracking-[0.3em] text-[#2C2A29]/40 uppercase">
              {category}
            </p>
          </div>
        </div>
      </div>

      {lightbox && imagePath && (
        <Lightbox src={imagePath} alt={name} onClose={() => setLightbox(false)} />
      )}
    </>
  );
}
