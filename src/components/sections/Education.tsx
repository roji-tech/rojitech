import { CertificationEntry, EducationEntry, LanguageEntry } from "@/lib/types";

export default function Education({
  education,
  certifications,
  languages,
  showDissertation = true,
}: {
  education: EducationEntry;
  certifications: CertificationEntry[];
  languages: LanguageEntry[];
  showDissertation?: boolean;
}) {
  return (
    <section id="education" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Education
        </h2>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h3 className="text-base font-semibold">{education.institution}</h3>
            <p className="mt-1 text-sm text-muted">
              {education.degree}
              {education.detail ? ` — ${education.detail}` : ""}
            </p>
            <p className="text-sm text-muted">
              {education.start} – {education.end}
            </p>

            {showDissertation && education.dissertation && (
              <div className="mt-4 rounded-xl border border-border bg-background-alt p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  Dissertation
                </p>
                <p className="mt-1 text-sm font-medium">
                  {education.dissertation.topic}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {education.dissertation.description}
                </p>
              </div>
            )}

            {education.relevantCourses && (
              <div className="mt-4 flex flex-wrap gap-2">
                {education.relevantCourses.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-background-alt px-2.5 py-0.5 text-xs text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
                Certifications
              </p>
              <ul className="space-y-2 text-sm">
                {certifications.map((c) => (
                  <li key={c.name} className="flex justify-between gap-3">
                    <span>
                      {c.name} <span className="text-muted">· {c.issuer}</span>
                    </span>
                    {c.year && <span className="text-muted">{c.year}</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
                Languages
              </p>
              <ul className="space-y-1 text-sm text-muted">
                {languages.map((l) => (
                  <li key={l.name} className="flex justify-between gap-3">
                    <span>{l.name}</span>
                    <span>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
