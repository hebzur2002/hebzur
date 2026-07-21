"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#blog", label: "blog" },
  { href: "#testimonials", label: "testimonials" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-sm font-bold tracking-tight">
          hebzur<span className="text-teal">@</span>portfolio
        </a>
        <ul className="hidden gap-6 font-mono text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-teal">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal"
        >
          {mounted ? (theme === "dark" ? "☾ dark" : "☀ light") : "theme"}
        </button>
      </nav>
    </header>
  );
}
