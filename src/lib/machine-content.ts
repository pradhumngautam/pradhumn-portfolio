import { profile, stack } from "@/lib/profile";
import { projects, type Project } from "@/lib/projects";
import { experience } from "@/lib/experience";
import { articles } from "@/lib/writing";
import { absoluteUrl, markdownPath, siteDescription } from "@/lib/seo";

export function projectMarkdown(project: Project): string {
  return (
    [
      `# ${project.title}`,
      `> ${project.subtitle}`,
      `Canonical page: ${absoluteUrl(`/projects/${project.slug}`)}`,
      project.category,
      project.description,
      "## Design decisions",
      ...project.details.map((detail) => `- ${detail}`),
      ...(project.tradeoff ? ["## Tradeoffs", project.tradeoff] : []),
      ...(project.evidence ? ["## Local verification", project.evidence] : []),
      "## Technologies",
      project.tags.join(", "),
      "## Sources",
      project.github && `- [Source code](${project.github})`,
      project.design && `- [Architecture notes](${project.design})`,
      project.verification && `- [Verification notes](${project.verification})`,
    ]
      .filter(Boolean)
      .join("\n\n") + "\n"
  );
}
export function projectsMarkdown(): string {
  return (
    "# Engineering projects\n\n" +
    projects
      .map(
        (project) =>
          `- [${project.title}](${absoluteUrl(
            markdownPath(`/projects/${project.slug}`),
          )}): ${project.description}`,
      )
      .join("\n") +
    "\n"
  );
}
export function writingMarkdown(): string {
  return (
    `# Writing by ${profile.name}\n\n` +
    articles
      .map(
        (article) =>
          `## ${article.title}\n\nPublished: ${article.date} · ${
            article.readingTime
          }\n\n${article.description}\n\nOriginal publication: [${
            article.publication
          }](${article.href})\n\nTopics: ${article.tags.join(", ")}`,
      )
      .join("\n\n") +
    "\n"
  );
}
export function profileMarkdown(): string {
  return (
    [
      `# ${profile.name}`,
      `> ${siteDescription}`,
      `Canonical profile: ${absoluteUrl()}`,
      `${profile.role} at ${profile.company}. Based in ${profile.location}.`,
      "B.Tech in Computer Science & AI from Maharaja Agrasen Institute of Technology, with a 9.1 CGPA.",
      "## Experience",
      ...experience.flatMap((company) =>
        company.positions.map(
          (position) =>
            `### ${company.companyName} — ${position.title}\n\n${
              position.employmentType
            }, ${position.employmentPeriod}\n\n${position.highlights
              .map((highlight) => `- ${highlight}`)
              .join("\n")}`,
        ),
      ),
      "## Stack",
      ...stack.map((group) => `- ${group.label}: ${group.value}`),
      "## Profiles and contact",
      `- [GitHub](${profile.github})`,
      `- [LinkedIn](${profile.linkedin})`,
      `- [X](${profile.twitter})`,
      `- [Hashnode](${profile.blog})`,
      `- [Email](mailto:${profile.email})`,
    ].join("\n\n") + "\n"
  );
}
export function llmsIndex(): string {
  return (
    [
      `# ${profile.name}`,
      `> ${siteDescription}`,
      "This is Pradhumn's personal engineering portfolio. Project verification describes local tests; architecture documents and repositories provide the supporting evidence. Technical articles link to their original publication on Hashnode.",
      "## Profile",
      `- [Profile and experience](${absoluteUrl(
        "/index.md",
      )}): Current role, employment history, technical stack, and public contact links.`,
      "## Projects",
      ...projects.map(
        (project) =>
          `- [${project.title}](${absoluteUrl(
            markdownPath(`/projects/${project.slug}`),
          )}): ${project.subtitle}.`,
      ),
      "## Writing",
      `- [Engineering notes](${absoluteUrl(
        "/writing/index.md",
      )}): Article summaries and original publication links.`,
      "## Optional",
      `- [Complete portfolio text](${absoluteUrl(
        "/llms-full.txt",
      )}): Profile, experience, project details, and article summaries in one document.`,
      `- [Portfolio website](${absoluteUrl()}): Human-readable version.`,
    ].join("\n\n") + "\n"
  );
}
export const fullPortfolioMarkdown = () =>
  [profileMarkdown(), ...projects.map(projectMarkdown), writingMarkdown()].join(
    "\n---\n\n",
  );
export function markdownResponse(
  content: string,
  canonical?: string,
  textFile = false,
): Response {
  return new Response(content, {
    headers: {
      "Content-Type": `${
        textFile ? "text/plain" : "text/markdown"
      }; charset=utf-8`,
      "X-Content-Type-Options": "nosniff",
      Link: `<${absoluteUrl("/llms.txt")}>; rel="describedby"${
        canonical ? `, <${absoluteUrl(canonical)}>; rel="canonical"` : ""
      }`,
      // Text variants assist readers and agents; HTML pages are the search results.
      "X-Robots-Tag": "noindex",
    },
  });
}
