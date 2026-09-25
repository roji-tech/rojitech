import { person, socials, resumeFiles } from "@/data/site";
import { SocialIcon } from "../icons";

export default function Hero({
  eyebrow,
  headline,
  tagline,
  resumeHref = resumeFiles.main,
  resumeLabel = "Download Resume",
}: {
  eyebrow: string;
  headline: string;
  tagline: string;
  resumeHref?: string;
  resumeLabel?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {person.name}
        </h1>
        <h2 className="max-w-2xl text-xl text-muted sm:text-2xl">{headline}</h2>
        <p className="max-w-xl text-sm text-muted">
          {tagline} · {person.location}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={resumeHref}
            download
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            {resumeLabel}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-4 flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
            >
              <SocialIcon icon={s.icon} size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
