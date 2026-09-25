import { SocialLink } from "@/lib/types";

export const person = {
  name: "Abdullah Jamiu Akorede",
  shortName: "Abdullah Jamiu",
  email: "rojitech9@gmail.com",
  phone: "+2347015910956",
  location: "Ibadan, Nigeria",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/roji-tech", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-jamiu-660902225",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Rojitech_code?t=F2ILVDjYghsYP_luZA1SvQ&s=09",
    icon: "twitter",
  },
  { label: "Telegram", href: "https://t.me/Rojitech", icon: "telegram" },
  {
    label: "WhatsApp",
    href: "https://wa.me/+2347015910956",
    icon: "whatsapp",
  },
  { label: "Email", href: `mailto:${person.email}`, icon: "mail" },
];

export const resumeFiles = {
  main: "/resume/Abdullah_Jamiu_Akorede_Resume.pdf",
  academic: "/resume/Abdullah_Jamiu_Akorede_Academic_CV.pdf",
};

export const personas = {
  software: {
    headline: "Full-Stack Software Engineer",
    tagline: "Web, mobile & AI-augmented product engineering",
    summary:
      "Full-Stack Software Engineer with 5+ years of experience building scalable web and mobile applications — React, Next.js and React Native on the front end, Django, NestJS, Node.js and Golang on the back end, deployed on AWS. A cybersecurity foundation (B.Tech, Federal University of Technology Akure) shapes how I build: secure-by-default APIs, careful auth flows, and code that holds up under scrutiny.",
    summarySecondary:
      "I pair that engineering discipline with modern AI tooling — Claude, ChatGPT and Gemini — using deliberate, well-crafted prompting to move faster without lowering the bar on review.",
  },
  security: {
    headline: "Security-Driven Full-Stack Engineer",
    tagline: "Cybersecurity, penetration testing & secure systems design",
    summary:
      "Full-Stack Engineer with a B.Tech in Cybersecurity (Federal University of Technology Akure) and over 5 years combining application development with penetration testing, network defense and secure API design. I build systems where security isn't bolted on afterward — data isolation, role-based access control and secure coding practices are part of the architecture from the first commit.",
    summarySecondary:
      "My undergraduate dissertation designed a secure multi-tenant SaaS learning management system using data isolation and role-based access control — the same discipline I bring to production client work.",
  },
  academic: {
    headline: "Cybersecurity Researcher & Engineer",
    tagline: "B.Tech Cybersecurity — Federal University of Technology Akure",
    summary:
      "Academic and research background in cybersecurity, grounded in practical full-stack engineering experience. My undergraduate dissertation addressed secure multi-tenancy in SaaS learning management systems through data isolation and role-based access control.",
    summarySecondary: "",
  },
};
