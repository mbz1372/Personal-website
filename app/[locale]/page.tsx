import Link from "next/link";
import { locales, type Locale } from "@/lib/i18n";

export const dynamicParams = false;

export async function generateStaticParams() {
  return locales.map((l) => ({ locale: l }));
}

export default function Home({ params }: { params: { locale: Locale } }) {
  const isFa = params.locale === "fa";
  return (
    <section className="grid gap-6">
      <div className="card">
        <h1 className="text-2xl font-bold">
          {isFa ? "سلام! من محمد باقر ذوالفقاری هستم." : "Hi, I'm Mohammad Bagher Zolfaghari."}
        </h1>
        <p className="mt-2">
          {isFa
            ? "مدیر محصول؛ اینجا رزومه، نمونه‌کارها و نوشته‌های من است."
            : "Product Manager; this is my resume, portfolio, and writings."}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <Link href={`/${params.locale}/articles`} className="card">
          <h2 className="font-semibold">{isFa ? "مقالات" : "Articles"}</h2>
          <p className="opacity-80 text-sm">{isFa ? "یادداشت‌ها و تحلیل‌ها" : "Notes and analyses"}</p>
        </Link>
        <Link href={`/${params.locale}/books`} className="card">
          <h2 className="font-semibold">{isFa ? "کتاب‌ها" : "Books"}</h2>
          <p className="opacity-80 text-sm">{isFa ? "مطالعه و خلاصه‌ها" : "Reading & summaries"}</p>
        </Link>
        <Link href={`/${params.locale}/videos`} className="card">
          <h2 className="font-semibold">{isFa ? "ویدیوها" : "Videos"}</h2>
          <p className="opacity-80 text-sm">{isFa ? "درس‌ها و ارائه‌ها" : "Lessons & talks"}</p>
        </Link>
        <Link href={`/${params.locale}/about`} className="card">
          <h2 className="font-semibold">{isFa ? "درباره من" : "About"}</h2>
          <p className="opacity-80 text-sm">{isFa ? "مسیر شغلی و مهارت‌ها" : "Career & skills"}</p>
        </Link>
      </div>
    </section>
  );
}
