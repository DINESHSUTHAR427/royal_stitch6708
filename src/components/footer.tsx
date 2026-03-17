import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900/5 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="text-xs">
          © {new Date().getFullYear()} Royal Stitch. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Terms
          </Link>
          <span className="text-zinc-400">
            Crafted with care in every stitch.
          </span>
        </div>
      </div>
    </footer>
  );
}

