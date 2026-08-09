import { Link } from "react-router-dom";
import ProductGrid from "@/components/product/ProductGrid";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8">
    {/* Contenido */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
        🔥 Ofertas especiales hasta 50% OFF
          </span>

      <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
        Todo lo que buscas,
        <span className="block text-blue-400">
          en un solo lugar.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
        Descubre tecnología, moda, hogar y mucho más.
        Encuentra productos increíbles a precios que te van a
        sorprender.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/products"
          className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
        >
          Explorar productos →
        </Link>

        <button
          type="button"
          className="rounded-xl border border-slate-700 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10"
        >
          Ver ofertas
        </button>
      </div>

      {/* Indicadores */}
      <div className="mt-10 flex flex-wrap gap-8 border-t border-slate-800 pt-8">
        <div>
          <p className="text-2xl font-bold text-white">10K+</p>
          <p className="text-sm text-slate-400">Productos</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-white">4.8/5</p>
          <p className="text-sm text-slate-400">Valoración</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-white">24/7</p>
          <p className="text-sm text-slate-400">Soporte</p>
        </div>
      </div>
    </div>

    {/* Imagen */}
    <div className="relative hidden lg:block">
      <div className="absolute -inset-10 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
          alt="Productos destacados"
          className="h-[480px] w-full rounded-2xl object-cover"
        />

        {/* Tarjeta flotante */}
        <div className="absolute bottom-5 left-6 rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-xl backdrop-blur-md">
          <p className="text-xs font-medium text-slate-400">
            Oferta destacada
          </p>

          <p className="mt-1 text-lg font-bold text-white">
            Hasta 50% de descuento
          </p>

          <p className="mt-1 text-sm text-blue-400">
            Solo por tiempo limitado
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Categorías */}
<section className="bg-gray-50">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <SectionTitle
      title="Explora nuestras categorías"
      subtitle="Encuentra todo lo que necesitas en un solo lugar."
    />

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          name: "Tecnología",
          description: "Smartphones, laptops y accesorios",
          icon: "💻",
          color: "from-blue-500 to-cyan-400",
        },
        {
          name: "Moda",
          description: "Ropa, calzado y accesorios",
          icon: "👕",
          color: "from-pink-500 to-rose-400",
        },
        {
          name: "Hogar",
          description: "Todo para tu casa",
          icon: "🏠",
          color: "from-orange-500 to-amber-400",
        },
        {
          name: "Deportes",
          description: "Equipamiento y accesorios",
          icon: "⚽",
          color: "from-green-500 to-emerald-400",
        },
      ].map((category) => (
        <button
          key={category.name}
          type="button"
          className="group relative overflow-hidden rounded-3xl bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Fondo decorativo */}
          <div
            className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${category.color} opacity-10 transition duration-300 group-hover:scale-150`}
          />

          <div className="relative">
            {/* Icono */}
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-2xl shadow-lg`}
            >
              {category.icon}
            </div>

            <h3 className="mt-6 text-xl font-bold text-gray-900">
              {category.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {category.description}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
              Ver productos
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  </div>
</section>

      {/* Ofertas */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <SectionTitle
      title="Ofertas especiales"
      subtitle="Precios especiales por tiempo limitado."
    />

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-rose-600 to-orange-500">
      {/* Decoración */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
      <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/5" />

      <div className="relative grid items-center gap-10 px-8 py-12 sm:px-12 lg:grid-cols-2 lg:px-16 lg:py-16">
        {/* Texto */}
        <div className="text-white">
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-wider">
            🔥 Oferta limitada
          </span>

          <h3 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
            Hasta
            <span className="block text-yellow-300">
              50% OFF
            </span>
          </h3>

          <p className="mt-5 max-w-lg text-lg leading-8 text-red-100">
            Aprovecha descuentos exclusivos en productos
            seleccionados. Cuando se acaben, se acabaron.
          </p>

          <button
            type="button"
            className="mt-8 rounded-xl bg-white px-7 py-4 font-bold text-red-600 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-yellow-50"
          >
            Ver ofertas →
          </button>
        </div>

        {/* Producto destacado */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-yellow-300/20 blur-3xl" />

            <div className="relative rotate-2 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm transition duration-500 hover:rotate-0 hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
                alt="Producto en oferta"
                className="h-72 w-72 rounded-2xl object-cover sm:h-80 sm:w-80"
              />
            </div>

            {/* Badge */}
            <div className="absolute -right-4 -top-4 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-yellow-300 text-center text-sm font-black text-red-700 shadow-xl">
              -50%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Productos recomendados */}
<section className="bg-gray-50">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <SectionTitle
        title="Productos recomendados"
        subtitle="Los favoritos de nuestra comunidad."
      />

        <Link
          to="/products"
          className="mb-6 font-semibold text-blue-600 transition hover:text-blue-700"
        >
        Ver todos →
        </Link>
    </div>

    <ProductGrid />
  </div>
</section>
    </div>
  );
}