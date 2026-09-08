"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const pages = [{ href: "/", label: "Home" }, { href: "/projects", label: "Projects" }, { href: "/experience", label: "Experience" }];

export default function Header() {
  const pathname = usePathname();
  return <header className="nav-wrap"><nav className="floating-nav" aria-label="Primary navigation"><div className="nav-pages">{pages.map((page) => <Link className={pathname === page.href ? "nav-active" : ""} href={page.href} key={page.href}>{page.label}</Link>)}</div><span className="nav-rule" /><div className="nav-socials"><a aria-label="GitHub" href="https://github.com/pradhumngautam" target="_blank" rel="noreferrer"><Github /></a><a aria-label="Email" href="mailto:pradhumngautam0506@gmail.com"><Mail /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/pradhumngautam/" target="_blank" rel="noreferrer"><Linkedin /></a></div></nav></header>;
}
