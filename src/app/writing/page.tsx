import Link from "next/link";
import SectionFrame from "@/components/section-frame";
import { ArticleList } from "@/components/writing-section";
import { profile } from "@/lib/profile";
import { pageMetadata } from "@/lib/seo";
import { writingSchema } from "@/lib/structured-data";
import JsonLd from "@/components/json-ld";
export const metadata = pageMetadata(
  "Engineering Writing",
  "Engineering notes by Pradhumn Gautam on feed architecture, backend systems, and design tradeoffs. Read the original articles on Hashnode.",
  "/writing",
);
export default function WritingPage() {
  return (
    <div className="sheet-sections route-sections">
      <JsonLd data={writingSchema} />
      <SectionFrame
        id="all-writing"
        title="Writing"
        headingLevel="h1"
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
