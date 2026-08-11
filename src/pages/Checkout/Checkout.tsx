import { Link } from "react-router-dom";
import { useState} from "react";
import { useCart } from "@/context/useCart";

export default function Checkout() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    postalCode: "",
  });

  console.log("FORMULARIO:", formData);
  
  const {
    items,
    totalItems,
    totalPrice,
  } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-6xl">🛒</div>

          <h1 className="mt-6 text-3xl font-black text-gray-900">
            Tu carrito está vacío
          </h1>

          <p className="mt-3 text-gray-500">
            Agrega algunos productos antes de continuar con tu compra.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            Explorar productos
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-blue-600">
            Finalizar compra
          </p>

          <h1 className="mt-2 text-4xl font-black tracking-tight text-gray-900">
            Checkout
          </h1>

          <p className="mt-3 text-gray-500">
            Completa tus datos para finalizar tu pedido.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          {/* Formulario */}
          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-gray-900">
              Información de envío
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Nombre completo
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Teléfono
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+51 999 999 999"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Ciudad */}
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Ciudad
                </label>

                <input
                  id="city"
                  type="text"
                  placeholder="Ciudad"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Dirección */}
              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Dirección
                </label>

                <input
                  id="address"
                  type="text"
                  placeholder="Calle, número, departamento..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Código postal */}
              <div>
                <label
                  htmlFor="postalCode"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Código postal
                </label>

                <input
                  id="postalCode"
                  type="text"
                  placeholder="15000"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Método de pago */}
            <div className="mt-10 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-black text-gray-900">
                Método de pago
              </h2>

              <div className="mt-6 space-y-3">
                <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-blue-500 bg-blue-50 p-4">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    defaultChecked
                    className="h-4 w-4"
                  />

                  <div>
                    <p className="font-bold text-gray-900">
                      💳 Tarjeta de crédito o débito
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Pago seguro con tarjeta.
                    </p>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:border-gray-300">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    className="h-4 w-4"
                  />

                  <div>
                    <p className="font-bold text-gray-900">
                      💵 Pago contra entrega
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Paga cuando recibas tu pedido.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Resumen */}
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-gray-900">
              Resumen del pedido
            </h2>

            <div className="mt-6 space-y-5">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-900">
                      {item.product.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Cantidad: {item.quantity}
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      $
                      {(
                        item.product.price * item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-6 border-t border-gray-100" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Productos ({totalItems})
                </span>

                <span className="font-semibold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Envío
                </span>

                <span className="font-bold text-green-600">
                  Gratis
                </span>
              </div>
            </div>

            <div className="my-6 border-t border-gray-100" />

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                Total
              </span>

              <span className="text-3xl font-black text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Confirmar pedido
            </button>

            <Link
              to="/cart"
              className="mt-3 block text-center text-sm font-semibold text-gray-500 transition hover:text-gray-900"
            >
              ← Volver al carrito
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

