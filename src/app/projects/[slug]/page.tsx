import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import { projectSchema } from "@/lib/structured-data";
import JsonLd from "@/components/json-ld";
import SectionFrame from "@/components/section-frame";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
function getProject(slug: string) {
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return project;
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  return pageMetadata(
    project.title,
    `${project.subtitle}. ${project.tags
      .slice(0, 3)
      .join(
        ", ",
      )}. Architecture, design decisions, and source code by Pradhumn Gautam.`,
    `/projects/${project.slug}`,
  );
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <div className="sheet-sections route-sections">
        <SectionFrame
          id="case-study"
          title={project.title}
          headingLevel="h1"
          description={project.subtitle}
        >
          <nav className="case-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <p className="eyebrow">{project.category}</p>
          <p className="project-description">{project.description}</p>
          <div className="case-study-copy">
            <h2>Design decisions</h2>
            <ul>
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            {project.tradeoff && (
              <>
                <h2>Tradeoffs</h2>
                <p>{project.tradeoff}</p>
              </>
            )}
            {project.evidence && (
              <>
                <h2>Local verification</h2>
                <p>{project.evidence}</p>
                <a
                  className="text-link"
                  href={project.verification}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the verification notes ↗
                </a>
              </>
            )}
            <h2>Technologies</h2>
            <ul className="draft-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <h2>Source and documentation</h2>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                Source code ↗
              </a>
              {project.design && (
                <a href={project.design} target="_blank" rel="noreferrer">
                  Architecture notes ↗
                </a>
              )}
            </div>
          </div>
        </SectionFrame>
      </div>
    </>
  );
}
