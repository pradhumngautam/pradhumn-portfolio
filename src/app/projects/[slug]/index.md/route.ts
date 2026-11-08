import { projects } from "@/lib/projects";
import { projectMarkdown, markdownResponse } from "@/lib/machine-content";
export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) return new Response("Not found", { status: 404 });
  return markdownResponse(
    projectMarkdown(project),
    `/projects/${project.slug}`,
  );
}
