import Link from "next/link";

export function BookingCta() {
  return (
    <section className="bg-zinc-900 py-10 text-zinc-50 md:py-14 dark:bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-400">
            Custom Tailoring
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
            Ready for your next Royal Stitch moment?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">
            Share your design vision, fabric preferences and measurements. Our
            team will connect with you over WhatsApp to confirm details and
            timelines.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="https://ig.me/m/royal_stitch6708"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-zinc-50 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            Chat on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

