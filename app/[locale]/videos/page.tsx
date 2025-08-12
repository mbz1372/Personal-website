import { type Locale } from "@/lib/i18n";

export default function Videos({ params }: { params: { locale: Locale } }) {
  const isFa = params.locale === "fa";
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-bold">{isFa ? "ویدیوها" : "Videos"}</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card">
          <div className="font-semibold">{isFa ? "درس‌های مدیریت محصول" : "Product Management Lessons"}</div>
          <div className="text-sm opacity-70">{isFa ? "نمونه ویدیو" : "Sample video"}</div>
        </div>
        <div className="card">
          <div className="font-semibold">{isFa ? "تجزیه و تحلیل بازار" : "Market Analysis"}</div>
          <div className="text-sm opacity-70">{isFa ? "نمونه ویدیو" : "Sample video"}</div>
        </div>
      </div>
    </section>
  );
}
