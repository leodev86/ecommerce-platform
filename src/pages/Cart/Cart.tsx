import { Link } from "react-router-dom";
import { useCart } from "@/context/useCart";

export default function Cart() {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  console.log("CARRITO:", items);
console.log("TOTAL:", totalPrice);

  if (items.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-5xl">
          🛒
        </div>

        <h1 className="mt-6 text-3xl font-black text-gray-900">
          Tu carrito está vacío
        </h1>

        <p className="mt-3 max-w-md text-gray-500">
          Todavía no has agregado ningún producto.
          Explora nuestra tienda y encuentra algo que te guste.
        </p>

        <Link
          to="/products"
          className="mt-8 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Explorar productos →
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Encabezado */}
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Tu compra
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-900">
            Mi carrito
          </h1>

          <p className="mt-2 text-gray-500">
            Revisa tus productos antes de continuar.
          </p>
        </div>

        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-semibold text-red-500 transition hover:text-red-700"
        >
          Vaciar carrito
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        {/* Productos */}
        <div className="space-y-4">
          {items.map((item) => {
            const itemTotal =
              item.product.price * item.quantity;

            return (
              <article
                key={item.product.id}
                className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                {/* Imagen */}
                <Link
                  to={`/products/${item.product.id}`}
                  className="shrink-0 overflow-hidden rounded-xl bg-gray-100"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-32 w-full object-cover transition duration-300 hover:scale-105 sm:h-28 sm:w-28"
                  />
                </Link>

                {/* Información */}
                <div className="flex-1">
                  <Link
                    to={`/products/${item.product.id}`}
                    className="text-lg font-bold text-gray-900 transition hover:text-blue-600"
                  >
                    {item.product.name}
                  </Link>

                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {item.product.description}
                  </p>

                  <p className="mt-3 font-bold text-gray-900">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>

                {/* Cantidad */}
                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="flex h-10 items-center overflow-hidden rounded-lg border border-gray-200">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity - 1,
                        )
                      }
                      className="h-full w-10 text-lg transition hover:bg-gray-100"
                      aria-label="Disminuir cantidad"
                    >
                      −
                    </button>

                    <span className="flex w-10 justify-center text-sm font-bold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.quantity + 1,
                        )
                      }
                      className="h-full w-10 text-lg transition hover:bg-gray-100"
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-black text-gray-900">
                      ${itemTotal.toFixed(2)}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.product.id)
                      }
                      className="mt-1 text-xs font-semibold text-red-500 transition hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Resumen */}
        <aside className="h-fit rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <h2 className="text-xl font-black text-gray-900">
            Resumen del pedido
          </h2>

          <div className="mt-6 space-y-4 border-b border-gray-200 pb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Productos
              </span>

              <span className="font-semibold text-gray-900">
                {items.reduce(
                  (total, item) => total + item.quantity,
                  0,
                )}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">
                Envío
              </span>

              <span className="font-semibold text-green-600">
                Gratis
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <span className="font-bold text-gray-700">
              Total
            </span>

            <span className="text-3xl font-black text-gray-900">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

        <Link
            to="/checkout"
            className="mt-6 flex w-full items-center justify-center           rounded-xl bg-blue-600 px-6 py-4 font-bold text-white           transition hover:bg-blue-700"
            >
            Continuar compra →
            </Link>

        <Link
            to="/products"
            className="mt-3 block text-center text-sm font-semibold text-gray-600 transition hover:text-blue-600"
          >
            ← Seguir comprando
          </Link>
        </aside>
      </div>
    </main>
  );
}