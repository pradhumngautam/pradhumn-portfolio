import { projectsMarkdown, markdownResponse } from "@/lib/machine-content";
export const dynamic = "force-static";
export function GET() {
  return markdownResponse(projectsMarkdown(), "/projects");
}
