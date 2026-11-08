import PortfolioProjectCard from "@/components/portfolio-project-card";
import SectionFrame from "@/components/section-frame";
import { projects } from "@/lib/projects";

export default function ProjectCaseStudy() {
  return (
    <SectionFrame
      id="projects"
      number="03"
      title="Projects"
      description="Independent builds that make system guarantees concrete and testable."
    >
      <div className="project-list">
        {projects.map((project) => (
          <PortfolioProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <p className="section-note">
        Both Python systems include Docker Compose setup, architecture notes,
        and documented local verification.
      </p>
    </SectionFrame>
  );
}
