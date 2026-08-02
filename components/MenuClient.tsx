"use client";

import { useState } from "react";
import type { MenuData } from "@/types/menu";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";

export default function MenuClient({
  menuData,
  categories,
}: {
  menuData: MenuData;
  categories: string[];
}) {
  const [selected, setSelected] = useState(categories[0] ?? "");

  if (categories.length === 0) {
    return (
      <p className="px-4 py-16 text-center font-sans text-sm text-beige/60 sm:px-8">
        El menú se está preparando. Vuelve pronto.
      </p>
    );
  }

  return (
    <>
      <CategoryTabs categories={categories} selected={selected} onSelect={setSelected} />
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <h2 className="mb-8 font-serif text-2xl text-ivory sm:text-3xl">{selected}</h2>
        <ProductGrid products={menuData[selected] ?? []} />
      </section>
    </>
  );
}
