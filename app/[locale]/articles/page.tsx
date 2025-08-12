import Link from "next/link";
import { type Locale } from "../layout";

const sample = [
  { slug: "product-metrics", fa: "متریک‌های کلیدی محصول", en: "Core product metrics" },
  { slug: "hotel-ops", fa: "بهینه‌سازی عملیات هتل", en: "Optimizing hotel operations" },
];

export default function Articles({ params }: { params: { locale: Locale } }) {
  const isFa = params.locale === "fa";
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-bold">{isFa ? "مقالات" : "Articles"}</h1>
      <div className="grid gap-3">
        {sample.map((p) => (
          <Link key={p.slug} href={`/${params.locale}/articles/${p.slug}`} className="card">
            <h3 className="font-semibold">{isFa ? p.fa : p.en}</h3>
            <p className="text-sm opacity-70">{isFa ? "نمونه مطلب" : "Sample post"}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
