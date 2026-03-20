import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface GalleryDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function GalleryDetailPage({
  params,
}: GalleryDetailPageProps) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) return notFound();

  return (
    <div className="border-b border-zinc-900/5 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <Link
          href="/gallery"
          className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 underline-offset-4 hover:text-zinc-900 hover:underline dark:hover:text-zinc-100"
        >
          Back to Gallery
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-zinc-900/5 bg-zinc-900 shadow-xl shadow-zinc-900/20 dark:bg-zinc-900">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              {product.category}
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
              {product.title}
            </h1>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {product.description}
            </p>
            <div className="pt-4 text-xs text-zinc-500">
              <p>
                Each Royal Stitch piece is tailored to your measurements. Final
                pricing may vary based on fabric, embroidery and detailing.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/919063124594?text=${encodeURIComponent(
                  `Hi, I'm interested in "${product.title}" from Royal Stitch.`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

