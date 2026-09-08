import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowUpRight,
  BadgeCheck,
  Cloud,
  Code2,
  Database,
  Frame,
  Github,
  Search,
  WalletCards,
} from "lucide-react";
import SmoothReveal from "@/components/smooth-reveal";

const technologies = [
  { label: "JavaScript", icon: Code2, color: "text-yellow-400" },
  { label: "React + Vite", icon: Frame, color: "text-sky-400" },
  { label: "MongoDB", icon: Database, color: "text-emerald-400" },
  { label: "Express", icon: Cloud, color: "text-zinc-400" },
];

const architecture = [
  {
    title: "Identity and API boundaries",
    description:
      "JWT-protected account endpoints with Zod validation at signup, sign-in, and profile-update boundaries.",
    badge: "Auth",
    icon: BadgeCheck,
    color: "text-indigo-400",
  },
  {
    title: "Atomic money movement",
    description:
      "MongoDB sessions keep the sender debit and recipient credit in one transaction, preventing partial transfers.",
    badge: "Transaction",
    icon: ArrowLeftRight,
    color: "text-orange-400",
  },
  {
    title: "Account and balance model",
    description:
      "Separate user and account records keep identity concerns distinct from balances and transfer operations.",
    badge: "Ledger",
    icon: WalletCards,
    color: "text-emerald-400",
  },
  {
    title: "Recipient discovery",
    description:
      "Searchable user discovery and a focused transfer flow make finding a recipient and sending funds straightforward.",
    badge: "Product",
    icon: Search,
    color: "text-pink-400",
  },
];

export default function ProjectCaseStudy() {
  return (
    <SmoothReveal
      className="mt-14 flex w-full flex-col items-start gap-3"
      delay={0.2}
    >
      <h2 className="font-medium text-[#EEEEEE]">Selected project</h2>
      <p className="mb-4 font-light text-[#B4B4B4]">
        A deeper look at a wallet system designed around authentication,
        transaction integrity, and clear money-movement workflows.
      </p>

      <article className="w-full rounded-2xl border border-zinc-800 bg-[#141415] p-6 backdrop-blur-sm">
        <header className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-[#EEEEEE]">Paytm Payment System</h3>
            <p className="text-sm text-zinc-400">
              Transactional peer-to-peer wallet
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
          <span className="text-xs text-zinc-500">
            Designed and built independently
          </span>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-2">
          {technologies.map(({ label, icon: Icon, color }) => (
            <div
              className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800/50 bg-zinc-800/50 p-1"
              key={label}
            >
              <Icon className={`h-3 w-3 ${color}`} />
              <span className="text-sm text-zinc-300">{label}</span>
            </div>
          ))}
        </div>

        <p className="border-t border-zinc-800 pt-5 text-sm font-light leading-relaxed text-[#B4B4B4]">
          A full-stack payment application for account creation, balance
          management, recipient discovery, and peer-to-peer transfers. Its core
          engineering concern is consistency: every transfer validates both
          accounts and commits the debit and credit together—or rolls the entire
          operation back.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          {architecture.map(
            ({ title, description, badge, icon: Icon, color }) => (
              <div
                className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:bg-zinc-800/30"
                key={title}
              >
                <div className="shrink-0 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-800/80 to-zinc-900 p-3">
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-medium text-[#EEEEEE]">
                      {title}
                    </h4>
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-400">
                      {badge}
                    </span>
                  </div>
                  <p className="text-xs font-light leading-relaxed text-[#B4B4B4]">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-6 border-t border-zinc-800 pt-4">
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              href="https://github.com/pradhumngautam/paytm-2"
              target="_blank"
            >
              <Github className="h-4 w-4" /> View source
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
              href="https://paytm-gules.vercel.app/"
              target="_blank"
            >
              <Cloud className="h-4 w-4" /> Live project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </SmoothReveal>
  );
}
