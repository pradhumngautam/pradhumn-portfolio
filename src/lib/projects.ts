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
    slug: "payment-system",
    title: "Paytm Payment System",
    subtitle: "Transactional peer-to-peer wallet",
    description: "A full-stack wallet for account creation, balance management, recipient discovery, and peer-to-peer transfers.",
    details: [
      "Protected account operations with JWT authentication and validated API payloads using Zod.",
      "Used MongoDB sessions so sender debits and recipient credits commit atomically or roll back together.",
      "Built searchable recipient discovery and a focused React transfer experience.",
    ],
    tags: ["JavaScript", "React", "Vite", "Express", "MongoDB", "Mongoose", "JWT", "Zod"],
    github: "https://github.com/pradhumngautam/paytm-2",
    featured: true,
  },
];
