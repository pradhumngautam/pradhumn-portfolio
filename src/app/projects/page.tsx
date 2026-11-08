import type { Metadata } from "next";
import Link from "next/link";
import PortfolioProjectCard from "@/components/portfolio-project-card";
import SectionFrame from "@/components/section-frame";
import { projects } from "@/lib/projects";
export const metadata: Metadata = {
  title: "Projects",
  alternates: { canonical: "/projects" },
};
export default function ProjectsPage() {
  return (
    <div className="sheet-sections route-sections">
      <SectionFrame
        id="all-projects"
        title="Selected projects"
        description="System design, concurrency, and data integrity—made executable."
      >
        <Link className="text-link back-link" href="/">
          ← Back to portfolio
        </Link>
        <div className="project-list">
          {projects.map((project) => (
            <PortfolioProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionFrame>
    </div>
  );
}
