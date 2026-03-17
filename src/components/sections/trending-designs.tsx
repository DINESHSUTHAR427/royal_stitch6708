import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ui/product-card";

export async function TrendingDesigns() {
  const trending = await prisma.product.findMany({
    where: { isTrending: true },
    take: 6,
    orderBy: { createdAt: "desc" },
  });

  if (!trending.length) return null;

  return (
    <section className="border-b border-zinc-900/5 bg-zinc-50/60 py-10 dark:bg-zinc-950/40 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Trending Now
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl dark:text-zinc-50">
              Designs loved on Instagram.
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

