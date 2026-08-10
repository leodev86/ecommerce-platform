import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/useCart";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  discount?: number;
  isNew?: boolean;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  rating,
  image,
  discount,
  isNew,
}: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart} = useCart();
  const originalPrice = discount
    ? price / (1 - discount / 100)
    : null;

    const handleAddToCart = () => {
      addToCart(
        {
          id,
          name,
          description,
          price,
          rating,
          image,
          discount,
          isNew,
        },
        1,
      );

      navigate("/cart");
    }

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Imagen */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {isNew && (
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-md">
              NUEVO
            </span>
          )}

          {discount && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-md">
              -{discount}%
            </span>
          )}
        </div>

        {/* Favoritos */}
        <button
          type="button"
          aria-label={`Agregar ${name} a favoritos`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-md backdrop-blur transition hover:scale-110 hover:bg-white"
        >
          ♡
        </button>

        {/* Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10 transition duration-300 group-hover:translate-y-0">
          <button
            type="button"
            className="w-full rounded-xl bg-white py-3 font-bold text-gray-900 transition hover:bg-blue-600 hover:text-white"
          >
            Vista rápida
          </button>
        </div>
      </div>

      {/* Información */}
      <div className="p-5">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-500">★</span>

          <span className="font-semibold text-gray-800">
            {rating}
          </span>

          <span className="text-gray-400">
            · Excelente
          </span>
        </div>

        <Link
          to={`/products/${id}`}
          className="mt-3 block text-lg font-bold text-gray-900 transition hover:text-blue-600"
        >
          {name}
        </Link>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Precio */}
        <div className="mt-5 flex items-end gap-2">
          <span className="text-2xl font-black text-gray-900">
            ${price.toFixed(2)}
          </span>

          {originalPrice && (
            <span className="mb-1 text-sm text-gray-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Comprar */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 font-bold text-white transition duration-300 hover:bg-blue-600"
        >
          🛒 Agregar al carrito
        </button>
      </div>
    </article>
  );
}