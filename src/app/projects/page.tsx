import PortfolioProjectCard from "@/components/portfolio-project-card";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return <section className="route-page"><div className="route-heading"><p>Selected work</p><h1>Projects</h1><span>Systems I&apos;ve designed around real user journeys, reliability constraints, and production tradeoffs.</span></div><div className="projects-list">{projects.map((project) => <PortfolioProjectCard key={project.slug} project={project} />)}</div></section>;
}
