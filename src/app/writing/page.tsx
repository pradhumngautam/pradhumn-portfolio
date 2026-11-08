import type { Metadata } from "next";
import Link from "next/link";
import SectionFrame from "@/components/section-frame";
import { ArticleList } from "@/components/writing-section";
import { profile } from "@/lib/profile";
export const metadata: Metadata = {
  title: "Writing",
  description:
    "Engineering notes by Pradhumn Gautam on feed architecture, backend systems, and design tradeoffs.",
  alternates: { canonical: "/writing" },
};
export default function WritingPage() {
  return (
    <div className="sheet-sections route-sections">
      <SectionFrame
        id="all-writing"
        title="Writing"
        description="Notes from building, breaking down, and thinking through software systems."
      >
        <Link className="text-link back-link" href="/">
          ← Back to portfolio
        </Link>
        <ArticleList />
        <a
          className="text-link all-writing"
          href={profile.blog}
          target="_blank"
          rel="noreferrer"
        >
          Engineering Notes on Hashnode ↗
        </a>
      </SectionFrame>
    </div>
  );
}
