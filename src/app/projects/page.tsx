import Link from "next/link";
import PortfolioProjectCard from "@/components/portfolio-project-card";
import SectionFrame from "@/components/section-frame";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { projectsSchema } from "@/lib/structured-data";
import JsonLd from "@/components/json-ld";
export const metadata = pageMetadata(
  "Backend & System Design Projects",
  "Explore Pradhumn Gautam's webhook delivery platform, inventory reservation system, and payment project: architecture, concurrency, idempotency, and verified local tests.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <div className="sheet-sections route-sections">
      <JsonLd data={projectsSchema} />
      <SectionFrame
        id="all-projects"
        title="Selected projects"
        headingLevel="h1"
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
