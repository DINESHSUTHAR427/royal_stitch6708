import { prisma } from "@/lib/prisma";
import { ProductCard } from "@/components/ui/product-card";

const PAGE_SIZE = 9;

interface GalleryPageProps {
  searchParams: Promise<{
    page?: string;
    q?: string;
    category?: string;
  }>;
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  // ✅ FIX: unwrap searchParams
  const params = await searchParams;

  const page = Number(params.page ?? "1") || 1;
  const q = params.q?.trim() ?? "";
  const category = params.category;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = {};

  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } },
    ];
  }

  if (category && ["MEN", "WOMEN", "WEDDING", "CUSTOM"].includes(category)) {
    where.category = category;
  }

  const [total, products] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="border-b border-zinc-900/5 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Gallery
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
              Royal Stitch designs & silhouettes.
            </h1>
          </div>

          <form className="flex flex-col gap-3 text-xs md:flex-row md:items-center">
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search designs, fabrics, occasions…"
              className="h-9 w-full rounded-full border border-zinc-200 bg-white px-4 text-xs text-zinc-700 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 md:w-72"
            />

            <select
              name="category"
              defaultValue={category ?? ""}
              className="h-9 rounded-full border border-zinc-200 bg-white px-3 text-xs text-zinc-700 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            >
              <option value="">All Categories</option>
              <option value="MEN">Men</option>
              <option value="WOMEN">Women</option>
              <option value="WEDDING">Wedding</option>
              <option value="CUSTOM">Custom</option>
            </select>
          </form>
        </header>

        {/* PRODUCTS GRID */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {products.length === 0 && (
          <p className="mt-10 text-sm text-zinc-500">
            No designs found. Try a different search or category.
          </p>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-3 text-xs">
            <a
              href={`?page=${Math.max(1, page - 1)}&q=${encodeURIComponent(
                q
              )}&category=${category ?? ""}`}
              aria-disabled={page === 1}
              className="inline-flex h-8 items-center justify-center rounded-full border border-zinc-200 px-4 text-xs font-medium text-zinc-700 hover:bg-zinc-100 aria-disabled:pointer-events-none aria-disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Previous
            </a>

            <span className="text-zinc-500">
              Page {page} of {totalPages}
            </span>

            <a
              href={`?page=${Math.min(
                totalPages,
                page + 1
              )}&q=${encodeURIComponent(q)}&category=${category ?? ""}`}
              aria-disabled={page === totalPages}
              className="inline-flex h-8 items-center justify-center rounded-full border border-zinc-200 px-4 text-xs font-medium text-zinc-700 hover:bg-zinc-100 aria-disabled:pointer-events-none aria-disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Next
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

