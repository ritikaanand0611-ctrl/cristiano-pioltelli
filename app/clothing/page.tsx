"use client";

import { useState, useMemo } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FilterBar from "@/app/components/FilterBar";
import ProductCard from "@/app/components/ProductCard";
import { clothingProducts } from "@/app/data/products";

const CATEGORIES = [
  "All",
  "Dresses",
  "Outerwear",
  "Tops",
  "Blazers",
  "Co-ords",
  "Trousers",
];

export default function ClothingPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? clothingProducts
        : clothingProducts.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F0EBE1]">
      <Header />

      <main className="flex-1 px-10 py-14">
        {/* Page title */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-[9px] font-bold tracking-[0.44em] text-[#2C2A29]/55 uppercase mb-3">
              Ready-to-Wear
            </p>
            <h1 className="font-serif text-5xl text-[#2C2A29] tracking-tight">Clothing</h1>
          </div>
          <p className="font-sans text-[10px] tracking-[0.25em] text-[#2C2A29]/35 uppercase tabular-nums pb-1">
            {filtered.length} pieces
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          filters={CATEGORIES}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        {/* Product grid — 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              zoomOnHover
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#2C2A29]/35 uppercase">
              No pieces found
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
