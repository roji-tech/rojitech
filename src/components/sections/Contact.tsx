import { person, socials } from "@/data/site";
import { SocialIcon } from "../icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Contact
        </h2>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something worth shipping.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Open to full-stack, mobile and security-minded engineering roles and
          contracts. Based in {person.location}, working with teams anywhere.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${person.email}`}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            {person.email}
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {socials
            .filter((s) => s.icon !== "mail")
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
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
