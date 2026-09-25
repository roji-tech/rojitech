import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { ProjectEntry } from "@/lib/types";

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-video w-full overflow-hidden bg-background-alt">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-background-alt to-background-alt">
            <span className="text-3xl font-semibold text-accent/70">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-sm font-semibold">{project.name}</h3>
        <p className="text-sm text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-background-alt px-2.5 py-0.5 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4 pt-2 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-accent hover:underline"
            >
              <FiExternalLink size={14} /> Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-accent"
            >
              <FiGithub size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({
  projects,
  title = "Projects",
  viewAllHref,
}: {
  projects: ProjectEntry[];
  title?: string;
  viewAllHref?: string;
}) {
  return (
    <section id="projects" className="border-b border-border bg-background-alt">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
            {title}
          </h2>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="text-xs text-muted underline decoration-dotted underline-offset-4 hover:text-accent"
            >
              View all projects →
            </a>
          )}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
