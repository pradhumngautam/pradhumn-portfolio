import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    <html lang="en">
      <body>
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
