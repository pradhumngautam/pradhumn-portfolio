export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentType: string;
  highlights: string[];
  skills: string[];
  isExpanded?: boolean;
};

export type ExperienceCompany = {
  id: string;
  companyName: string;
  monogram: string;
  isCurrentEmployer?: boolean;
  positions: ExperiencePosition[];
};

export const experience: ExperienceCompany[] = [
  {
    id: "qodexai",
    companyName: "QodexAI, Inc.",
    monogram: "Q",
    isCurrentEmployer: true,
    positions: [
      {
        id: "qodexai-engineer",
        title: "Software Engineer",
        employmentPeriod: "Jul 2025 – Present",
        employmentType: "Full-time",
        isExpanded: true,
        highlights: [
          "Architected fair-usage controls across a distributed worker fleet, enforcing per-user, per-team, and global quotas without compromising throughput.",
          "Built scalable ETL pipelines for third-party APIs with token-bucket rate limits, exponential backoff, and dead-letter handling.",
          "Designed asynchronous systems for real-time events and user automations, decoupling ingestion from downstream processing for better reliability.",
          "Improved PostgreSQL performance and consistency with atomic RPCs, targeted indexes, and query-plan analysis.",
          "Shipped an MCP server for internal agent tooling, Paddle subscriptions and feature gating, Slack and CRM integrations, and an operations dashboard.",
          "Led reliability work across a major platform migration and resolved authentication defects responsible for more than 5,000 daily errors.",
        ],
        skills: [
          "TypeScript",
          "Python",
          "PostgreSQL",
          "Supabase",
          "React",
          "Distributed Systems",
          "ETL",
          "MCP",
        ],
      },
      {
        id: "qodexai-intern",
        title: "Software Engineer",
        employmentPeriod: "Jan 2025 – Jul 2025",
        employmentType: "Internship",
        highlights: [
          "Built a Manifest V3 Chrome extension in TypeScript with background scheduling and resilient LinkedIn DOM workflows.",
          "Implemented shared SSO sessions across the web application and browser extension, along with rate limiting and analytics instrumentation.",
          "Developed profile and email enrichment, language detection, and LLM-based classification pipelines.",
          "Delivered OpenAI-powered product capabilities at the edge and supported production integrations end to end.",
        ],
        skills: ["TypeScript", "Chrome MV3", "React", "OpenAI", "Mixpanel"],
      },
    ],
  },
  {
    id: "jeem-studio",
    companyName: "Jeem Studio",
    monogram: "J",
    positions: [
      {
        id: "jeem-engineer",
        title: "Software Engineer",
        employmentPeriod: "Jun 2024 – Oct 2024",
        employmentType: "Internship",
        highlights: [
          "Integrated Replicate for image generation, enhancement, text-to-image, image-to-image, and multimodal workflows in Artext.",
          "Built Jeem Insights, a citation-backed RAG product with PDF ingestion, embeddings, vector search, and grounded retrieval.",
          "Designed asynchronous AI-processing APIs with FastAPI, Supabase, and PostgreSQL.",
          "Added Redis caching and fault-tolerant processing to improve latency and service resilience.",
        ],
        skills: [
          "Next.js",
          "TypeScript",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "LangChain",
          "LlamaIndex",
          "Redis",
        ],
      },
    ],
  },
];
