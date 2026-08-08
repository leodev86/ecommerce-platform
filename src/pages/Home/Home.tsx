import ProductGrid from "@/components/product/ProductGrid";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="text-white">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              Ofertas especiales
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Todo lo que buscas,
              <br />
              en un solo lugar.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Descubre productos increíbles, ofertas especiales y
              una experiencia de compra diseñada para ti.
            </p>

            <button
              type="button"
              className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Explorar productos
            </button>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
              alt="Productos destacados"
              className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          title="Explora nuestras categorías"
          subtitle="Encuentra rápidamente lo que estás buscando."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Tecnología", "Moda", "Hogar", "Deportes"].map(
            (category) => (
              <button
                key={category}
                type="button"
                className="rounded-2xl bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {category}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Ver productos →
                </p>
              </button>
            ),
          )}
        </div>
      </section>

      {/* Ofertas */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionTitle
            title="Ofertas especiales"
            subtitle="Aprovecha estos precios antes de que se acaben."
          />

          <div className="rounded-3xl bg-red-50 p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <span className="font-bold uppercase text-red-600">
                  Oferta limitada
                </span>

                <h3 className="mt-2 text-3xl font-extrabold text-gray-900">
                  Hasta 40% de descuento
                </h3>

                <p className="mt-2 text-gray-600">
                  En productos seleccionados.
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
              >
                Ver ofertas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Productos recomendados */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle
          title="Productos recomendados"
          subtitle="Algunos de nuestros productos favoritos."
        />

        <ProductGrid />
      </section>
    </div>
  );
}