import { useMemo, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

const products = [
  {
    id: 1,
    name: "Auriculares Pro",
    description:
      "Auriculares inalámbricos con cancelación de ruido.",
    price: 79.99,
    rating: 4.8,
    discount: 20,
    isNew: true,
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    description:
      "Reloj inteligente para deporte y uso diario.",
    price: 129.99,
    rating: 4.7,
    discount: 15,
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Cámara Compacta",
    description:
      "Captura tus mejores momentos con gran calidad.",
    price: 249.99,
    rating: 4.6,
    isNew: true,
    category: "Tecnología",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Zapatillas Urban",
    description:
      "Diseño moderno y comodidad para todos los días.",
    price: 64.99,
    rating: 4.9,
    discount: 25,
    category: "Moda",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Mochila Urbana",
    description:
      "Mochila resistente para trabajo, estudio y viajes.",
    price: 49.99,
    rating: 4.7,
    category: "Moda",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Lámpara Minimalista",
    description:
      "Iluminación moderna para crear ambientes únicos.",
    price: 39.99,
    rating: 4.5,
    discount: 10,
    category: "Hogar",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Balón Profesional",
    description:
      "Balón diseñado para entrenamiento y competición.",
    price: 34.99,
    rating: 4.8,
    category: "Deportes",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Zapatillas Running",
    description:
      "Amortiguación y comodidad para tus entrenamientos.",
    price: 89.99,
    rating: 4.9,
    isNew: true,
    category: "Deportes",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "Todas",
  "Tecnología",
  "Moda",
  "Hogar",
  "Deportes",
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [maxPrice, setMaxPrice] = useState(300);
  const [sort, setSort] = useState("relevance");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "Todas" ||
        product.category === category;

      const matchesPrice = product.price <= maxPrice;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    });

    if (sort === "price-low") {
      result = [...result].sort(
        (a, b) => a.price - b.price,
      );
    }

    if (sort === "price-high") {
      result = [...result].sort(
        (a, b) => b.price - a.price,
      );
    }

    if (sort === "rating") {
      result = [...result].sort(
        (a, b) => b.rating - a.rating,
      );
    }

    return result;
  }, [search, category, maxPrice, sort]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <SectionTitle
            title="Todos los productos"
            subtitle="Encuentra exactamente lo que estás buscando."
          />

          {/* Buscador */}
          <div className="relative max-w-2xl">
            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Buscar productos..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 pr-14 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Filtros */}
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-gray-900">
                Filtros
              </h2>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("Todas");
                  setMaxPrice(300);
                  setSort("relevance");
                }}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Limpiar
              </button>
            </div>

            {/* Categorías */}
            <div className="mt-6">
              <h3 className="text-sm font-bold text-gray-900">
                Categoría
              </h3>

              <div className="mt-3 space-y-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                      category === item
                        ? "bg-blue-50 font-bold text-blue-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Precio */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-900">
                Precio máximo
              </h3>

              <div className="mt-4">
                <input
                  type="range"
                  min="0"
                  max="300"
                  step="10"
                  value={maxPrice}
                  onChange={(event) =>
                    setMaxPrice(Number(event.target.value))
                  }
                  className="w-full accent-blue-600"
                />

                <div className="mt-2 flex justify-between text-sm text-gray-500">
                  <span>$0</span>
                  <span className="font-bold text-gray-900">
                    ${maxPrice}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Productos */}
          <div>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                productos encontrados
              </p>

              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value)
                }
                className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none focus:border-blue-500"
              >
                <option value="relevance">
                  Relevancia
                </option>
                <option value="price-low">
                  Precio: menor a mayor
                </option>
                <option value="price-high">
                  Precio: mayor a menor
                </option>
                <option value="rating">
                  Mejor valoración
                </option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl bg-white px-6 py-20 text-center shadow-sm">
                <div className="text-5xl">🔎</div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  No encontramos productos
                </h3>

                <p className="mt-2 text-gray-500">
                  Intenta cambiar la búsqueda o los filtros.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}