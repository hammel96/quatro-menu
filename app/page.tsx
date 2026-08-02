import { getMenuData, getCategories } from "@/lib/menu";
import MenuClient from "@/components/MenuClient";

export default function Home() {
  const menuData = getMenuData();
  const categories = getCategories(menuData);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
      <header className="flex flex-col items-center gap-2 px-4 pb-8 pt-14 text-center sm:pb-10 sm:pt-20">
        <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold/70">
          Café de especialidad
        </p>
        <h1 className="font-serif text-5xl text-ivory sm:text-6xl">Quatro</h1>
        <p className="max-w-md font-sans text-sm text-beige/60">Menú</p>
      </header>
      <MenuClient menuData={menuData} categories={categories} />
    </main>
  );
}
