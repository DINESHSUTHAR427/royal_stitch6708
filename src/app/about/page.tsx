export default function AboutPage() {
  return (
    <div className="border-b border-zinc-900/5 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
          Our Story
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-50">
          Royal Stitch – Crafting modern couture with timeless technique.
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          <p>
            Royal Stitch was born from a simple idea – that everyday dressing
            and once-in-a-lifetime occasions both deserve the same level of
            attention, precision and artistry. What began as a small tailoring
            studio has grown into a destination for contemporary silhouettes,
            statement weddingwear and impeccably finished menswear and womenswear.
          </p>
          <p>
            Each piece is cut and finished in our studio with a focus on
            structure, comfort and movement. From hand-picked fabrics and
            embroidery to placement of every seam, our team obsesses over the
            details so you can move through your moment with confidence.
          </p>
          <p>
            Our Instagram gallery is a living sketchbook of the looks we
            create – candid fittings, final looks and behind-the-scenes
            glimpses from the studio floor.
          </p>
        </div>

        <div className="mt-10 grid gap-6 text-sm md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-900/5 bg-zinc-50/80 p-5 dark:bg-zinc-900/40">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Tailor-in-Chief
            </p>
            <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Years of studio experience
            </p>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
              From everyday alterations to fully bespoke couture, our team
              brings deep craft knowledge to each stitch.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-900/5 bg-zinc-50/80 p-5 dark:bg-zinc-900/40">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Craft
            </p>
            <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Pattern, fit & finish
            </p>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
              We blend traditional pattern-making with modern cuts, always
              prioritising structure and comfort.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-900/5 bg-zinc-50/80 p-5 dark:bg-zinc-900/40">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Clients
            </p>
            <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              Repeat stories & referrals
            </p>
            <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
              Our favourite compliment is when a client returns with their
              family and friends for their big days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

