import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function AdminOverviewPage() {
  const session = await getServerSession(authOptions);

  // ❌ Not logged in
  if (!session) {
    redirect("/admin/login");
  }

  // ❌ Not admin
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((session.user as any)?.role !== "ADMIN") {
    redirect("/admin/login");
  }

  // ✅ Only admin reaches here
  const [products, bookings] = await Promise.all([
    prisma.product.count(),
    prisma.bookingRequest.count(),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Dashboard
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
          Royal Stitch studio overview.
        </h1>
      </div>

      <div className="grid gap-4 text-sm md:grid-cols-3">
        <div className="p-5 border rounded-2xl border-zinc-900/5 bg-zinc-50/80 dark:bg-zinc-900/40">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Designs
          </p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            {products}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Total products in the gallery.
          </p>
        </div>

        <div className="p-5 border rounded-2xl border-zinc-900/5 bg-zinc-50/80 dark:bg-zinc-900/40">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Custom bookings
          </p>
          <p className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            {bookings}
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Requests submitted via the website.
          </p>
        </div>
      </div>
    </div>
  );
}
