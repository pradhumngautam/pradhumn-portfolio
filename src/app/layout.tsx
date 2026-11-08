import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { isPreview, siteUrl, siteDescription } from "@/lib/seo";
import { profile } from "@/lib/profile";
import { identitySchema } from "@/lib/structured-data";
import JsonLd from "@/components/json-ld";

const geist = localFont({
  src: [
    { path: "../assets/fonts/geist-400.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/geist-500.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/geist-600.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});
const mono = localFont({
  src: "../assets/fonts/geist-mono-400.ttf",
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pradhumn Gautam — Software Engineer",
    template: "%s | Pradhumn Gautam",
  },
  description: siteDescription,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  robots: isPreview
    ? { index: false, follow: true }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="describedby" href="/llms.txt" type="text/plain" />
      </head>
      <body className={`${geist.variable} ${mono.variable}`}>
        <JsonLd data={identitySchema} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div className="portfolio-shell">
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
