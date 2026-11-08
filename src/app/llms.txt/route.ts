import { llmsIndex, markdownResponse } from "@/lib/machine-content";
export const dynamic = "force-static";
export function GET() {
  return markdownResponse(llmsIndex(), undefined, true);
}
