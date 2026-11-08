import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only canonical HTML pages. Do not invent lastModified dates on each build.
  return [
    "/",
    "/projects",
    "/writing",
    ...projects.map((project) => `/projects/${project.slug}`),
  ].map((path) => ({ url: absoluteUrl(path) }));
}
