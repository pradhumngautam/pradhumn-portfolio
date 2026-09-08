export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "careconnect",
    title: "CareConnect",
    subtitle: "A complete telehealth workflow",
    description: "An end-to-end telehealth platform connecting patients and doctors through scheduling, payments, secure records, and live consultations.",
    details: [
      "Designed role-based access and appointment workflows for patients and doctors.",
      "Integrated payments, secure medical-document ingestion, and a patient-data-grounded RAG assistant.",
      "Implemented WebRTC consultations with real-time signalling for dependable browser-based video sessions.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "WebRTC", "RAG", "Serverless"],
    featured: true,
  },
  {
    slug: "payment-system",
    title: "Payment System",
    subtitle: "Reliable transaction processing",
    description: "A full-stack digital payment system modelling peer transfers, merchant withdrawals, banking integrations, and the failure modes around money movement.",
    details: [
      "Built idempotent APIs and explicit transaction-state management for financial workflows.",
      "Processed real-time bank webhooks with Cloudflare Workers and robust retry/failure handling.",
      "Structured the system as a Turborepo with separated frontend, API, and persistence concerns.",
    ],
    tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Cloudflare Workers", "Turborepo"],
  },
];
