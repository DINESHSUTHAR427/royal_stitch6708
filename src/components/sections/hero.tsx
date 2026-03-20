import Link from "next/link";
import Image from "next/image";
import HeroAnimation from "../sections/HeroAnimation";

export function Hero() {
  return (
    <section className="py-12 border-b border-zinc-900/5 bg-gradient-to-b from-zinc-50 to-zinc-100/40 dark:from-zinc-950 dark:to-zinc-900/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.1fr,0.9fr] md:px-6 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <HeroAnimation type="tag">
            Bespoke Luxury Tailoring
          </HeroAnimation>

          <HeroAnimation type="title" delay={0.1}>
            <>
              Every stitch
              <span className="mx-2 inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-base font-medium uppercase tracking-[0.25em] text-zinc-50 align-middle dark:bg-zinc-100 dark:text-zinc-900">
                Royal
              </span>
              by design.
            </>
          </HeroAnimation>

          <HeroAnimation delay={0.2}>
            Royal Stitch crafts contemporary silhouettes with couture-level
            detail – from everyday essentials to wedding ensembles curated for
            your story.
          </HeroAnimation>

          <HeroAnimation type="buttons" delay={0.3}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://ig.me/m/royal_stitch6708"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900"
              >
                Book Custom Stitching
              </a>

              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-xs font-semibold uppercase"
              >
                View Collections
              </Link>
            </div>
          </HeroAnimation>
        </div>

        {/* RIGHT IMAGE */}
        <HeroAnimation type="image" delay={0.2}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2.25rem]">
            <Image
              src="https://res.cloudinary.com/dfwjtjlaq/image/upload/v1773987033/hero_image_1_unkwqo.jpg"
              alt="Royal Stitch couture look"
              fill
              className="object-cover"
            />
          </div>
        </HeroAnimation>

      </div>
    </section>
  );
}

