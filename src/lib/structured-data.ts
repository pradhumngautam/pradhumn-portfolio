import { profile } from "@/lib/profile";
import { projects, type Project } from "@/lib/projects";
import { articles } from "@/lib/writing";
import { absoluteUrl, siteDescription } from "@/lib/seo";

const personId = absoluteUrl("/#person");
const websiteId = absoluteUrl("/#website");
const graph = (nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": nodes,
});
export const identitySchema = graph([
  {
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    url: absoluteUrl(),
    image: absoluteUrl("/pradhumngautam.jpeg"),
    jobTitle: profile.role,
    worksFor: { "@type": "Organization", name: profile.company },
    sameAs: [profile.github, profile.linkedin, profile.twitter, profile.blog],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Maharaja Agrasen Institute of Technology",
    },
  },
  {
    "@type": "WebSite",
    "@id": websiteId,
    url: absoluteUrl(),
    name: profile.name,
    inLanguage: "en",
    publisher: { "@id": personId },
  },
]);

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
const page = (
  type: string,
  name: string,
  path: string,
  description: string,
) => ({
  "@type": type,
  "@id": absoluteUrl(path) + "#page",
  url: absoluteUrl(path),
  name,
  description,
  inLanguage: "en",
  isPartOf: { "@id": websiteId },
});
export const homeSchema = graph([
  {
    ...page("ProfilePage", profile.name, "/", siteDescription),
    mainEntity: { "@id": personId },
  },
]);

export function projectEntity(project: Project) {
  return {
    "@type": "SoftwareSourceCode",
    "@id": absoluteUrl(`/projects/${project.slug}#software`),
    name: project.title,
    description: project.description,
    url: absoluteUrl(`/projects/${project.slug}`),
    codeRepository: project.github,
    author: { "@id": personId },
    keywords: project.tags.join(", "),
  };
}
export const projectsSchema = graph([
  {
    ...page(
      "CollectionPage",
      "Selected engineering projects",
      "/projects",
      "System design, concurrency, and data integrity—made executable.",
    ),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: projectEntity(project),
      })),
    },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]),
]);
export function projectSchema(project: Project) {
  return graph([
    {
      ...page(
        "WebPage",
        project.title,
        `/projects/${project.slug}`,
        project.description,
      ),
      mainEntity: { "@id": absoluteUrl(`/projects/${project.slug}#software`) },
    },
    projectEntity(project),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.title, path: `/projects/${project.slug}` },
    ]),
  ]);
}
export const writingSchema = graph([
  {
    ...page(
      "CollectionPage",
      "Engineering writing",
      "/writing",
      "Engineering notes by Pradhumn Gautam on feed architecture, backend systems, and design tradeoffs.",
    ),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TechArticle",
          "@id": article.href,
          url: article.href,
          headline: article.title,
          description: article.description,
          datePublished: article.date,
          author: { "@id": personId },
          inLanguage: "en",
          keywords: article.tags.join(", "),
        },
      })),
    },
  },
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Writing", path: "/writing" },
  ]),
]);
