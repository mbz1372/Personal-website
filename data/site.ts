export type Locale = 'fa' | 'en'

export const projects = [
  {
    slug: 'hotel-supply-os', tone: 'blue', metric: '3,500+',
    metricLabel: { fa: 'هتل در دامنه عملیات', en: 'hotels in operations scope' },
    title: { fa: 'سیستم عامل زنجیره تأمین هتل', en: 'Hotel Supply Operating System' },
    summary: { fa: 'طراحی ساختار داده، SLA، پایش نرخ و ظرفیت و گردش‌کار عملیاتی برای تصمیم‌گیری سریع‌تر در مقیاس هزاران هتل.', en: 'A data, SLA, pricing and inventory operating model designed for faster decisions across thousands of hotels.' },
    tags: ['TravelTech', 'Marketplace Ops', 'BI'],
    challenge: { fa: 'داده‌های پراکنده، خطاهای نرخ و ظرفیت و نبود دید یکپارچه مدیریتی.', en: 'Fragmented data, pricing and inventory errors, and no unified management view.' },
    approach: { fa: 'تعریف KPI، استانداردسازی فرآیند، طراحی داشبورد و اتصال تصمیم محصول به اجرای عملیات.', en: 'Defined KPIs, standardized workflows, designed dashboards, and connected product decisions to operations.' },
    result: { fa: 'کاهش ۴۰٪ کار دستی و بهبود ۲۵٪ پایبندی به SLA.', en: 'Reduced manual work by 40% and improved SLA adherence by 25%.' }
  },
  {
    slug: 'b2b-crm', tone: 'green', metric: '40%',
    metricLabel: { fa: 'کاهش کار دستی', en: 'less manual work' },
    title: { fa: 'CRM اختصاصی B2B و بازاریابی', en: 'Custom B2B & Marketing CRM' },
    summary: { fa: 'تبدیل نیازهای پراکنده تیم‌های فروش و بازاریابی به یک محصول داخلی با pipeline، گزارش و گردش‌کار قابل مدیریت.', en: 'Turned fragmented sales and marketing needs into an internal product with pipelines, reporting and manageable workflows.' },
    tags: ['CRM', 'Product Ops', 'Automation'],
    challenge: { fa: 'پیگیری‌های دستی، داده‌های ناقص و گزارش‌گیری زمان‌بر.', en: 'Manual follow-ups, incomplete data and slow reporting.' },
    approach: { fa: 'مصاحبه با ذی‌نفعان، طراحی مدل داده، وضعیت‌ها، نقش‌ها و اتوماسیون‌ها.', en: 'Stakeholder interviews, data modeling, stages, permissions and automation design.' },
    result: { fa: 'ایجاد یک مرجع واحد برای عملیات B2B و تصمیم‌گیری مدیریتی.', en: 'Created a single source of truth for B2B execution and management decisions.' }
  },
  {
    slug: 'smart-review-engine', tone: 'violet', metric: 'AI',
    metricLabel: { fa: 'موتور پایش نظرات', en: 'review intelligence engine' },
    title: { fa: 'سیستم هوشمند پایش نظرات', en: 'Smart Review Monitoring' },
    summary: { fa: 'استفاده از Google API و قواعد تصمیم‌گیری برای کمک به بررسی، انتشار یا رد نظرات با کنترل کیفیت بهتر.', en: 'Used Google APIs and decision rules to support review moderation with better quality control.' },
    tags: ['AI', 'Google API', 'Workflow'],
    challenge: { fa: 'حجم بالای بررسی دستی و ناهماهنگی در تصمیم‌های انتشار.', en: 'High manual review volume and inconsistent publishing decisions.' },
    approach: { fa: 'تعریف معیارهای ارزیابی و ساخت یک لایه پیشنهاددهنده برای اپراتور.', en: 'Defined evaluation criteria and built a recommendation layer for operators.' },
    result: { fa: 'کاهش کار تکراری و افزایش سرعت و ثبات کنترل محتوا.', en: 'Reduced repetitive work and improved moderation speed and consistency.' }
  }
] as const

export const experience = [
  { period: { fa: '۱۴۰۴ — اکنون', en: '2025 — Present' }, role: { fa: 'مدیر عملیات زنجیره تأمین', en: 'Supply Chain Operations Manager' }, org: 'IranHotelOnline', detail: { fa: 'رهبری عملیات و فرآیندهای تأمین برای بیش از ۳۵۰۰ هتل، طراحی SOP، داشبورد و اتوماسیون.', en: 'Leading supply operations for 3,500+ hotels, designing SOPs, dashboards and automation.' } },
  { period: { fa: '۱۴۰۳ — ۱۴۰۴', en: '2024 — 2025' }, role: { fa: 'مدیر محصول', en: 'Product Manager' }, org: 'IranHotelOnline', detail: { fa: 'مدیریت roadmap سیستم‌های CRM/CMS، طراحی BI و هماهنگی بین محصول، طراحی، مهندسی و عملیات.', en: 'Managed CRM/CMS roadmaps, designed BI, and aligned product, design, engineering and operations.' } },
  { period: { fa: '۱۴۰۲ — ۱۴۰۴', en: '2023 — 2025' }, role: { fa: 'توسعه محصول و عملیات وبسایت', en: 'Website Product & Operations' }, org: 'IranHotelOnline', detail: { fa: 'بهینه‌سازی conversion، جایگذاری، کمپین و پیکربندی محتوای بیش از ۳۵۰۰ هتل.', en: 'Optimized conversion, merchandising, campaigns and content operations for 3,500+ hotels.' } },
  { period: { fa: '۱۳۹۹ — ۱۴۰۲', en: '2020 — 2023' }, role: { fa: 'عضو تیم مؤسس و رهبر محصول', en: 'Founding Team & Product Lead' }, org: 'SmartSync / LinkGenius', detail: { fa: 'تعریف چشم‌انداز، تیم‌سازی و ساخت CRM هوشمند SaaS از ایده تا عرضه.', en: 'Defined vision, built the team and delivered an intelligent CRM SaaS from idea to launch.' } }
] as const

export const skills = ['Product Strategy','Product Operations','CRM','TravelTech','Marketplace Operations','Data Analysis','KPI & OKR','SOP Design','Jira','Git','Web Development','AI Workflows']