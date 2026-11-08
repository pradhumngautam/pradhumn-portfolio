import snapshot from "@/data/github-contributions.json";
import {
  parseContributions,
  type ContributionCalendar,
} from "@/lib/contribution-parser";

export async function getContributions(): Promise<
  ContributionCalendar & { cached: boolean }
> {
  try {
    const response = await fetch(
      "https://github.com/users/pradhumngautam/contributions",
      {
        headers: { Accept: "text/html", "User-Agent": "pradhumn-portfolio" },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000),
      },
    );
    if (!response.ok) throw new Error("GitHub unavailable");
    return {
      ...parseContributions(await response.text(), new Date().toISOString()),
      cached: false,
    };
  } catch {
    // A dated, real public snapshot keeps the portfolio usable during upstream failures.
    return { ...snapshot, cached: true };
  }
}
