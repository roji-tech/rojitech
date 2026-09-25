import Projects from "@/components/sections/Projects";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Abdullah Jamiu Akorede",
  description: "All projects — client work, freelance builds and practice projects.",
};

export default function AllProjectsPage() {
  return (
    <div className="pt-4">
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">All Projects</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Client work, freelance builds, and a few projects built purely to learn something new.
        </p>
      </div>
      <Projects projects={projects} title="" />
    </div>
  );
}
