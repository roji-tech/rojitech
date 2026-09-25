import { ExperienceEntry } from "@/lib/types";
import { resumeFiles } from "@/data/site";

export default function Experience({
  entries,
  resumeHref = resumeFiles.main,
}: {
  entries: ExperienceEntry[];
  resumeHref?: string;
}) {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </h2>
          <a
            href={resumeHref}
            download
            className="text-xs text-muted underline decoration-dotted underline-offset-4 hover:text-accent"
          >
            Full work history in the résumé →
          </a>
        </div>

        <div className="mt-8 space-y-10">
          {entries.map((e) => (
            <div
              key={`${e.company}-${e.role}`}
              className="grid gap-2 sm:grid-cols-[180px_1fr]"
            >
              <div className="text-sm text-muted">
                {e.start} — {e.end}
              </div>
              <div>
                <h3 className="text-base font-semibold">
                  {e.role} ·{" "}
                  {e.companyUrl ? (
                    <a
                      href={e.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {e.company}
                    </a>
                  ) : (
                    e.company
                  )}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-background-alt px-2.5 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
