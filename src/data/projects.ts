import { ProjectEntry } from "@/lib/types";

export const projects: ProjectEntry[] = [
  {
    slug: "twonode-gis-platform",
    name: "Twonode Technologies — GIS Platform",
    description:
      "A full-stack Next.js platform helping businesses discover industry-based GIS solutions, unlocking geospatial intelligence for their sector.",
    liveUrl: "https://www.twonodetechnologies.com",
    tech: ["Next.js", "AWS", "Google Maps API", "ArcGIS"],
    top: true,
  },
  {
    slug: "nataguard",
    name: "Nataguard",
    description:
      "An AI-powered Next.js application helping medical practitioners and pregnant women monitor pregnancy conditions, with an AI-driven backend for dynamic, responsive recommendations.",
    liveUrl: "https://nataguard.vercel.app/",
    githubUrl: "https://github.com/roji-tech/nataguard",
    tech: ["Next.js", "AI Integration"],
    top: true,
  },
  {
    slug: "pluttr",
    name: "Pluttr",
    description:
      "An expense-tracking app built with React, Firebase and Cloud Functions to streamline financial management for users.",
    liveUrl: "https://app.pluttr.com",
    tech: ["React", "Firebase", "Cloud Functions"],
    top: true,
  },
  {
    slug: "geegpay-admin-dashboard",
    name: "Geegpay Admin Dashboard",
    description:
      "A pixel-perfect admin dashboard built for the Geegpay hackathon, implementing complex UI designs with high responsiveness.",
    liveUrl: "https://geegpay-challenge-xi.vercel.app/",
    githubUrl: "https://github.com/roji-tech/geegpay-challenge",
    tech: ["Next.js"],
    top: true,
  },
  {
    slug: "inventory-management-dashboard",
    name: "Inventory Management Dashboard",
    description:
      "A user-friendly inventory management dashboard consuming backend APIs and implementing complex functionality from Figma designs.",
    liveUrl: "https://inventory-pro-six.vercel.app/",
    githubUrl: "https://github.com/roji-tech/inventory-pro",
    tech: ["Next.js", "REST APIs"],
    top: true,
  },
  {
    slug: "esim-project",
    name: "eSIM Project",
    description:
      "A Next.js application fetching data from a Django backend and external APIs to display available eSIMs, with dynamic data fetching across a scalable UI.",
    liveUrl: "https://esim-pro-ebon.vercel.app/",
    tech: ["Next.js", "Django", "REST APIs"],
    top: true,
  },
  {
    slug: "nextjs-whatsapp-clone",
    name: "Next.js WhatsApp Clone",
    description:
      "A WhatsApp clone showcasing real-time messaging and interactive UI built with Next.js and Firestore.",
    liveUrl: "https://nextjs-whatsapp-clone-ten.vercel.app/",
    githubUrl: "https://github.com/roji-tech/nextjs-whatsapp-clone",
    tech: ["Next.js", "Firebase", "Firestore"],
    image: "/images/projects/whatsapp.png",
    top: false,
  },
  {
    slug: "food-store-app",
    name: "Food Store App",
    description:
      "A responsive food ordering application built with React, fetching and displaying available food items through API integration.",
    liveUrl: "https://food-order-phi.vercel.app/",
    githubUrl: "https://github.com/roji-tech/react-online-food-restaurant",
    tech: ["React"],
    image: "/images/projects/food-rest.png",
    top: false,
  },
  {
    slug: "react-tic-tac-toe",
    name: "React Tic-Tac-Toe",
    description:
      "An interactive Tic-Tac-Toe game demonstrating fundamental game logic and UI development with React.",
    liveUrl: "https://react-tic-tac-toe-one-mu.vercel.app/",
    githubUrl: "https://github.com/roji-tech/react-tic-tac-toe",
    tech: ["React", "JavaScript"],
    image: "/images/projects/tictactoe.png",
    top: false,
  },
];

export const featuredProjects = projects.filter((p) => p.top);
