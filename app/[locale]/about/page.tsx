import { type Locale } from "@/lib/i18n";

export default function About({ params }: { params: { locale: Locale } }) {
  const isFa = params.locale === "fa";
  return (
    <section className="grid gap-4">
      <h1 className="text-2xl font-bold">{isFa ? "درباره من" : "About me"}</h1>
      <div className="card">
        <p>
          {isFa
            ? "مدیر محصول با تجربه در طراحی و راه‌اندازی محصولات وب؛ عاشق سیستم‌های داده‌محور و تجربه کاربری مینیمال."
            : "Product manager experienced in designing and launching web products; passionate about data-driven systems and minimal UX."}
        </p>
      </div>
    </section>
  );
}
