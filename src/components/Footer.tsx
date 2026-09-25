import Link from "next/link";
import { socials, person } from "@/data/site";
import { SocialIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold">{person.name}</p>
            <p className="mt-1 text-sm text-muted">{person.location}</p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
                >
                  <SocialIcon icon={s.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:flex sm:gap-12">
            <div>
              <p className="mb-2 font-medium text-muted">Profiles</p>
              <ul className="space-y-1">
                <li><Link className="hover:text-accent" href="/">Software Engineer</Link></li>
                <li><Link className="hover:text-accent" href="/security">Security-Driven</Link></li>
                <li><Link className="hover:text-accent" href="/academic">Academic / Research</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-medium text-muted">Archive</p>
              <ul className="space-y-1">
                <li><Link className="hover:text-accent" href="/previous-design">Previous design, refreshed content</Link></li>
                <li><Link className="hover:text-accent" href="/previous">Previous site (as-is)</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {person.name}. Built with Next.js & TypeScript.
        </p>
      </div>
    </footer>
  );
}
