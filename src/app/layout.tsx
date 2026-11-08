import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

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
  metadataBase: new URL("https://www.pradhumn.com"),
  title: {
    default: "Pradhumn Gautam — Software Engineer",
    template: "%s | Pradhumn Gautam",
  },
  description:
    "Software engineer at QodexAI building backend infrastructure, reliable data systems, and AI products. Projects, engineering notes, and open-source code.",
  openGraph: {
    title: "Pradhumn Gautam — Software Engineer",
    description:
      "Backend infrastructure, data integrity, and the systems behind the interface.",
    url: "https://www.pradhumn.com",
    type: "website",
    images: [{ url: "/pradhumngautam.jpeg", alt: "Pradhumn Gautam" }],
  },
  twitter: { card: "summary", creator: "@iPradhumnGautam" },
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${mono.variable}`}>
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
