"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { resumeFiles } from "@/data/site";

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const personaLinks = [
  { href: "/", label: "Software" },
  { href: "/security", label: "Security" },
  { href: "/academic", label: "Academic" },
];

export default function Nav() {
  const pathname = usePathname();
  const isPersonaPage = personaLinks.some((p) => p.href === pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Abdullah Jamiu Akorede
        </Link>

        {isPersonaPage && (
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {sectionLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-accent">
                {l.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-border p-1 text-xs sm:flex">
            {personaLinks.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`rounded-full px-3 py-1 transition ${
                  pathname === p.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {p.label}
              </Link>
            ))}
          </div>
          <a
            href={resumeFiles.main}
            download
            className="hidden rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground transition hover:opacity-90 sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
