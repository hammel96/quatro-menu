import Image from "next/image";
import type { Product } from "@/types/menu";

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-olive via-forest to-ink">
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-gold/40"
      >
        <path
          d="M4 3h13v9a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V3Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M17 8h1.5a2.5 2.5 0 0 1 0 5H17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 21h6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gold/10 bg-charcoal/40 shadow-sm shadow-black/30 transition-shadow duration-300 hover:shadow-md hover:shadow-black/40">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-olive">
        {product.imagen ? (
          <Image
            src={product.imagen}
            alt={product.nombre}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder />
        )}
        {product.destacado && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            Destacado
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 px-5 py-5">
        <div>
          <h3 className="font-serif text-xl text-ivory">{product.nombre}</h3>
          {product.descripcion && (
            <p className="mt-1.5 text-sm leading-relaxed text-beige/70">
              {product.descripcion}
            </p>
          )}
        </div>
        <span className="whitespace-nowrap font-serif text-lg text-gold">
          {product.precio}
        </span>
      </div>
    </article>
  );
}
