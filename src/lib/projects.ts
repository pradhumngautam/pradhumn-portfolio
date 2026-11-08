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
  category?: string;
  evidence?: string;
  design?: string;
  verification?: string;
  tradeoff?: string;
};

export const projects: Project[] = [
  {
    slug: "webhook-platform",
    title: "Webhook Delivery Platform",
    subtitle: "Durable, multi-tenant event delivery",
    category: "HLD · Distributed systems",
    description:
      "A webhook platform built around an uncomfortable reality: a receiver can accept an event just before the sender crashes. Designed for durable admission, bounded retries, and recoverable delivery.",
    details: [
      "Commits events and delivery records atomically in PostgreSQL, eliminating a database-to-queue dual-write gap.",
      "Coordinates workers with row locks, tenant concurrency limits, expiring leases, and tokens that reject stale completions.",
      "Signs payloads with HMAC, supports overlapping secret rotation, and validates destination IPs with a total request deadline.",
      "Preserves attempt history through exponential-backoff retries, failure exhaustion, and idempotent manual replay.",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "uv"],
    github: "https://github.com/pradhumngautam/webhook-platform",
    design:
      "https://github.com/pradhumngautam/webhook-platform/blob/initial-release/docs/design.md",
    verification:
      "https://github.com/pradhumngautam/webhook-platform/blob/initial-release/docs/verification.md",
    evidence: "29 tests · signed delivery verified: 503 → 503 → 204",
    tradeoff:
      "At-least-once attempts, with explicit receiver deduplication. No promise of exactly-once remote side effects or event ordering.",
    featured: true,
  },
  {
    slug: "inventory-system",
    title: "Inventory Reservation System",
    subtitle: "Correct checkout under contention",
    category: "LLD · Transaction design",
    description:
      "An inventory and order API that keeps stock correct when buyers compete, clients retry, and reservation expiry races with checkout. Domain rules, lock ordering, and an auditable ledger work together.",
    details: [
      "Reserves multi-product baskets in one transaction, with deterministic product locks and database constraints that prevent overselling.",
      "Models confirmation, cancellation, and expiry as explicit transitions; a reservation can only reach one terminal outcome.",
      "Uses tenant-scoped idempotency keys and bounded transaction retries to keep duplicate requests from duplicating stock movements.",
      "Reconciles materialized stock against inventory movements and active reservations, with a restart-safe expiration worker.",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Docker", "pytest"],
    github: "https://github.com/pradhumngautam/inventory-system",
    design:
      "https://github.com/pradhumngautam/inventory-system/blob/initial-release/docs/design.md",
    verification:
      "https://github.com/pradhumngautam/inventory-system/blob/initial-release/docs/verification.md",
    evidence: "16 tests · 100 buyers, 10 units, exactly 10 reservations",
    tradeoff:
      "Pessimistic locks make scarce-stock decisions explicit. Transactions stay short; payment-provider calls are outside this domain.",
    featured: true,
  },
  {
    slug: "payment-system",
    title: "Paytm Payment System",
    subtitle: "Transactional peer-to-peer wallet",
    category: "Full stack · Data integrity",
    description:
      "A full-stack wallet for account creation, balance management, recipient discovery, and peer-to-peer transfers, with consistency at the center of money movement.",
    details: [
      "Protected account operations with JWT authentication and validated API payloads using Zod.",
      "Used MongoDB sessions so sender debits and recipient credits commit atomically or roll back together.",
      "Built searchable recipient discovery and a focused React transfer experience.",
    ],
    tags: ["React", "JavaScript", "Express", "MongoDB", "JWT", "Zod"],
    github: "https://github.com/pradhumngautam/paytm-2",
  },
];
