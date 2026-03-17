import { prisma } from "@/lib/prisma";

export async function TestimonialsSection() {
  const testimonials = await prisma.testimonial.findMany({
    take: 6,
    orderBy: { createdAt: "desc" },
  });

  if (!testimonials.length) return null;

  return (
    <section className="border-b border-zinc-900/5 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Testimonials
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl dark:text-zinc-50">
              Stories stitched with trust.
            </h2>
          </div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex h-full flex-col justify-between rounded-3xl border border-zinc-900/5 bg-zinc-50/80 p-5 text-sm shadow-sm shadow-zinc-900/5 dark:bg-zinc-900/40"
            >
              <p className="line-clamp-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
                “{t.review}”
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-medium text-zinc-800 dark:text-zinc-100">
                  {t.customerName}
                </span>
                <span className="text-amber-500">
                  {"★".repeat(t.rating)}{" "}
                  <span className="sr-only">{t.rating} star rating</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

