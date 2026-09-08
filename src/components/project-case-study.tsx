import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  CalendarClock,
  Cloud,
  Code2,
  Database,
  Frame,
  Github,
  ShieldCheck,
  Video,
} from "lucide-react";
import SmoothReveal from "@/components/smooth-reveal";

const technologies = [
  { label: "TypeScript", icon: Code2, color: "text-red-400" },
  { label: "Next.js", icon: Frame, color: "text-yellow-400" },
  { label: "PostgreSQL", icon: Database, color: "text-indigo-400" },
  { label: "Supabase", icon: Cloud, color: "text-emerald-400" },
];

const architecture = [
  {
    title: "Identity and care workflows",
    description:
      "Role-based access for patients and doctors, with appointment scheduling and explicit lifecycle states.",
    badge: "RBAC",
    icon: ShieldCheck,
    color: "text-indigo-400",
  },
  {
    title: "Payments and scheduling",
    description:
      "Integrated payment flows with booking logic so consultations move through one consistent transaction boundary.",
    badge: "Workflow",
    icon: CalendarClock,
    color: "text-orange-400",
  },
  {
    title: "Real-time consultations",
    description:
      "Browser-based video visits over WebRTC, including signalling and session coordination between participants.",
    badge: "WebRTC",
    icon: Video,
    color: "text-emerald-400",
  },
  {
    title: "Grounded health assistant",
    description:
      "Secure document ingestion and retrieval-augmented generation grounded in the patient’s medical context.",
    badge: "RAG",
    icon: Bot,
    color: "text-pink-400",
  },
];

export default function ProjectCaseStudy() {
  return (
    <SmoothReveal className="mt-14 flex w-full flex-col items-start gap-3" delay={0.2}>
      <h2 className="font-medium text-[#EEEEEE]">Selected project</h2>
      <p className="mb-4 font-light text-[#B4B4B4]">
        A deeper look at a system designed around real user journeys,
        consistency, privacy, and failure handling.
      </p>

      <article className="w-full rounded-2xl border border-zinc-800 bg-[#141415] p-6 backdrop-blur-sm">
        <header className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-[#EEEEEE]">CareConnect</h3>
            <p className="text-sm text-zinc-400">
              End-to-end telehealth platform
            </p>
          </div>
          <span className="rounded-full bg-emerald-900/30 px-3 py-1.5 text-xs font-medium text-emerald-400">
            Case study
          </span>
        </header>

        <div className="mb-4 flex items-center gap-2">
          <Image
            className="h-6 w-6 rounded-full object-cover object-top ring-2 ring-zinc-900"
            src="/pradhumngautam.jpeg"
            alt="Pradhumn Gautam"
            width={24}
            height={24}
          />
          <span className="text-xs text-zinc-500">Designed and built independently</span>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-2">
          {technologies.map(({ label, icon: Icon, color }) => (
            <div className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800/50 bg-zinc-800/50 p-1" key={label}>
              <Icon className={`h-3 w-3 ${color}`} />
              <span className="text-sm text-zinc-300">{label}</span>
            </div>
          ))}
        </div>

        <p className="border-t border-zinc-800 pt-5 text-sm font-light leading-relaxed text-[#B4B4B4]">
          CareConnect brings patient onboarding, clinician availability,
          appointments, payments, records, live consultations, and contextual
          assistance into one product. The core design challenge was keeping
          these workflows coherent as identity, money, documents, and real-time
          communication cross system boundaries.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          {architecture.map(({ title, description, badge, icon: Icon, color }) => (
            <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:bg-zinc-800/30" key={title}>
              <div className="shrink-0 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-800/80 to-zinc-900 p-3">
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-medium text-[#EEEEEE]">{title}</h4>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-400">
                    {badge}
                  </span>
                </div>
                <p className="text-xs font-light leading-relaxed text-[#B4B4B4]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-zinc-800 pt-4">
          <Link className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white" href="https://github.com/pradhumngautam" target="_blank">
            <Github className="h-4 w-4" /> Explore my GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </SmoothReveal>
  );
}
