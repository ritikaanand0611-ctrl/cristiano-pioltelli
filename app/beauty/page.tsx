"use client";

import { useState, useMemo } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FilterBar from "@/app/components/FilterBar";
import ProductCard from "@/app/components/ProductCard";
import { beautyProducts } from "@/app/data/products";

const CATEGORIES = ["All", "Skincare", "Makeup", "Body", "Fragrance"];

export default function BeautyPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? beautyProducts
        : beautyProducts.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      <Header />

      <main className="flex-1 px-10 py-14">
        {/* Page title */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-[9px] tracking-[0.44em] text-[#2C2A29]/35 uppercase mb-3">
              Ritual & Radiance
            </p>
            <h1 className="font-serif text-5xl text-[#2C2A29] tracking-tight">Beauty</h1>
          </div>
          <p className="font-sans text-[10px] tracking-[0.25em] text-[#2C2A29]/35 uppercase tabular-nums pb-1">
            {filtered.length} products
          </p>
        </div>

        {/* Editorial banner */}
        <div
          className="w-full h-[30vh] mb-12 relative overflow-hidden flex items-end"
          style={{
            background: "linear-gradient(165deg, #C8849A 0%, #E8A8B8 52%, #F5D8E0 100%)",
          }}
        >
          <div className="p-10">
            <p className="font-sans text-[9px] tracking-[0.4em] text-white/60 uppercase mb-2">
              New Arrivals
            </p>
            <h2 className="font-serif text-3xl text-white">The Ritual Edit</h2>
          </div>
        </div>

        {/* Filters */}
        <FilterBar
          filters={CATEGORIES}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        {/* Product grid — square aspect for beauty */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              aspectRatio="1/1"
              zoomOnHover
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#2C2A29]/35 uppercase">
              No products found
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
