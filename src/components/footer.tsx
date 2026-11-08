import { profile } from "@/lib/profile";
import SectionNav from "@/components/section-nav";
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <nav aria-label="Footer links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </nav>
        </div>
        <div className="footer-note">
          <span className="eyebrow">
            A working principle <span>№ 01</span>
          </span>
          <p>
            Build the simplest system that remains dependable when the happy
            path ends.
          </p>
        </div>
      </footer>
      <SectionNav />
    </>
  );
}
