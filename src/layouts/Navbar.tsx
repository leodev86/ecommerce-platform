import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-600/20">
            N
          </div>

          <span className="hidden text-xl font-black tracking-tight text-gray-900 sm:block">
            Nexo<span className="text-blue-600">Store</span>
          </span>
        </Link>

        {/* Categorías */}
        <Link
  to="/products"
  className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 lg:flex"
>
  <span>☰</span>
  Categorías
</Link>

<Link
  to="/products"
  className="hidden rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 lg:block"
>
  Productos
</Link>

        {/* Buscador */}
        <div className="hidden flex-1 md:block">
          <div className="relative mx-auto max-w-2xl">
            <input
              type="search"
              placeholder="¿Qué estás buscando?"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-5 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />

            <button
              type="button"
              aria-label="Buscar"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700"
            >
              🔍
            </button>
          </div>
        </div>

        {/* Acciones */}
        <div className="ml-auto flex items-center gap-2">
          {/* Favoritos */}
          <button
            type="button"
            aria-label="Favoritos"
            className="hidden h-11 w-11 items-center justify-center rounded-xl text-xl text-gray-600 transition hover:bg-gray-100 hover:text-red-500 sm:flex"
          >
            ♡
          </button>

          {/* Carrito */}
          <button
            type="button"
            aria-label="Carrito"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl text-xl text-gray-600 transition hover:bg-gray-100 hover:text-blue-600"
          >
            🛒

            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-bold text-white">
              3
            </span>
          </button>

          {/* Usuario */}
          <button
            type="button"
            className="hidden items-center gap-2 rounded-xl px-3 py-2 text-gray-700 transition hover:bg-gray-100 sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
              👤
            </span>

            <div className="hidden text-left lg:block">
              <p className="text-xs text-gray-400">
                Bienvenido
              </p>

              <p className="text-sm font-bold">
                Mi cuenta
              </p>
            </div>
          </button>

          {/* Menú móvil */}
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-xl text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Buscador móvil */}
      <div className="border-t border-gray-100 px-6 py-3 md:hidden">
        <div className="relative">
          <input
            type="search"
            placeholder="¿Qué estás buscando?"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-4 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />

          <button
            type="button"
            aria-label="Buscar"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-blue-600 text-white"
          >
            🔍
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Inicio
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Productos
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Categorías
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
            >
              Ofertas
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}