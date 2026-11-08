import type { ReactNode } from "react";

export default function SectionFrame({
  id,
  number,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  number?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`sheet-panel ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
    >
      {title && (
        <header className="section-heading">
          <h2 id={`${id}-title`}>
            {number && <span className="section-number">{number}</span>}
            {title}
          </h2>
          {description && <p>{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
