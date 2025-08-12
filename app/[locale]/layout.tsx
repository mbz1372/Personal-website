import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import type { Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((l) => ({ locale: l }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const isFa = params.locale === "fa";
  return {
    title: isFa ? "محمد باقر ذوالفقاری | مدیر محصول" : "Mohammad Bagher Zolfaghari | Product Manager",
    description: isFa ? "رزومه، نمونه‌کارها و مقالات" : "Resume, portfolio and articles",
    alternates: {
      languages: {
        fa: "/fa",
        en: "/en"
      }
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const isFa = params.locale === "fa";
  return (
    <html lang={isFa ? "fa" : "en"} dir={isFa ? "rtl" : "ltr"} suppressHydrationWarning>
      <body>
        <Navbar locale={isFa ? "fa" : "en"} />
        <main className="container py-10">{children}</main>
        <footer className="border-t mt-16">
          <div className="container py-10 text-sm opacity-70">
            {isFa ? "© همه حقوق محفوظ است." : "© All rights reserved."}
          </div>
        </footer>
      </body>
    </html>
  );
}
