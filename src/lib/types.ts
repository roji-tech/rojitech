export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "telegram" | "whatsapp" | "mail";
};

export type SkillItem = {
  name: string;
};

export type SkillCategory = {
  title: string;
  description?: string;
  skills: SkillItem[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
  featured?: boolean;
};

export type ProjectEntry = {
  slug: string;
  name: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  image?: string;
  top: boolean;
};

export type EducationEntry = {
  institution: string;
  degree: string;
  detail?: string;
  dissertation?: {
    topic: string;
    description: string;
  };
  relevantCourses?: string[];
  start: string;
  end: string;
};

export type CertificationEntry = {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
};

export type LanguageEntry = {
  name: string;
  level: string;
};
