import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import LocalTime from "@/components/local-time";
import SectionFrame from "@/components/section-frame";
import { profile } from "@/lib/profile";

export default function ProfileHero() {
  return (
    <SectionFrame id="about" className="profile-panel">
      <div className="profile-heading">
        <div className="portrait-frame">
          <Image
            src="/pradhumngautam.jpeg"
            alt="Pradhumn Gautam"
            width={88}
            height={88}
            priority
          />
        </div>
        <div>
          <h1>{profile.name}</h1>
          <p>
            Software Engineer at <span className="company-accent">QodexAI</span>
          </p>
          <p className="profile-location">{profile.location}</p>
        </div>
      </div>
      <p className="working-status">
        <span className="status-square" aria-hidden="true" />
        <LocalTime />
        <span aria-hidden="true">·</span>
        <span>Building reliable backend &amp; AI systems</span>
      </p>
      <div className="profile-copy">
        <p>
          I build backend infrastructure and full-stack applications for AI
          products, with a focus on data integrity, asynchronous workflows, and
          the systems behind the interface.
        </p>
        <p>
          At QodexAI, I work across distributed workers, ETL pipelines,
          PostgreSQL, and a React dashboard. I care about what happens when
          requests race, queues grow, and the happy path ends.
        </p>
        <p>
          Previously at Jeem Studio. B.Tech in Computer Science &amp; AI from
          MAIT, with a 9.1 CGPA.
        </p>
      </div>
      <ul className="social-links" aria-label="Connect with Pradhumn">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github />
            GitHub
            <ArrowUpRight />
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
            LinkedIn
            <ArrowUpRight />
          </a>
        </li>
        <li>
          <a href={profile.twitter} target="_blank" rel="noreferrer">
            <span className="x-symbol" aria-hidden="true">
              𝕏
            </span>
            X<ArrowUpRight />
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`}>
            <Mail />
            Email
            <ArrowUpRight />
          </a>
        </li>
      </ul>
    </SectionFrame>
  );
}
