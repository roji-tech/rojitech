import { CertificationEntry, EducationEntry, LanguageEntry } from "@/lib/types";

export const education: EducationEntry = {
  institution: "Federal University of Technology Akure (FUTA), Nigeria",
  degree: "B.Tech in Cybersecurity",
  detail: "Second Class Honours (4.09/5.0)",
  start: "2019",
  end: "Oct 2025",
  dissertation: {
    topic:
      "A Secure SaaS-Based Multi-Tenant Learning Management System Using Data Isolation and Role-Based Access Control",
    description:
      "Undergraduate dissertation (Mar–Oct 2025) designing a multi-tenant SaaS LMS architecture where tenant data isolation and role-based access control are enforced at the platform level, not left to application-layer convention.",
  },
  relevantCourses: [
    "Network Security",
    "Cryptography",
    "Penetration Testing",
    "Operating Systems",
    "Secure Software Engineering",
  ],
};

export const certifications: CertificationEntry[] = [
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco",
    url: undefined,
  },
  {
    name: "Soft Skills Training Certification",
    issuer: "Jobberman",
    year: "2022",
  },
  {
    name: "Python Certification",
    issuer: "Side Hustle",
    year: "2022",
  },
  {
    name: "Frontend Development (React JS)",
    issuer: "Side Hustle",
    year: "2022",
  },
];

export const languages: LanguageEntry[] = [
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Very Good" },
  { name: "Yoruba", level: "Native" },
];
