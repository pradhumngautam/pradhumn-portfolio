import Image from "next/image";
import Link from "next/link";

export default function ProfileHero() {
  return (
    <section className="hero-grid">
      <div className="hero-content">
        <h1>Software Engineer building backend and data systems at QodexAI.</h1>
        <div className="hero-prose">
          <p>
            Hey, I&apos;m <strong>Pradhumn Gautam</strong> — a software engineer
            from New Delhi focused on backend engineering, distributed systems,
            data infrastructure, and applied AI.
          </p>
          <p>
            I build production systems end to end: asynchronous workers, ETL
            pipelines, PostgreSQL services, product integrations, and the React
            interfaces used to operate them.
          </p>
          <p>
            Currently completing a B.Tech in Computer Science with a
            specialization in AI &amp; ML at Maharaja Agrasen Institute of
            Technology.
          </p>
        </div>
        <div className="hero-links">
          <Link href="/experience">View experience</Link>
          <Link href="/projects">Explore projects</Link>
        </div>
      </div>
      <div className="hero-avatar-wrap">
        <Image
          className="hero-avatar"
          src="/pradhumngautam.jpeg"
          alt="Pradhumn Gautam"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
}
