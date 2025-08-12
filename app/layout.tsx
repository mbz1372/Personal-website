import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Bagher Zolfaghari",
  description: "Resume, portfolio and writings of Mohammad Bagher Zolfaghari.",
  openGraph: {
    type: "website",
    title: "Mohammad Bagher Zolfaghari",
    description: "Resume, portfolio and writings.",
    images: ["/og.jpg"],
    url: "https://mbzolfaghari.ir"
  },
  alternates: {
    languages: {
      fa: "/fa",
      en: "/en"
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Tip: lang/dir attributes are set in the per-locale layouts under /app/[locale]/layout.tsx
  return children;
}
