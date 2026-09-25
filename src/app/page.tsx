import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { personas } from "@/data/site";
import { orderCategories, softwareOrder } from "@/data/skills";
import { featuredExperience } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { education, certifications, languages } from "@/data/education";

export default function Home() {
  const p = personas.software;
  return (
    <>
      <Hero eyebrow="Full-Stack Software Engineer" headline={p.tagline} tagline={p.headline} />
      <About summary={p.summary} summarySecondary={p.summarySecondary} />
      <Skills categories={orderCategories(softwareOrder)} />
      <Experience entries={featuredExperience} />
      <Projects projects={featuredProjects} viewAllHref="/projects" />
      <Education
        education={education}
        certifications={certifications}
        languages={languages}
        showDissertation={false}
      />
      <Contact />
    </>
  );
}
