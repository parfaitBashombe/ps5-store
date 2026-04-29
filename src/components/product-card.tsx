import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCartPlus } from "react-icons/fa";
import type { Product } from "@/lib/data/product";

type ProductCardProps = {
  product: Product;
  variant?: "featured" | "grid";
};

export default function ProductCard({
  product,
  variant = "featured",
}: ProductCardProps) {
  const stars = Array.from(
    { length: 5 },
    (_, index) => index < Math.round(product.rating),
  );

  return (
    <article
      id={product.id}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-xl shadow-blue-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/8"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.main_image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0f1f] via-transparent to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {product.title}
            </h3>
            <p className="mt-2 text-2xl font-bold text-blue-400">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1">
          {stars.map((filled, index) => (
            <FaStar
              key={index}
              className={filled ? "text-yellow-400" : "text-slate-600"}
              size={14}
            />
          ))}
          <span className="ml-2 text-sm text-slate-300">
            {product.rating.toFixed(1)} ({product.reviews} reviews)
          </span>
        </div>

        {variant === "grid" ? (
          <>
            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-300">
              {product.description}
            </p>

            <Link
              href={`/products#${product.id}`}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-3 font-semibold text-blue-100 transition-all duration-300 hover:bg-blue-500/20 hover:text-white"
            >
              View Details
            </Link>
          </>
        ) : (
          <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400">
            <FaCartPlus />
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
}
