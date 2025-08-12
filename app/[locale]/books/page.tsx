import { type Locale } from "@/lib/i18n";

export default function Books({ params }: { params: { locale: Locale } }) {
  const isFa = params.locale === "fa";
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-bold">{isFa ? "کتاب‌ها" : "Books"}</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card">
          <div className="font-semibold">{isFa ? "انجیل متریک‌ها" : "The Lean Analytics"}</div>
          <div className="text-sm opacity-70">{isFa ? "یادداشت و خلاصه" : "Notes & summary"}</div>
        </div>
        <div className="card">
          <div className="font-semibold">{isFa ? "الهام‌بخش محصول" : "Inspired"}</div>
          <div className="text-sm opacity-70">{isFa ? "یادداشت و خلاصه" : "Notes & summary"}</div>
        </div>
      </div>
    </section>
  );
}
