import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { personas } from "@/data/site";
import { orderCategories, securityOrder } from "@/data/skills";
import { securityExperience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { education, certifications, languages } from "@/data/education";

export const metadata = {
  title: "Abdullah Jamiu Akorede — Security-Driven Full-Stack Engineer",
  description:
    "Security-driven Full-Stack Engineer: cybersecurity, penetration testing, secure API design and full-stack delivery.",
};

export default function SecurityPage() {
  const p = personas.security;
  return (
    <>
      <Hero eyebrow="Security-Driven Full-Stack Engineer" headline={p.tagline} tagline={p.headline} />
      <About summary={p.summary} summarySecondary={p.summarySecondary} />
      <Skills categories={orderCategories(securityOrder)} />
      <Experience entries={securityExperience} />
      <Education
        education={education}
        certifications={certifications}
        languages={languages}
        showDissertation
      />
      <Projects
        projects={featuredProjects}
        title="Security-Relevant Projects"
        viewAllHref="/projects"
      />
      <Contact />
    </>
  );
}
