import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/pradhumngautam", icon: Github },
  { label: "X", href: "https://x.com/iPradhumnGautam", icon: Twitter },
];

export default function Home() {
  return (
    <>
      <section className="profile-card" id="top">
        <Image className="profile-photo" src="/pradhumngautam.jpeg" alt="Pradhumn Gautam" width={96} height={96} priority />
        <div className="profile-main">
          <div><h1>Pradhumn Gautam</h1><p className="profile-role">Software Engineer · Backend &amp; Data Systems</p></div>
          <div className="profile-details"><span><MapPin /> New Delhi, India</span><a href="mailto:pradhumngautam0506@gmail.com"><Mail /> pradhumngautam0506@gmail.com</a><a href="https://www.linkedin.com/in/pradhumngautam/" target="_blank" rel="noreferrer"><Linkedin /> pradhumngautam</a></div>
          <p className="profile-summary">Building reliable backend systems, data pipelines, and AI-powered product infrastructure at QodexAI.</p>
        </div>
        <div className="profile-actions">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>)}</div>
      </section>

      <section className="page-section" id="about"><h2 className="section-heading">About Me</h2><div className="prose about-copy"><p>I&apos;m Pradhumn Gautam, a software engineer who builds reliable systems for data-intensive products and the workflows around them.</p><p>At QodexAI, I work across backend services, distributed processing, PostgreSQL, product integrations, and AI-native capabilities. I care about systems that remain clear to operate as they grow.</p><p>I&apos;m completing a B.Tech in Computer Science (AI &amp; ML) at Maharaja Agrasen Institute of Technology, New Delhi.</p></div></section>
    </>
  );
}
