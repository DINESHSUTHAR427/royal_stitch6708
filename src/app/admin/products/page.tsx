import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

async function createProduct(formData: FormData) {
  "use server";

  const title = String(formData.get("title") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const price = String(formData.get("price") || "").trim();
  const image = String(formData.get("image") || "").trim();
  const isFeatured = formData.get("isFeatured") === "on";
  const isTrending = formData.get("isTrending") === "on";

  if (!title || !description || !category || !price || !image) {
    throw new Error("Missing required fields");
  }

  await prisma.product.create({
    data: {
      title,
      description,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      category: category as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      price: price as any,
      image,
      isFeatured,
      isTrending,
    },
  });

  revalidatePath("/gallery");
  revalidatePath("/admin/products");
}

async function deleteProduct(formData: FormData) {
  "use server";
  const id = String(formData.get("id") || "");
  if (!id) return;
  await prisma.product.delete({ where: { id } });
  revalidatePath("/gallery");
  revalidatePath("/admin/products");
}

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Products
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
          Manage designs & gallery.
        </h1>
      </div>

      <form
        action={createProduct}
        className="space-y-4 rounded-3xl border border-zinc-900/5 bg-zinc-50/80 p-5 text-sm shadow-sm shadow-zinc-900/5 dark:bg-zinc-900/40"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
          Add new design
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Title
            </label>
            <input
              name="title"
              required
              className="h-9 w-full rounded-full border border-zinc-200 bg-white px-3 text-xs text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
              placeholder="Emerald bridal lehenga set"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Category
            </label>
            <select
              name="category"
              required
              className="h-9 w-full rounded-full border border-zinc-200 bg-white px-3 text-xs text-zinc-800 outline-none ring-0 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
            >
              <option value="">Select</option>
              <option value="MEN">Men</option>
              <option value="WOMEN">Women</option>
              <option value="WEDDING">Wedding</option>
              <option value="CUSTOM">Custom</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            Description
          </label>
          <textarea
            name="description"
            rows={3}
            required
            className="w-full rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
            placeholder="Fabric, detailing, embroidery, styling notes…"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Price (₹)
            </label>
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              required
              className="h-9 w-full rounded-full border border-zinc-200 bg-white px-3 text-xs text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
              placeholder="9500"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Image URL
            </label>
            <input
              name="image"
              required
              className="h-9 w-full rounded-full border border-zinc-200 bg-white px-3 text-xs text-zinc-800 outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200 dark:focus:ring-zinc-200"
              placeholder="Paste Cloudinary URL or image link"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs">
          <label className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
            <input type="checkbox" name="isFeatured" className="h-3 w-3" />{" "}
            Featured
          </label>
          <label className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
            <input type="checkbox" name="isTrending" className="h-3 w-3" />{" "}
            Trending
          </label>
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-zinc-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Save Design
        </button>
      </form>

      <div className="space-y-3 text-sm">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
          Existing designs
        </p>
        <div className="divide-y divide-zinc-900/5 overflow-hidden rounded-3xl border border-zinc-900/5 bg-zinc-50/80 text-xs shadow-sm shadow-zinc-900/5 dark:bg-zinc-900/40">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between gap-3 px-4 py-3"
            >
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  {p.title}
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-zinc-500">
                  {p.category} • ₹{p.price.toString()}
                </p>
              </div>
              <form action={deleteProduct}>
                <input type="hidden" name="id" value={p.id} />
                <button
                  type="submit"
                  className="rounded-full border border-zinc-300 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  Delete
                </button>
              </form>
            </div>
          ))}
          {products.length === 0 && (
            <p className="px-4 py-6 text-center text-xs text-zinc-500">
              No products yet. Start by adding your first Royal Stitch design.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

