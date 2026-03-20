"use client";

import Link from "next/link";
import { Instagram, Menu, SunMedium, MoonStar, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "https://ig.me/m/royal_stitch6708", label: "Custom Tailoring", external: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // ✅ Initial theme load
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
    <header className="sticky top-0 z-40 border-b border-zinc-900/5 bg-background/80 backdrop-blur-md transition-colors duration-300 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105 dark:bg-zinc-100 dark:text-zinc-900">
            RS
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100">
              Royal Stitch
            </span>
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Bespoke Luxury Tailoring
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} target={link.external ? "_blank" : undefined} className="relative text-xs font-medium uppercase tracking-widest text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-zinc-900 after:transition-all after:duration-300 hover:after:w-full dark:after:bg-zinc-100">
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-4 border-l border-zinc-200 pl-6 dark:border-zinc-800">
            <a
              href="https://www.instagram.com/royal_stitch6708/"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:scale-110 hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-white dark:hover:text-zinc-900"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <button 
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:scale-110 hover:bg-zinc-900 hover:text-white dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-white dark:hover:text-zinc-900"
              aria-label="Toggle Theme"
            >
              {dark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all hover:bg-zinc-200 active:scale-95 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col border-t border-zinc-100 bg-background/50 px-6 py-6 backdrop-blur-md dark:border-zinc-800">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                target={link.external ? "_blank" : undefined} 
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <a
              href="https://www.instagram.com/royal_stitch6708/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              onClick={() => setOpen(false)}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                <Instagram className="h-4 w-4" />
              </span>
              Instagram
            </a>

            <button 
              onClick={() => { toggleTheme(); setOpen(false); }} 
              className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                {dark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              </span>
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

