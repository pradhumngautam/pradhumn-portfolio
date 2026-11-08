import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionFrame from "@/components/section-frame";
import { articles } from "@/lib/writing";

export function ArticleList() {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <article key={article.href}>
          <div className="article-meta">
            <time dateTime={article.date}>{article.displayDate}</time>
            <span>{article.readingTime}</span>
          </div>
          <div className="article-content">
            <h3>
              <a href={article.href} target="_blank" rel="noreferrer">
                {article.title}
                <ArrowUpRight size={16} />
              </a>
            </h3>
            <p>{article.description}</p>
            <span className="publication">
              {article.publication} <span aria-hidden="true">/</span> System
              design
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
export default function WritingSection() {
  return (
    <SectionFrame
      id="writing"
      number="04"
      title="Writing"
      description="Engineering notes on how systems work, and why their tradeoffs matter."
    >
      <ArticleList />
      <Link className="text-link all-writing" href="/writing">
        All writing <span aria-hidden="true">→</span>
      </Link>
    </SectionFrame>
  );
}
