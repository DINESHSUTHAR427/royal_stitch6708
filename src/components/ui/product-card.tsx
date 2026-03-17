import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/generated/prisma";

type ProductWithMeta = Pick<
  Product,
  "id" | "title" | "description" | "category" | "price" | "image"
>;

interface ProductCardProps {
  product: ProductWithMeta;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/gallery/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-900/5 bg-zinc-50/60 shadow-sm shadow-zinc-900/5 transition hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-md hover:shadow-zinc-900/10 dark:bg-zinc-900/40"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900/80">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
        <div className="flex items-center justify-between text-[0.65rem] font-medium uppercase tracking-[0.25em] text-zinc-500">
          <span>{product.category}</span>
          <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[0.6rem] text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900">
            Royal Stitch
          </span>
        </div>
        <h3 className="line-clamp-1 text-sm font-semibold tracking-wide text-zinc-900 dark:text-zinc-50">
          {product.title}
        </h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-zinc-500">
          {product.description}
        </p>
        <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">
          ₹{product.price.toString()}
        </p>
      </div>
    </Link>
  );
}

