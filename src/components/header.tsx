"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Pradhumn Gautam home">
          <span className="draft-monogram" aria-hidden="true">
            P
          </span>
          <span>Pradhumn</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link
            href="/writing"
            aria-current={pathname === "/writing" ? "page" : undefined}
          >
            Writing
          </Link>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(dark ? "light" : "dark")}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
