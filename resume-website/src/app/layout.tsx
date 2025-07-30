import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "محمد بهنام ذوالفقاری | مدیر محصول",
  description: "وب‌سایت شخصی محمد بهنام ذوالفقاری - مدیر محصول با تجربه در توسعه محصولات دیجیتال",
  keywords: "مدیر محصول, Product Manager, محمد بهنام ذوالفقاری, تکنولوژی, نوآوری",
  authors: [{ name: "محمد بهنام ذوالفقاری" }],
  creator: "محمد بهنام ذوالفقاری",
  publisher: "محمد بهنام ذوالفقاری",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://mbzolfaghari.com",
    title: "محمد بهنام ذوالفقاری | مدیر محصول",
    description: "وب‌سایت شخصی محمد بهنام ذوالفقاری - مدیر محصول با تجربه در توسعه محصولات دیجیتال",
    siteName: "محمد بهنام ذوالفقاری",
  },
  twitter: {
    card: "summary_large_image",
    title: "محمد بهنام ذوالفقاری | مدیر محصول",
    description: "وب‌سایت شخصی محمد بهنام ذوالفقاری - مدیر محصول با تجربه در توسعه محصولات دیجیتال",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body
        className={`${inter.variable} font-persian min-h-screen bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
