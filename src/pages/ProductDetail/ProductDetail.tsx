import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/useCart";

export default function ProductDetail() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id),
  );

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-black text-gray-900">
          Producto no encontrado
        </h1>

        <Link
          to="/products"
          className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Volver a productos
        </Link>
      </div>
    );
  }

  const handleDecrease = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1),
    );
  };

  const handleIncrease = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-500">
        <Link
          to="/"
          className="transition hover:text-blue-600"
        >
          Inicio
        </Link>

        <span className="mx-2">/</span>

        <Link
          to="/products"
          className="transition hover:text-blue-600"
        >
          Productos
        </Link>

        <span className="mx-2">/</span>

        <span className="text-gray-900">
          {product.name}
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Imagen */}
        <div className="relative overflow-hidden rounded-3xl bg-gray-100">
          {product.isNew && (
            <span className="absolute left-6 top-6 z-10 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
              NUEVO
            </span>
          )}

          {product.discount && product.discount > 0 && (
            <span className="absolute right-6 top-6 z-10 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
              -{product.discount}%
            </span>
          )}

          <img
            src={product.image}
            alt={product.name}
            className="h-full min-h-[450px] w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Información */}
        <div className="flex flex-col justify-center">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-xl text-yellow-500">
              ★
            </span>

            <span className="font-bold text-gray-900">
              {product.rating}
            </span>

            <span className="text-gray-400">
              · Excelente
            </span>
          </div>

          {/* Nombre */}
          <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-900">
            {product.name}
          </h1>

          {/* Descripción */}
          <p className="mt-5 text-lg leading-8 text-gray-500">
            {product.description}
          </p>

          {/* Precio */}
          <div className="mt-8 flex items-end gap-3">
            <span className="text-4xl font-black text-gray-900">
              ${product.price.toFixed(2)}
            </span>

            {product.discount && product.discount > 0 && (
              <span className="mb-1 text-lg text-gray-400 line-through">
                $
                {(
                  product.price /
                  (1 - product.discount / 100)
                ).toFixed(2)}
              </span>
            )}
          </div>

          {/* Cantidad */}
          <div className="mt-8">
            <p className="mb-3 text-sm font-bold text-gray-700">
              Cantidad
            </p>

            <div className="flex h-12 w-fit items-center overflow-hidden rounded-xl border border-gray-200">
              <button
                type="button"
                onClick={handleDecrease}
                aria-label="Disminuir cantidad"
                className="h-full w-12 text-lg transition hover:bg-gray-100"
              >
                −
              </button>

              <span className="flex w-12 justify-center font-bold">
                {quantity}
              </span>

              <button
                type="button"
                onClick={handleIncrease}
                aria-label="Aumentar cantidad"
                className="h-full w-12 text-lg transition hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Acciones */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              🛒 Agregar al carrito
            </button>

            <button
              type="button"
              aria-label="Agregar a favoritos"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 text-2xl text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              ♡
            </button>
          </div>

          {/* Información adicional */}
          <div className="mt-8 grid gap-3 border-t border-gray-100 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-bold text-gray-900">
                🚚 Envío rápido
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Recíbelo pronto
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                🔒 Compra segura
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Pago protegido
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-900">
                ↩️ Devolución
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Fácil y rápida
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}