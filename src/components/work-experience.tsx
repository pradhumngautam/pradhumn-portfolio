import {
  ChevronsDownUp,
  ChevronsUpDown,
  Code2,
} from "lucide-react";
import type {
  ExperienceCompany,
  ExperiencePosition,
} from "@/lib/experience";

function Position({ position }: { position: ExperiencePosition }) {
  return (
    <details className="group relative" open={position.isExpanded}>
      <summary className="block w-full cursor-pointer select-none text-left">
        <div className="relative z-[1] mb-1 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
            <Code2 className="h-4 w-4" />
          </div>
          <h4 className="flex-1 text-balance text-base font-medium text-[#EEEEEE]">
            {position.title}
          </h4>
          <div className="shrink-0 text-zinc-500">
            <ChevronsUpDown className="h-4 w-4 group-open:hidden" />
            <ChevronsDownUp className="hidden h-4 w-4 group-open:block" />
          </div>
        </div>
        <div className="flex items-center gap-2 pl-11 text-sm text-zinc-500">
          <span>{position.employmentType}</span>
          <span className="h-4 w-px bg-zinc-800" aria-hidden />
          <span>{position.employmentPeriod}</span>
        </div>
      </summary>

      <div className="overflow-hidden pl-11 pt-3 text-sm text-[#B4B4B4]">
        <ul className="space-y-2.5 leading-relaxed">
          {position.highlights.map((highlight) => (
            <li className="relative pl-4 before:absolute before:left-0 before:text-zinc-600 before:content-['•']" key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-1.5 pt-4">
          {position.skills.map((skill) => (
            <li
              className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-1.5 py-0.5 font-mono text-xs text-zinc-500"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function Company({ company }: { company: ExperienceCompany }) {
  return (
    <article className="space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-800 bg-[#141415] text-xs font-semibold text-zinc-300">
          {company.monogram}
        </div>
        <h3 className="text-lg font-medium leading-snug text-[#EEEEEE]">
          {company.companyName}
        </h3>
        {company.isCurrentEmployer ? (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-500 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="sr-only">Current employer</span>
          </span>
        ) : null}
      </div>
      <div className="relative space-y-5 before:absolute before:left-4 before:h-full before:w-px before:bg-zinc-800">
        {company.positions.map((position) => (
          <Position position={position} key={position.id} />
        ))}
      </div>
    </article>
  );
}

export default function WorkExperience({
  experiences,
}: {
  experiences: ExperienceCompany[];
}) {
  return (
    <div className="w-full">
      {experiences.map((company) => (
        <Company company={company} key={company.id} />
      ))}
    </div>
  );
}
