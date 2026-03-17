"use client";

import Link from "next/link";
import { Instagram, Menu, SunMedium, MoonStar, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Custom Tailoring" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // ✅ Initial theme load
  useEffect(() => {
    setMounted(true);

    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = stored === "dark" || (!stored && prefersDark);

    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ✅ Toggle theme
  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  // ✅ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/5 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white dark:bg-zinc-100 dark:text-zinc-900">
            RS
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Royal Stitch
            </span>
            <span className="text-xs text-zinc-500">
              Bespoke Luxury Tailoring
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-xs uppercase text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
              {link.label}
            </Link>
          ))}

          <a
            href="https://www.instagram.com/royal_stitch6708/"
            target="_blank"
            rel="noreferrer"
            className="border px-3 py-1 text-xs uppercase"
          >
            <Instagram className="h-3 w-3" />
          </a>

          <button onClick={toggleTheme}>
            {dark ? <SunMedium /> : <MoonStar />}
          </button>
        </nav>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden p-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}

          <button onClick={toggleTheme} className="mt-4">
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </header>
  );
}

