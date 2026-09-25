import { SkillCategory } from "@/lib/types";

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  return (
    <section id="skills" className="border-b border-border bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Skills
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="text-sm font-semibold">{cat.title}</h3>
              {cat.description && (
                <p className="mt-1 text-xs text-muted">{cat.description}</p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
