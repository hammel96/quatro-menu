import fs from "node:fs";
import path from "node:path";
import type { MenuData, Product } from "@/types/menu";

// Usado únicamente si data/menu.json todavía no existe (primer build).
const FALLBACK_MENU: MenuData = {
  Bebidas: [
    {
      nombre: "Flat White",
      descripcion:
        "Espresso doble con leche vaporizada y microespuma sedosa.",
      precio: "Q32",
      imagen:
        "https://res.cloudinary.com/demo/image/upload/v1/quatro/flat-white.jpg",
      destacado: true,
      orden: 1,
    },
    {
      nombre: "Cold Brew de la Casa",
      descripcion:
        "Extracción en frío por 18 horas, notas a cacao y caramelo.",
      precio: "Q28",
      orden: 2,
    },
  ],
  Postres: [
    {
      nombre: "Tarta de Almendra",
      descripcion:
        "Almendra tostada, mantequilla noisette y miel de flor de azahar.",
      precio: "Q35",
      imagen:
        "https://res.cloudinary.com/demo/image/upload/v1/quatro/tarta-almendra.jpg",
      destacado: false,
      orden: 1,
    },
  ],
};

function sortProducts(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    const ordenA = a.orden ?? Number.POSITIVE_INFINITY;
    const ordenB = b.orden ?? Number.POSITIVE_INFINITY;
    return ordenA - ordenB;
  });
}

export function getMenuData(): MenuData {
  const filePath = path.join(process.cwd(), "data", "menu.json");

  let raw: MenuData;
  try {
    const fileContents = fs.readFileSync(filePath, "utf-8");
    raw = JSON.parse(fileContents) as MenuData;
  } catch {
    raw = FALLBACK_MENU;
  }

  const sorted: MenuData = {};
  for (const categoria of Object.keys(raw)) {
    sorted[categoria] = sortProducts(raw[categoria]);
  }
  return sorted;
}

export function getCategories(menu: MenuData): string[] {
  return Object.keys(menu);
}
