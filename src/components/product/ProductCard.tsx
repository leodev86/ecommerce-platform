interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

export default function ProductCard({
  name,
  description,
  price,
  rating,
  image,
}: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-yellow-500">
            ★ {rating}
          </span>

          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {description}
        </p>

        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Comprar
        </button>
      </div>
    </article>
  );
}