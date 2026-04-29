import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCartPlus } from "react-icons/fa";
import type { Product } from "@/lib/data/product";

type ProductCardProps = {
  product: Product;
  variant?: "featured" | "grid";
};

const ProductCard = ({ product, variant = "featured" }: ProductCardProps) => {
  const stars = Array.from(
    { length: 5 },
    (_, index) => index < Math.round(product.rating),
  );

  const isGrid = variant === "grid";

  return (
    <article
      id={product.id}
      className="group overflow-hidden rounded-3xl border border-card-border bg-card shadow-(--shadow-glow) backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
    >
      <div className={`relative overflow-hidden ${isGrid ? "h-40" : "h-56"}`}>
        <Image
          src={product.main_image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
      </div>

      <div className={isGrid ? "p-4" : "p-5"}>
        <h3
          className={`font-semibold text-foreground ${
            isGrid ? "text-base" : "text-xl"
          }`}
        >
          {product.title}
        </h3>

        <p
          className={`font-bold text-primary ${
            isGrid ? "mt-1 text-lg" : "mt-2 text-2xl"
          }`}
        >
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-3 flex items-center gap-1">
          {stars.map((filled, index) => (
            <FaStar
              key={index}
              size={12}
              className={filled ? "text-yellow-400" : "text-muted"}
            />
          ))}

          <span className="ml-2 text-xs text-muted-foreground">
            {product.rating.toFixed(1)}
          </span>
        </div>

        {isGrid ? (
          <>
            <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted-foreground">
              {product.description}
            </p>

            <Link
              href={`/products#${product.id}`}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
            >
              View Details
            </Link>
          </>
        ) : (
          <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover">
            <FaCartPlus />
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
