import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Pradhumn Gautam | Software Engineer",
  description: "Software engineer building backend, data, and AI-powered systems.",
  icons: { icon: "/photo.jpeg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#111111]">
        <ThemeProvider attribute="class" forcedTheme="dark">
          <div className="top-gradient" />
          <Header />
          <main className="mx-auto px-6 py-16 md:max-w-screen-md md:px-0 md:py-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
