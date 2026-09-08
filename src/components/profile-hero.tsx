import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import SmoothReveal from "@/components/smooth-reveal";

const iconLinks = [
  { label: "GitHub", href: "https://github.com/pradhumngautam", icon: Github },
  { label: "X", href: "https://x.com/iPradhumnGautam", icon: Twitter },
];

export default function ProfileHero() {
  return (
    <>
      <SmoothReveal className="w-full">
        <section className="rounded-2xl border border-zinc-800 bg-[#141415] p-6 backdrop-blur-sm">
          <div className="flex items-start gap-5">
            <Image
              className="h-20 w-20 shrink-0 rounded-lg object-cover object-top ring-1 ring-zinc-800"
              src="/pradhumngautam.jpeg"
              alt="Pradhumn Gautam"
              width={80}
              height={80}
              priority
            />

            <div className="min-w-0 flex-1">
              <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h1 className="text-lg font-medium tracking-tight text-[#EEEEEE]">
                    Pradhumn Gautam
                  </h1>
                  <p className="mt-0.5 text-sm text-[#B4B4B4]">
                    Software Engineer · Backend &amp; Data Systems
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {iconLinks.map(({ label, href, icon: Icon }) => (
                    <Link key={label} aria-label={label} className="grid h-9 w-9 place-items-center rounded-lg border border-zinc-800 bg-[#111111] text-[#B4B4B4] transition-colors hover:bg-zinc-800/50 hover:text-[#EEEEEE]" href={href} target="_blank">
                      <Icon className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-[#B4B4B4]">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> New Delhi, India
                </span>
                <Link className="flex items-center gap-2 transition-colors hover:text-[#EEEEEE]" href="mailto:pradhumngautam0506@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">pradhumngautam0506@gmail.com</span>
                </Link>
                <Link className="flex items-center gap-2 transition-colors hover:text-[#EEEEEE]" href="https://www.linkedin.com/in/pradhumngautam/" target="_blank">
                  <Linkedin className="h-4 w-4" /> pradhumngautam
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm font-light leading-relaxed text-[#B4B4B4] md:ml-[100px]">
            I build backend infrastructure and full-stack applications for AI
            products.
          </p>
        </section>
      </SmoothReveal>

      <SmoothReveal className="mt-14 flex w-full flex-col items-start gap-3" delay={0.05}>
        <h2 className="font-medium text-[#EEEEEE]">About</h2>
        <div className="space-y-3 text-sm font-light leading-relaxed text-[#B4B4B4]">
          <p>
            I&apos;m a software engineer at QodexAI, working across the backend and
            React dashboard of an AI-powered API testing platform. I enjoy the
            parts of engineering where product decisions meet distributed
            systems: quotas, queues, retries, ingestion, observability, and
            carefully designed data models.
          </p>
          <p>
            I have completed a B.Tech in Computer Science, specializing in
            Artificial Intelligence, from Maharaja Agrasen Institute of
            Technology with a 9.1 CGPA.
          </p>
        </div>
      </SmoothReveal>

      <SmoothReveal className="mt-14 flex w-full flex-col items-start gap-3" delay={0.1}>
        <h2 className="font-medium text-[#EEEEEE]">Reach out</h2>
        <p className="text-sm font-light leading-relaxed text-[#B4B4B4]">
          I&apos;m always happy to talk about backend architecture, data systems,
          applied AI, or thoughtful software products. The best way to reach me
          is on{" "}
          <Link className="text-[#EEEEEE] underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-300" href="https://www.linkedin.com/in/pradhumngautam/" target="_blank">
            LinkedIn
          </Link>{" "}
          or by{" "}
          <Link className="text-[#EEEEEE] underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-300" href="mailto:pradhumngautam0506@gmail.com">
            email
          </Link>
          .
        </p>
      </SmoothReveal>
    </>
  );
}
