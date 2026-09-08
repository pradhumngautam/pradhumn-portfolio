import { ExternalLink, Github, Network } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function PortfolioProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <header>
        <div><span className="project-label"><Network /> {project.subtitle}</span><h2>{project.title}</h2></div>
        <div className="project-actions">{project.github && <a href={project.github} aria-label={`${project.title} on GitHub`} target="_blank" rel="noreferrer"><Github /></a>}{project.live && <a href={project.live} aria-label={`${project.title} live site`} target="_blank" rel="noreferrer"><ExternalLink /></a>}</div>
      </header>
      <p>{project.description}</p>
      <ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}
