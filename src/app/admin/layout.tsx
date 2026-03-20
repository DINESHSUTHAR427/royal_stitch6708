import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/admin/login");
  }

  return (
    <div className="bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl gap-6 px-4 py-8 md:px-6">
        <aside className="hidden w-56 flex-shrink-0 flex-col gap-4 rounded-3xl border border-zinc-900/5 bg-zinc-50/80 p-5 text-sm shadow-sm shadow-zinc-900/5 dark:bg-zinc-900/40 md:flex">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-zinc-500">
            Admin
          </p>
          <nav className="space-y-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            <AdminLink href="/admin">Overview</AdminLink>
            <AdminLink href="/admin/products">Products</AdminLink>
            <AdminLink href="/admin/bookings">Booking Requests</AdminLink>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

function AdminLink({ href, children }: { href: string; children: ReactNode }) {
  const isActive =
    typeof window !== "undefined" && window.location.pathname === href;

  return (
    <Link
      href={href}
      className={`block rounded-full px-3 py-2 ${
        isActive
          ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
          : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
      }`}
    >
      {children}
    </Link>
  );
}

