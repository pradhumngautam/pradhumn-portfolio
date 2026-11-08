import type { ReactNode } from "react";

export default function SectionFrame({
  id,
  number,
  title,
  description,
  children,
  className = "",
  headingLevel = "h2",
}: {
  id: string;
  number?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  return (
    <section
      id={id}
      className={`sheet-panel ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {title && (
        <header className="section-heading">
          <Heading id={`${id}-title`}>
            {number && <span className="section-number">{number}</span>}
            {title}
          </Heading>
          {description && <p>{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
