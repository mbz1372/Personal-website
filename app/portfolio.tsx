'use client';

import { useEffect, useMemo, useState } from 'react';

type Lang = 'fa' | 'en';

type Copy = {
  nav: string[];
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  primary: string;
  secondary: string;
  introLabel: string;
  introTitle: string;
  introText: string;
  workLabel: string;
  workTitle: string;
  casesLabel: string;
  casesTitle: string;
  journeyLabel: string;
  journeyTitle: string;
  thinkingLabel: string;
  thinkingTitle: string;
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  copyEmail: string;
  copied: string;
};

const copy: Record<Lang, Copy> = {
  fa: {
    nav: ['کارها', 'کیس‌استادی', 'مسیر', 'نوشته‌ها', 'تماس'],
    heroKicker: 'Product · Operations · TravelTech · AI',
    heroTitle: 'پیچیدگی عملیاتی را به محصولی روشن، قابل‌اندازه‌گیری و قابل‌رشد تبدیل می‌کنم.',
    heroLead:
      'من محمد باقر ذوالفقاری هستم؛ مدیر محصول و عملیات با تمرکز بر ساخت CRM، داشبورد، سیستم‌های زنجیره تأمین و ابزارهایی که تیم‌ها واقعاً هر روز از آن‌ها استفاده می‌کنند.',
    primary: 'دیدن پروژه‌ها',
    secondary: 'دانلود رزومه',
    introLabel: 'چطور کار می‌کنم',
    introTitle: 'محصول برای من فقط صفحه و دکمه نیست؛ سیستم، رفتار تیم و نتیجه کسب‌وکار است.',
    introText:
      'از کشف مسئله و طراحی فرایند تا ساخت داشبورد، تعریف KPI و هماهنگی تیم‌های فنی و عملیاتی؛ مزیت من اتصال لایه‌های محصول، عملیات و تصمیم‌گیری است.',
    workLabel: 'Selected work',
    workTitle: 'کارهایی که در آن‌ها مسئله واقعی، داده و اجرا به یک محصول تبدیل شدند.',
    casesLabel: 'Case studies',
    casesTitle: 'سه مسئله، سه تصمیم محصول و اثر قابل‌اندازه‌گیری.',
    journeyLabel: 'Journey',
    journeyTitle: 'مسیر من از عملیات واقعی به ساخت سیستم‌های محصول‌محور رسیده است.',
    thinkingLabel: 'Thinking',
    thinkingTitle: 'درباره محصول، عملیات و سیستم‌هایی که واقعاً کار می‌کنند می‌نویسم.',
    contactEyebrow: 'Available for selected collaborations',
    contactTitle: 'بیایید چیزی بسازیم که فقط زیبا نباشد؛ واقعاً کار کند.',
    contactText: 'برای پروژه‌های Product Ops، TravelTech، CRM، داشبورد و طراحی سیستم‌های عملیاتی آماده گفت‌وگو هستم.',
    copyEmail: 'کپی ایمیل',
    copied: 'کپی شد',
  },
  en: {
    nav: ['Work', 'Case studies', 'Journey', 'Writing', 'Contact'],
    heroKicker: 'Product · Operations · TravelTech · AI',
    heroTitle: 'I turn operational complexity into products that are clear, measurable and ready to scale.',
    heroLead:
      'I am Mohammad Bagher Zolfaghari, a product and operations leader focused on CRM, dashboards, supply-chain systems and internal tools teams actually use every day.',
    primary: 'Explore selected work',
    secondary: 'Download résumé',
    introLabel: 'How I work',
    introTitle: 'Product is not just screens and buttons. It is systems, team behavior and business outcomes.',
    introText:
      'From discovery and workflow design to dashboards, KPIs and cross-functional delivery, my strength is connecting product, operations and decision-making.',
    workLabel: 'Selected work',
    workTitle: 'Projects where real operational problems became usable products.',
    casesLabel: 'Case studies',
    casesTitle: 'Three problems, three product decisions and measurable outcomes.',
    journeyLabel: 'Journey',
    journeyTitle: 'My path moved from real operations into building product-led systems.',
    thinkingLabel: 'Thinking',
    thinkingTitle: 'Notes on product, operations and systems that actually work.',
    contactEyebrow: 'Available for selected collaborations',
    contactTitle: 'Let’s build something that does more than look good — something that works.',
    contactText: 'Open to conversations around Product Ops, TravelTech, CRM, dashboards and operational system design.',
    copyEmail: 'Copy email',
    copied: 'Copied',
  },
};

const metrics = [
  ['3500+', 'Hotels in operational scope'],
  ['40%', 'Manual work reduced'],
  ['25%', 'SLA adherence improvement'],
  ['20–35%', 'Operational throughput growth'],
];

const projects = [
  {
    number: '01',
    type: 'Product Ops · CRM',
    titleFa: 'CRM اختصاصی برای تیم B2B و بازاریابی',
    titleEn: 'A custom CRM for B2B and marketing teams',
    textFa: 'طراحی ساختار فرصت، پیگیری، مشتری، گزارش و گردش‌کار بر اساس رفتار واقعی تیم؛ نه بر اساس فرم‌های آماده.',
    textEn: 'Designed opportunities, follow-ups, customer records, reporting and workflows around actual team behavior rather than generic forms.',
    tags: ['Discovery', 'Workflow', 'Internal tools'],
    tone: 'blue',
  },
  {
    number: '02',
    type: 'TravelTech · Supply',
    titleFa: 'داشبورد عملیاتی زنجیره تأمین هتل',
    titleEn: 'Hotel supply-chain operating dashboard',
    textFa: 'نمایش وضعیت نرخ، ظرفیت، provider، SLA و کیفیت تأمین برای تصمیم‌گیری سریع و کاهش خطاهای عملیاتی.',
    textEn: 'Unified pricing, inventory, provider, SLA and supply-quality signals for faster decisions and fewer operational errors.',
    tags: ['BI', 'Operations', 'Marketplace'],
    tone: 'green',
  },
  {
    number: '03',
    type: 'AI · Automation',
    titleFa: 'موتور پایش هوشمند نظرات',
    titleEn: 'AI-assisted review monitoring engine',
    textFa: 'ساخت سیستم مبتنی بر Google API برای کمک به تصمیم‌گیری انتشار یا رد نظر و کاهش کار تکراری تیم محتوا.',
    textEn: 'Built a Google API-based system that assisted publish/reject decisions and reduced repetitive content moderation work.',
    tags: ['Automation', 'Google API', 'Quality'],
    tone: 'violet',
  },
];

const cases = [
  {
    id: 'A',
    meta: 'Supply Chain · 3500+ hotels',
    titleFa: 'استانداردسازی عملیات تأمین در مقیاس بزرگ',
    titleEn: 'Standardizing supply operations at scale',
    resultFa: 'کاهش خطا، سرعت پاسخ بیشتر و دید مدیریتی یکپارچه.',
    resultEn: 'Fewer errors, faster response and unified management visibility.',
    stat: '40%',
  },
  {
    id: 'B',
    meta: 'Product Ops · CRM',
    titleFa: 'تبدیل نیازهای پراکنده تیم به یک سیستم واحد',
    titleEn: 'Turning scattered team needs into one operating system',
    resultFa: 'تعریف وضعیت‌ها، گردش‌کار، گزارش‌ها و مسئولیت‌های روشن.',
    resultEn: 'Clear states, workflows, reporting and ownership.',
    stat: '1 system',
  },
  {
    id: 'C',
    meta: 'SaaS · Startup',
    titleFa: 'SmartSync / LinkGenius از ایده تا محصول',
    titleEn: 'SmartSync / LinkGenius from idea to product',
    resultFa: 'چشم‌انداز، نقشه راه، تیم‌سازی و تحویل محصول CRM SaaS.',
    resultEn: 'Vision, roadmap, team formation and delivery of a CRM SaaS product.',
    stat: '0→1',
  },
];

const journey = [
  ['2024—Now', 'IranHotelOnline', 'Supply Chain Operations & Product'],
  ['2023—2025', 'IranHotelOnline', 'Product Manager / Website Product'],
  ['2019—2023', 'JRLead / SmartSync', 'Founding Product & Project Lead'],
  ['2018—2021', 'Brace', 'Co-founder & Operations Manager'],
];

const articles = [
  ['Product Ops', 'Why operational products fail before the UI is even built'],
  ['TravelTech', 'The three signals that reveal supply-chain quality'],
  ['CRM', 'A CRM should start with behavior, not fields'],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('fa');
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const storedLang = localStorage.getItem('mbz-lang') as Lang | null;
    const storedTheme = localStorage.getItem('mbz-theme');
    if (storedLang === 'fa' || storedLang === 'en') setLang(storedLang);
    if (storedTheme === 'dark') setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('mbz-lang', lang);
    localStorage.setItem('mbz-theme', dark ? 'dark' : 'light');
  }, [lang, dark]);

  const navLinks = useMemo(() => ['work', 'cases', 'journey', 'thinking', 'contact'], []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('mbz1372@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a href="#top" className="logo" aria-label="MBZ home">
          <span>MBZ</span>
          <small>Product × Operations</small>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {navLinks.map((link, index) => (
            <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {t.nav[index]}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <button className="ghost-button" onClick={() => setDark((value) => !value)} aria-label="Toggle theme">
            {dark ? 'Light' : 'Dark'}
          </button>
          <button className="ghost-button" onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}>
            {lang === 'fa' ? 'EN' : 'FA'}
          </button>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-lead">{t.heroLead}</p>
          <div className="hero-actions">
            <a href="#work" className="button primary">{t.primary}<ArrowIcon /></a>
            <a href="/Zolfaghari-Resume.pdf" className="button secondary">{t.secondary}</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Profile visual">
          <div className="portrait-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt="Mohammad Bagher Zolfaghari" />
            <div className="portrait-overlay">
              <span>Based in Mashhad</span>
              <strong>Building systems that move teams forward.</strong>
            </div>
          </div>
          <div className="orbit orbit-a">CRM</div>
          <div className="orbit orbit-b">TravelTech</div>
          <div className="orbit orbit-c">AI</div>
        </div>
      </section>

      <section className="metrics-strip" aria-label="Impact metrics">
        {metrics.map(([value, label]) => (
          <div key={label} className="metric">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="intro-section section-shell">
        <p className="section-label">{t.introLabel}</p>
        <div className="intro-grid">
          <h2>{t.introTitle}</h2>
          <p>{t.introText}</p>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <div><p className="section-label">{t.workLabel}</p><h2>{t.workTitle}</h2></div>
          <span className="section-count">03 / 03</span>
        </div>
        <div className="project-stack">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="project-topline"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-grid">
                <div>
                  <h3>{lang === 'fa' ? project.titleFa : project.titleEn}</h3>
                  <p>{lang === 'fa' ? project.textFa : project.textEn}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-art" aria-hidden="true">
                  <div className="ui-window">
                    <div className="ui-header"><i /><i /><i /></div>
                    <div className="ui-content"><b /><span /><span /><span /><div /></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section section-shell" id="cases">
        <div className="section-heading compact">
          <div><p className="section-label">{t.casesLabel}</p><h2>{t.casesTitle}</h2></div>
        </div>
        <div className="case-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.id}>
              <div className="case-index">{item.id}</div>
              <p className="case-meta">{item.meta}</p>
              <h3>{lang === 'fa' ? item.titleFa : item.titleEn}</h3>
              <p>{lang === 'fa' ? item.resultFa : item.resultEn}</p>
              <div className="case-stat">{item.stat}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section section-shell" id="journey">
        <div className="journey-intro"><p className="section-label">{t.journeyLabel}</p><h2>{t.journeyTitle}</h2></div>
        <div className="timeline">
          {journey.map(([year, company, role], index) => (
            <div className="timeline-row" key={`${year}-${company}`}>
              <span className="timeline-index">0{index + 1}</span>
              <strong>{year}</strong>
              <h3>{company}</h3>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="thinking-section section-shell" id="thinking">
        <div className="section-heading compact"><div><p className="section-label">{t.thinkingLabel}</p><h2>{t.thinkingTitle}</h2></div></div>
        <div className="article-list">
          {articles.map(([category, title], index) => (
            <a className="article-row" href="mailto:mbz1372@gmail.com" key={title}>
              <span>0{index + 1}</span><small>{category}</small><h3>{title}</h3><ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="section-label">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
        </div>
        <div className="contact-actions">
          <a className="button light" href="mailto:mbz1372@gmail.com">mbz1372@gmail.com<ArrowIcon /></a>
          <button className="button outline-light" onClick={copyEmail}>{copied ? t.copied : t.copyEmail}</button>
        </div>
        <footer>
          <span>© 2026 MBZ</span>
          <div><a href="https://www.linkedin.com/in/mbzolfaghari">LinkedIn</a><a href="https://t.me/mbzolfaghari">Telegram</a><a href="https://instagram.com/mbzolfaghari">Instagram</a><a href="/admin">Admin</a></div>
        </footer>
      </section>
    </main>
  );
}
