"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const sections = [
  ["activity", "Activity"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["writing", "Writing"],
  ["stack", "Stack"],
];
export default function SectionNav() {
  const path = usePathname();
  const [active, setActive] = useState("");
  useEffect(() => {
    if (path !== "/") return;
    let ticking = false;
    const update = () => {
      let current = "";
      for (const [id] of sections) {
        const element = document.getElementById(id);
        if (
          element &&
          element.getBoundingClientRect().top <= window.innerHeight * 0.45
        )
          current = id;
      }
      setActive(current);
      ticking = false;
    };
    const scroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, [path]);
  if (path !== "/" || !active) return null;
  return (
    <nav className="section-nav" aria-label="Page sections">
      {sections.map(([id, title], index) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={title}
          aria-current={active === id ? "location" : undefined}
        >
          <span>0{index + 1}</span>
          <span className="section-nav-label">{title}</span>
        </a>
      ))}
    </nav>
  );
}
