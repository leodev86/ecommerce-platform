import ProductCard from "./ProductCard";

const products = [
  {
    name: "Auriculares Pro",
    description:
      "Auriculares inalámbricos con cancelación de ruido.",
    price: 79.99,
    rating: 4.8,
    discount: 20,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Smart Watch",
    description:
      "Reloj inteligente para deporte y uso diario.",
    price: 129.99,
    rating: 4.7,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cámara Compacta",
    description:
      "Captura tus mejores momentos con gran calidad.",
    price: 249.99,
    rating: 4.6,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Zapatillas Urban",
    description:
      "Diseño moderno y comodidad para todos los días.",
    price: 64.99,
    rating: 4.9,
    discount: 25,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
}