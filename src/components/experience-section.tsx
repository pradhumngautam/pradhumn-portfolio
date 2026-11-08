import SectionFrame from "@/components/section-frame";
import { experience } from "@/lib/experience";

export default function ExperienceSection() {
  return (
    <SectionFrame
      id="experience"
      number="02"
      title="Experience"
      description="Product engineering across AI, automation, and data-intensive systems."
    >
      <div className="experience-list">
        {experience.map((company) => (
          <article className="company" key={company.id}>
            <h3>
              <span className="company-monogram" aria-hidden="true">
                {company.monogram}
              </span>
              {company.companyName}
              {company.isCurrentEmployer && (
                <span className="current-label">Current</span>
              )}
            </h3>
            <div className="positions">
              {company.positions.map((position) => (
                <details
                  className="position"
                  key={position.id}
                  open={position.isExpanded}
                >
                  <summary>
                    <span className="expand-symbol" aria-hidden="true" />
                    <span className="position-title">
                      {position.title}
                      <span className="employment-type">
                        {" "}
                        · {position.employmentType}
                      </span>
                    </span>
                    <span className="position-period">
                      {position.employmentPeriod}
                    </span>
                  </summary>
                  <ul className="experience-highlights">
                    {position.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </details>
              ))}
              <ul
                className="draft-tags"
                aria-label={`${company.companyName} technologies`}
              >
                {Array.from(
                  new Set(
                    company.positions.flatMap((position) => position.skills),
                  ),
                ).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
