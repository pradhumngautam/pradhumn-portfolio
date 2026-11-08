export type ContributionDay = { date: string; count: number; level: number };
export type ContributionCalendar = {
  username: string;
  updatedAt: string;
  total: number;
  days: ContributionDay[];
};

const attribute = (tag: string, name: string): string | undefined =>
  new RegExp(`(?:^|\\s)${name}=["']([^"']*)["']`).exec(tag)?.[1];

/** Parse GitHub's public calendar. Fail closed if its markup or day counts change. */
export function parseContributions(
  html: string,
  updatedAt: string,
): ContributionCalendar {
  const counts = new Map<string, number>();
  for (const match of Array.from(
    html.matchAll(/<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g),
  )) {
    const id = attribute(match[1], "for");
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const number = /^([\d,]+) contributions? on /.exec(text)?.[1];
    if (id && (number || /^No contributions on /.test(text))) {
      counts.set(id, number ? Number(number.replace(/,/g, "")) : 0);
    }
  }
  const days: ContributionDay[] = [];
  for (const match of Array.from(html.matchAll(/<td\b([^>]*)>/g))) {
    const date = attribute(match[1], "data-date");
    if (!date) continue;
    const id = attribute(match[1], "id");
    const rawLevel = attribute(match[1], "data-level");
    const count = id ? counts.get(id) : undefined;
    const level = Number(rawLevel);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      !rawLevel ||
      !Number.isInteger(level) ||
      level < 0 ||
      level > 4 ||
      count === undefined ||
      !Number.isSafeInteger(count)
    ) {
      throw new Error("Unrecognized GitHub contribution day");
    }
    days.push({ date, count, level });
  }
  days.sort((a, b) => a.date.localeCompare(b.date));
  if (
    days.length < 350 ||
    days.length > 371 ||
    new Set(days.map((day) => day.date)).size !== days.length
  ) {
    throw new Error("Incomplete GitHub contribution calendar");
  }
  for (let index = 1; index < days.length; index++) {
    if (
      Date.parse(days[index].date) - Date.parse(days[index - 1].date) !==
      86_400_000
    ) {
      throw new Error("Non-contiguous GitHub contribution calendar");
    }
  }
  const reportedTotal =
    /id=["']js-contribution-activity-description["'][^>]*>\s*([\d,]+)\s+contributions?/.exec(
      html,
    )?.[1];
  const total = reportedTotal
    ? Number(reportedTotal.replace(/,/g, ""))
    : days.reduce((sum, day) => sum + day.count, 0);
  return { username: "pradhumngautam", updatedAt, total, days };
}
