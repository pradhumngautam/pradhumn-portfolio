import { ArrowUpRight, Check, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import Link from "next/link";

export default function PortfolioProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="system-project" id={project.slug}>
      <header className="project-heading">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>
            <a href={project.github} target="_blank" rel="noreferrer">
              {project.title}
              <ArrowUpRight size={16} />
            </a>
          </h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        {project.featured && (
          <span className="project-index">
            {project.slug === "webhook-platform" ? "01 / HLD" : "02 / LLD"}
          </span>
        )}
      </header>
      <p className="project-description">{project.description}</p>
      {project.evidence && (
        <a
          href={project.verification}
          className="project-evidence"
          target="_blank"
          rel="noreferrer"
        >
          <Check size={14} />
          <span>{project.evidence}</span>
          <ArrowUpRight size={12} />
        </a>
      )}
      <details className="project-design">
        <summary>
          <span className="expand-symbol" aria-hidden="true" />
          Design decisions &amp; tradeoffs
        </summary>
        <ul>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        {project.tradeoff && (
          <p className="tradeoff">
            <strong>Tradeoff.</strong> {project.tradeoff}
          </p>
        )}
      </details>
      <ul className="draft-tags" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        <Link href={`/projects/${project.slug}`}>Read case study →</Link>
        <a href={project.github} target="_blank" rel="noreferrer">
          <Github size={14} />
          Source code
          <ArrowUpRight size={12} />
        </a>
        {project.design && (
          <a href={project.design} target="_blank" rel="noreferrer">
            Architecture notes
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </article>
  );
}
