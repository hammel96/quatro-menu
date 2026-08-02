import type { Product } from "@/types/menu";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center font-sans text-sm text-beige/60">
        Próximamente nuevos productos en esta categoría.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.nombre} product={product} />
      ))}
    </div>
  );
}
