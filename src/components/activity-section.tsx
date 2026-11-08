import { ArrowUpRight } from "lucide-react";
import SectionFrame from "@/components/section-frame";
import { getContributions } from "@/lib/github";
import { profile } from "@/lib/profile";

export default async function ActivitySection() {
  const calendar = await getContributions();
  const offset = new Date(calendar.days[0].date + "T00:00:00Z").getUTCDay();
  const width = Math.ceil((calendar.days.length + offset) / 7) * 13;
  const refreshed = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(calendar.updatedAt));
  return (
    <SectionFrame id="activity" number="01" title="Activity">
      <p className="activity-intro">
        {calendar.total.toLocaleString("en-US")} contributions on{" "}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={12} />
        </a>{" "}
        in the last year.
      </p>
      <div
        className="calendar-scroll"
        tabIndex={0}
        role="region"
        aria-label="GitHub contribution calendar; scroll horizontally on small screens"
      >
        <svg
          viewBox={`0 0 ${width} 119`}
          className="contribution-calendar"
          role="img"
          aria-labelledby="calendar-title"
        >
          <title id="calendar-title">{`${calendar.total.toLocaleString(
            "en-US",
          )} GitHub contributions between ${calendar.days[0].date} and ${
            calendar.days[calendar.days.length - 1].date
          }`}</title>
          {calendar.days.map((day, index) => {
            const column = Math.floor((index + offset) / 7),
              row = (index + offset) % 7;
            return (
              <g key={day.date}>
                {day.date.endsWith("-01") &&
                  column < Math.ceil(width / 13) - 2 && (
                    <text x={column * 13} y="12" className="calendar-month">
                      {new Date(day.date + "T00:00:00Z").toLocaleDateString(
                        "en-US",
                        { month: "short", timeZone: "UTC" },
                      )}
                    </text>
                  )}
                <rect
                  x={column * 13}
                  y={24 + row * 13}
                  width="10.5"
                  height="10.5"
                  className={`contribution-day level-${day.level}`}
                >
                  <title>{`${day.count} ${
                    day.count === 1 ? "contribution" : "contributions"
                  } on ${day.date}`}</title>
                </rect>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="calendar-caption">
        <span>
          {calendar.cached ? "Saved public activity" : "Public GitHub activity"}{" "}
          · {refreshed}
        </span>
        <span className="calendar-legend" aria-hidden="true">
          Less
          {[0, 1, 2, 3, 4].map((level) => (
            <i key={level} className={`level-${level}`} />
          ))}
          More
        </span>
      </div>
    </SectionFrame>
  );
}
