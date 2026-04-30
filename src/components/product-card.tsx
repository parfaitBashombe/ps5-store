import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCartPlus, FaArrowRight } from "react-icons/fa";
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
      className="card-glow group overflow-hidden rounded-3xl border backdrop-blur-xl"
      style={{
        borderColor: "var(--card-border)",
        background: "var(--card)",
      }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${isGrid ? "h-40" : "h-56"}`}
        style={{ position: "relative" }}
      >
        <Image
          src={product.main_image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(5,8,22,0.9) 0%, rgba(5,8,22,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Glow accent top-right */}
        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(0,102,255,0.25)",
            filter: "blur(40px)",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.4s",
          }}
          className="group-hover:opacity-100"
        />

        {/* Price badge on image */}
        <div
          className="absolute top-3 right-3 rounded-xl px-3 py-1 backdrop-blur-md"
          style={{
            background: "rgba(0,102,255,0.75)",
            border: "1px solid rgba(0,212,255,0.3)",
          }}
        >
          <span className="font-display text-sm font-bold text-white">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={isGrid ? "p-4" : "p-5"}>
        <h3
          className={`font-semibold leading-snug ${isGrid ? "text-base" : "text-lg"}`}
          style={{ color: "var(--foreground)" }}
        >
          {product.title}
        </h3>

        {/* Stars */}
        <div className="mt-3 flex items-center gap-1">
          {stars.map((filled, index) => (
            <FaStar
              key={index}
              size={11}
              style={{ color: filled ? "#fbbf24" : "var(--muted)" }}
            />
          ))}
          <span
            className="ml-2 text-xs"
            style={{ color: "var(--muted-foreground)" }}
          >
            {product.rating.toFixed(1)}
          </span>
        </div>

        {isGrid ? (
          <>
            <p
              className="mt-3 line-clamp-2 text-xs leading-5"
              style={{ color: "var(--muted-foreground)" }}
            >
              {product.description}
            </p>

            <Link
              href={`/products#${product.id}`}
              className="btn-glow mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
              style={{
                border: "1px solid rgba(0,102,255,0.3)",
                background: "rgba(0,102,255,0.1)",
                color: "var(--primary)",
              }}
            >
              View Details
              <FaArrowRight className="text-xs" />
            </Link>
          </>
        ) : (
          <button
            className="btn-glow mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold text-white transition"
            style={{ background: "var(--primary)" }}
          >
            <FaCartPlus />
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
