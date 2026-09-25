import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { personas, resumeFiles } from "@/data/site";
import { researchExperience } from "@/data/experience";
import { education, certifications, languages } from "@/data/education";

export const metadata = {
  title: "Abdullah Jamiu Akorede — Cybersecurity Researcher",
  description:
    "Academic profile: B.Tech Cybersecurity (FUTA), dissertation on secure multi-tenant SaaS LMS architecture, research experience and certifications.",
};

export default function AcademicPage() {
  const p = personas.academic;
  return (
    <>
      <Hero
        eyebrow="Academic Profile"
        headline={p.tagline}
        tagline={p.headline}
        resumeHref={resumeFiles.academic}
        resumeLabel="Download Academic CV"
      />
      <About summary={p.summary} />
      <Education
        education={education}
        certifications={certifications}
        languages={languages}
        showDissertation
      />
      <Experience entries={researchExperience} resumeHref={resumeFiles.academic} />
      <Contact />
    </>
  );
}
