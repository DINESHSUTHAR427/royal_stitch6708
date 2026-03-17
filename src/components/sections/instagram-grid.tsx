import Image from "next/image";

type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
};

async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    // Fallback to static placeholders; user can configure real tokens in env.
    return [
      {
        id: "placeholder-1",
        media_url: "/insta-1.jpg",
        permalink: "https://www.instagram.com/royal_stitch6708/",
      },
      {
        id: "placeholder-2",
        media_url: "/insta-2.jpg",
        permalink: "https://www.instagram.com/royal_stitch6708/",
      },
      {
        id: "placeholder-3",
        media_url: "/insta-3.jpg",
        permalink: "https://www.instagram.com/royal_stitch6708/",
      },
      {
        id: "placeholder-4",
        media_url: "/insta-4.jpg",
        permalink: "https://www.instagram.com/royal_stitch6708/",
      },
    ];
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,media_url,permalink&access_token=${token}`,
      {
        // Revalidate every 10 minutes
        next: { revalidate: 600 },
      },
    );

    if (!res.ok) throw new Error("Failed to fetch Instagram media");
    const data = (await res.json()) as { data?: InstagramPost[] };
    return data.data ?? [];
  } catch {
    return [];
  }
}

export async function InstagramGrid() {
  const posts = await fetchInstagramPosts();

  if (!posts.length) return null;

  return (
    <section className="border-b border-zinc-900/5 bg-zinc-50/80 py-10 dark:bg-zinc-950/40 md:py-14">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-zinc-500">
              Instagram
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl dark:text-zinc-50">
              From the Royal Stitch feed.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/royal_stitch6708/"
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline md:inline-block dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            View on Instagram
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
          {posts.slice(0, 8).map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-900/80"
            >
              <Image
                src={post.media_url}
                alt="Royal Stitch Instagram look"
                fill
                sizes="(min-width: 1024px) 180px, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/royal_stitch6708/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline md:hidden dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          View on Instagram
        </a>
      </div>
    </section>
  );
}

