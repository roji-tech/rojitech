import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python" },
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "Node.js / Express" },
      { name: "NestJS" },
      { name: "Golang" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Nginx" },
      { name: "Digital Ocean" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "SQL" },
      { name: "NoSQL" },
      { name: "REST APIs" },
      { name: "WebSockets" },
    ],
  },
  {
    title: "Security",
    description: "Network security, penetration testing & secure design",
    skills: [
      { name: "Network Security" },
      { name: "Penetration Testing" },
      { name: "Secure API Design" },
      { name: "Threat Analysis" },
      { name: "Encryption" },
      { name: "Role-Based Access Control" },
    ],
  },
  {
    title: "AI-Augmented Engineering",
    description: "Shipping faster without lowering the review bar",
    skills: [
      { name: "Prompt Engineering" },
      { name: "Claude" },
      { name: "ChatGPT" },
      { name: "Gemini" },
      { name: "AI-Assisted Secure Development" },
    ],
  },
];

/** Order for the software-engineer-led homepage: build tools first. */
export const softwareOrder = [
  "Frontend",
  "Backend",
  "Cloud & DevOps",
  "Data",
  "AI-Augmented Engineering",
  "Security",
];

/** Order for the security-led page: security credentials first. */
export const securityOrder = [
  "Security",
  "Backend",
  "Cloud & DevOps",
  "Frontend",
  "Data",
  "AI-Augmented Engineering",
];

export function orderCategories(order: string[]): SkillCategory[] {
  return order
    .map((title) => skillCategories.find((c) => c.title === title))
    .filter((c): c is SkillCategory => Boolean(c));
}
