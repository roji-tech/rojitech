export default function About({
  summary,
  summarySecondary,
}: {
  summary: string;
  summarySecondary?: string;
}) {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          About
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground">
          <p>{summary}</p>
          {summarySecondary && <p className="text-muted">{summarySecondary}</p>}
        </div>
      </div>
    </section>
  );
}
