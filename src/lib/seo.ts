import type { Metadata } from "next";
import { profile } from "@/lib/profile";

export const siteUrl = "https://www.pradhumn.com";
export const siteDescription =
  "Pradhumn Gautam is a software engineer at QodexAI building backend infrastructure, reliable data systems, and AI products. Explore projects and engineering notes.";
export const absoluteUrl = (path = "/") => new URL(path, siteUrl).href;
export const markdownPath = (path: string) =>
  `${path === "/" ? "" : path}/index.md`;
export const isPreview = process.env.VERCEL_ENV === "preview";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${profile.name}`;
  const image = {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: "Pradhumn Gautam — backend systems, system design, and engineering notes",
  };
  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      types: { "text/markdown": absoluteUrl(markdownPath(path)) },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: profile.name,
      locale: "en_US",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@iPradhumnGautam",
      images: [image],
    },
  };
}

// Escape HTML-sensitive characters before embedding JSON in a script element.
export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
