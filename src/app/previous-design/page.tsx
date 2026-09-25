import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { person, socials, resumeFiles, personas } from "@/data/site";
import { SocialIcon } from "@/components/icons";
import { featuredExperience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { education, certifications } from "@/data/education";

export const metadata = {
  title: "Abdullah Jamiu — Portfolio (Previous Design)",
  description:
    "The original portfolio's dark-blue visual design, updated with current content.",
};

// Recreates the previous CRA/styled-components look (dark navy + bright
// blue accents, per the old StyleGlobal.js palette) with refreshed content.
// Kept self-contained/inline-styled on purpose — it's an archived look, not
// something meant to share components with the current design system.
export default function PreviousDesignPage() {
  const bg = "#1f1f38";
  const card = "#26264a";
  const blue1 = "#0769ff";
  const blue2 = "#4db5ff";
  const text = "rgba(255,255,255,0.8)";

  return (
    <div style={{ background: bg, color: text }} className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-4 text-xs text-white/40">
        Archived look — same design as the original site, updated content. See{" "}
        <a href="/" className="underline">
          the current site
        </a>{" "}
        or{" "}
        <a href="/previous" className="underline">
          the original as-is
        </a>
        .
      </div>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16">
        <p style={{ color: blue2 }} className="text-sm">
          Hello I&apos;m
        </p>
        <h1 className="text-4xl font-bold" style={{ color: "#fff" }}>
          {person.name}
        </h1>
        <p className="text-xl" style={{ color: blue2 }}>
          {personas.software.headline}
        </p>
        <p className="text-sm">
          React &middot; Next.js &middot; React Native &middot; NestJS &middot; Golang &middot; AWS &middot; AI-Augmented Development
        </p>
        <p className="text-sm">
          <b>Location:</b> {person.location}
        </p>

        <div className="mt-2 flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === "mail" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ border: `1px solid ${blue2}`, color: blue2 }}
            >
              <SocialIcon icon={s.icon} size={16} />
            </a>
          ))}
        </div>

        <div className="mt-4 flex gap-3">
          <a
            href={resumeFiles.main}
            download
            className="rounded-full px-5 py-2.5 text-sm font-medium text-white"
            style={{ background: blue1 }}
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full px-5 py-2.5 text-sm font-medium"
            style={{ border: `1px solid ${blue1}`, color: blue2 }}
          >
            Hire Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="mb-1 text-2xl font-bold text-white">About Me</h2>
        <div className="mb-6 h-1 w-14 rounded" style={{ background: blue1 }} />
        <p className="max-w-2xl leading-relaxed">{personas.software.summary}</p>
        <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: blue2 }}>
          {personas.software.summarySecondary}
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="mb-1 text-2xl font-bold text-white">Skills</h2>
        <div className="mb-6 h-1 w-14 rounded" style={{ background: blue1 }} />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl p-5"
              style={{ background: card }}
            >
              <h3 className="mb-3 text-sm font-semibold" style={{ color: blue2 }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="rounded-full px-3 py-1 text-xs"
                    style={{ border: `1px solid ${blue1}` }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="exp" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="mb-1 text-2xl font-bold text-white">Experience</h2>
        <div className="mb-6 h-1 w-14 rounded" style={{ background: blue1 }} />
        <div className="space-y-8">
          {featuredExperience.map((e) => (
            <div key={`${e.company}-${e.role}`} className="rounded-xl p-5" style={{ background: card }}>
              <h3 className="text-lg font-semibold text-white">{e.role}</h3>
              <div className="mt-1 flex items-center gap-3 text-sm" style={{ color: blue2 }}>
                <span>{e.company}</span>
                <small>
                  {e.start} - {e.end}
                </small>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="mb-1 text-2xl font-bold text-white">Projects</h2>
        <div className="mb-6 h-1 w-14 rounded" style={{ background: blue1 }} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="overflow-hidden rounded-xl"
              style={{ background: card }}
            >
              <div className="relative aspect-video w-full" style={{ background: "#33335f" }}>
                {p.image && (
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {p.description}
                </p>
                <div className="mt-3 flex gap-4 text-xs" style={{ color: blue2 }}>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <FiExternalLink size={12} /> Live
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <FiGithub size={12} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="mb-1 text-2xl font-bold text-white">Education</h2>
        <div className="mb-6 h-1 w-14 rounded" style={{ background: blue1 }} />
        <p className="font-medium text-white">{education.institution}</p>
        <p>{education.degree} — {education.detail}</p>
        <p style={{ color: blue2 }}>{education.start} - {education.end}</p>

        <h3 className="mt-8 mb-3 text-lg font-semibold text-white">Certificates</h3>
        <div className="flex flex-wrap gap-3">
          {certifications.map((c) => (
            <span key={c.name} className="rounded-full px-3 py-1 text-xs" style={{ border: `1px solid ${blue1}` }}>
              {c.name} · {c.issuer}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="mb-1 text-2xl font-bold text-white">Contact</h2>
        <div className="mx-auto mb-6 h-1 w-14 rounded" style={{ background: blue1 }} />
        <a href={`mailto:${person.email}`} className="rounded-full px-6 py-2.5 text-sm font-medium text-white" style={{ background: blue1 }}>
          {person.email}
        </a>
      </section>
    </div>
  );
}
