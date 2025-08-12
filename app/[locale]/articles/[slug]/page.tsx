import { notFound } from "next/navigation";
import { type Locale } from "@/lib/i18n";

const sample = {
  "product-metrics": {
    fa: "این یک نمونه مقاله درباره متریک‌های کلیدی محصول است.",
    en: "This is a sample article about core product metrics."
  },
  "hotel-ops": {
    fa: "این یک نمونه مقاله درباره بهینه‌سازی عملیات هتل است.",
    en: "This is a sample article about optimizing hotel operations."
  }
};

export default function Article({ params }: { params: { locale: Locale; slug: string } }) {
  const isFa = params.locale === "fa";
  const data = sample[params.slug as keyof typeof sample];
  if (!data) return notFound();
  return (
    <article className="prose max-w-none">
      <h1>{isFa ? "نمونه مقاله" : "Sample article"}</h1>
      <p>{isFa ? data.fa : data.en}</p>
    </article>
  );
}
