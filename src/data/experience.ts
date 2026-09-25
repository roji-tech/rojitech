import { ExperienceEntry } from "@/lib/types";

/**
 * Company name standardized to "Twonode Technologies" (matches the live
 * domain twonodetechnologies.com) — source CVs spelled it three different
 * ways ("Twonode", "Twonodes", "TwoNode"). Confirm with the actual
 * legal/brand spelling if this is wrong.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Engineer (Contract)",
    company: "Twonode Technologies",
    companyUrl: "https://www.twonodetechnologies.com",
    start: "Jul 2024",
    end: "Present",
    bullets: [
      "Built a user-friendly GIS platform helping businesses discover local geospatial solutions, from the ground up.",
      "Engineered the REVA project, a full-stack application for streamlined land report requests that improved efficiency in real estate due diligence.",
      "Applied secure coding practices throughout the stack to guard against common web vulnerabilities.",
      "Optimized performance and scalability with Next.js and AWS, and designed responsive layouts that increased accessibility across devices.",
    ],
    tech: ["Next.js", "AWS", "REST APIs", "Google Maps API", "ArcGIS"],
    featured: true,
  },
  {
    role: "Web Development Instructor",
    company: "N-Tech Systems",
    start: "Jun 2024",
    end: "Jul 2025",
    bullets: [
      "Delivered hands-on training in Python, Django, JavaScript, TypeScript, Node.js, React and Next.js, guiding students through full-stack development.",
      "Taught database management, REST APIs and scalable application design through structured lessons and projects.",
      "Led coding workshops and mentorship sessions, sharpening students' debugging, optimization and problem-solving skills.",
    ],
    tech: ["Python", "Django", "TypeScript", "React", "Next.js", "Docker", "AWS"],
    featured: true,
  },
  {
    role: "Cybersecurity Intern",
    company: "Cyber Lab, FUTA",
    start: "Jun 2024",
    end: "Nov 2024",
    bullets: [
      "Gained hands-on experience with network security, firewalls and authentication protocols to strengthen system defenses.",
      "Conducted penetration testing with industry-standard tools to identify and remediate application security gaps.",
    ],
    tech: ["Network Security", "AWS Security", "Encryption", "Firewalls"],
    featured: true,
  },
  {
    role: "Full Stack Engineer",
    company: "PeersApp",
    start: "Apr 2022",
    end: "Jun 2024",
    bullets: [
      "Developed and maintained the web front end of a real-time chat application using React.",
      "Built a robust backend architecture with Django and Django REST Framework.",
      "Engineered asynchronous APIs with Django Channels and WebSockets for real-time messaging.",
    ],
    tech: ["React", "Django", "Django Channels", "WebSockets"],
    featured: true,
  },
  {
    role: "Full Stack Engineer",
    company: "Apex Verification Service Ltd",
    start: "Jun 2022",
    end: "May 2023",
    bullets: [
      "Built a full-stack identity verification platform (NIN, BVN) that improved client security and data validation.",
      "Leveraged React, Django and AWS to optimize platform performance and scalability.",
    ],
    tech: ["React", "Django", "AWS", "REST APIs"],
    featured: true,
  },
  {
    role: "Frontend Engineer",
    company: "Pluttr",
    start: "Jun 2024",
    end: "Jun 2024",
    bullets: [
      "Developed an expense-tracking app with React, Firebase and Cloud Functions to streamline financial management for users.",
      "Integrated Ant Design to improve interface accessibility and overall user experience.",
    ],
    tech: ["React", "Firebase", "Cloud Functions", "Ant Design"],
    featured: true,
  },
  {
    role: "Full Stack Engineer",
    company: "Marshell Soft Limited",
    start: "Aug 2024",
    end: "Oct 2024",
    bullets: [
      "Built responsive interfaces with React, aligned to UX/UI designs for a seamless user experience.",
      "Developed backend logic in Python and integrated RESTful APIs across relational and non-relational databases.",
      "Handled deployment and monitored application performance and security in production.",
    ],
    tech: ["React", "Python", "SQL", "NoSQL", "REST APIs"],
    featured: false,
  },
  {
    role: "Frontend Engineer",
    company: "Nataguard",
    start: "Jan 2024",
    end: "Apr 2024",
    bullets: [
      "Built an AI-powered Next.js application to help medical practitioners and pregnant women monitor pregnancy conditions.",
      "Integrated dynamic data capabilities for real-time insights for healthcare professionals.",
    ],
    tech: ["Next.js", "API Integration"],
    featured: false,
  },
  {
    role: "Freelance Full Stack Engineer",
    company: "Myworldesim App",
    start: "Jun 2023",
    end: "Aug 2023",
    bullets: [
      "Built a full-stack eSIM connectivity platform spanning local, regional and global coverage.",
      "Built the frontend with Next.js and backend with Django, deployed on Digital Ocean.",
    ],
    tech: ["Next.js", "Django", "Digital Ocean"],
    featured: false,
  },
  {
    role: "Frontend Developer Intern",
    company: "Side Hustle",
    start: "Mar 2022",
    end: "Jun 2022",
    bullets: [
      "Developed high-quality user interfaces mainly with React, collaborating with a team to hit project targets.",
    ],
    tech: ["React", "HTML", "CSS"],
    featured: false,
  },
];

export const featuredExperience = experience.filter((e) => e.featured);

export const researchExperience: ExperienceEntry[] = [
  {
    role: "Undergraduate Thesis Researcher",
    company: "Federal University of Technology Akure (FUTA)",
    start: "Mar 2025",
    end: "Oct 2025",
    bullets: [
      "Designed a secure SaaS-based multi-tenant Learning Management System using data isolation and role-based access control, enforced at the platform architecture level rather than left to application convention.",
      "Evaluated tenant-isolation strategies (schema-per-tenant vs. row-level security) against RBAC policy design for a multi-tenant education platform.",
    ],
    tech: ["Multi-Tenancy", "RBAC", "Data Isolation", "SaaS Architecture"],
    featured: true,
  },
];

/** Security-led ordering: cybersecurity-relevant roles surface first. */
export const securityExperience = [...featuredExperience].sort((a, b) => {
  const weight = (e: ExperienceEntry) =>
    e.company === "Cyber Lab, FUTA"
      ? 0
      : e.company === "Twonode Technologies"
        ? 1
        : e.company === "Apex Verification Service Ltd"
          ? 2
          : 3;
  return weight(a) - weight(b);
});
