export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "QodexAI",
    period: "Jan 2025 - Present",
    location: "San Francisco, CA · Remote",
    summary: "Builds backend and data systems for an AI-powered API testing and QA platform, after starting with the team as a software engineering intern.",
    highlights: [
      "Architected fair-usage quotas across a distributed worker fleet, spanning user, team, and global task limits.",
      "Built ETL and asynchronous processing pipelines with API integrations, token-bucket rate limiting, retry backoff, and dead-letter fault handling.",
      "Improved reliability and performance through PostgreSQL RPCs, indexing, query-plan tuning, API recovery controls, and platform migration work.",
      "Shipped platform capabilities including Paddle billing, Slack and CRM integrations, notification digests, an internal admin console, and MCP tooling for AI agents.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Jeem Studio",
    period: "Jun 2024 - Oct 2024",
    location: "Dubai, UAE · Remote",
    summary: "Built production services for generative AI and document-intelligence products across inference, retrieval, and application infrastructure.",
    highlights: [
      "Integrated Replicate for image generation, enhancement, text-to-image, image-to-image, and multimodal workflows.",
      "Developed a citation-backed RAG product with PDF ingestion, embedding generation, vector search, and grounded retrieval.",
      "Designed asynchronous AI-processing APIs with FastAPI, Supabase, PostgreSQL, Redis caching, and Docker.",
    ],
  },
];
