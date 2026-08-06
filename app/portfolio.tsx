'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Lang = 'fa' | 'en';
type ProjectKey = 'crm' | 'supply' | 'ai';

type Project = {
  key: ProjectKey;
  index: string;
  category: string;
  titleFa: string;
  titleEn: string;
  summaryFa: string;
  summaryEn: string;
  metric: string;
  metricLabelFa: string;
  metricLabelEn: string;
  tags: string[];
};

const projects: Project[] = [
  {
    key: 'crm',
    index: '01',
    category: 'PRODUCT OPS / CRM',
    titleFa: 'سیستم CRM که رفتار واقعی تیم را به جریان کاری تبدیل می‌کند.',
    titleEn: 'A CRM operating system shaped around how teams actually work.',
    summaryFa:
      'از کشف مسئله و طراحی وضعیت‌ها تا گزارش‌گیری و مالکیت فرایند؛ یک ابزار داخلی برای تبدیل پیگیری‌های پراکنده به عملیات قابل‌اندازه‌گیری.',
    summaryEn:
      'From discovery and state design to reporting and ownership, this internal platform turned scattered follow-ups into measurable operations.',
    metric: '1 OS',
    metricLabelFa: 'برای فروش، بازاریابی و مدیریت',
    metricLabelEn: 'for sales, marketing and leadership',
    tags: ['Discovery', 'Workflow', 'Reporting', 'Adoption'],
  },
  {
    key: 'supply',
    index: '02',
    category: 'TRAVELTECH / SUPPLY',
    titleFa: 'مرکز فرمان زنجیره تأمین برای تصمیم‌گیری در مقیاس هزاران هتل.',
    titleEn: 'A supply command center for decisions across thousands of hotels.',
    summaryFa:
      'یک نمای واحد از نرخ، ظرفیت، SLA، وضعیت تأمین‌کننده و کیفیت موجودی؛ برای اینکه تیم به‌جای جست‌وجوی داده، روی تصمیم تمرکز کند.',
    summaryEn:
      'One operational view of pricing, inventory, SLA, provider health and supply quality—so teams can focus on decisions instead of chasing data.',
    metric: '3500+',
    metricLabelFa: 'هتل در دامنه عملیات',
    metricLabelEn: 'hotels in operational scope',
    tags: ['BI', 'Marketplace', 'SLA', 'Automation'],
  },
  {
    key: 'ai',
    index: '03',
    category: 'AI / AUTOMATION',
    titleFa: 'موتور هوشمندی که کار تکراری را به تصمیم سریع و قابل‌کنترل تبدیل می‌کند.',
    titleEn: 'An intelligence layer that turns repetitive work into faster decisions.',
    summaryFa:
      'سیستم کمک‌تصمیم برای بررسی نظرات، کاهش فعالیت دستی و ایجاد کنترل کیفی؛ با ترکیب API، قواعد کسب‌وکار و نظارت انسانی.',
    summaryEn:
      'A decision-support system for review moderation, reducing repetitive work while preserving quality through APIs, business rules and human oversight.',
    metric: '40%',
    metricLabelFa: 'کاهش فعالیت دستی',
    metricLabelEn: 'less repetitive work',
    tags: ['AI Assist', 'Google API', 'Quality', 'Human in loop'],
  },
];

const capabilities = [
  ['01', 'Product strategy', 'Roadmaps, prioritization, outcome design'],
  ['02', 'Operational systems', 'SLA, workflow, ownership and scale'],
  ['03', 'Data products', 'Dashboards, signals, KPI and decision layers'],
  ['04', 'Marketplace growth', 'Supply quality, pricing and partner systems'],
  ['05', 'AI automation', 'Assistive workflows with human control'],
  ['06', 'Cross-functional leadership', 'Product, tech, finance, sales and ops'],
];

const experience = [
  {
    year: '2024—NOW',
    company: 'IranHotelOnline',
    roleFa: 'مدیر ارشد محصول و عملیات کسب‌وکار',
    roleEn: 'Senior Product Manager & Business Operator',
    detailFa: 'رهبری سیستم‌های محصول، زنجیره تأمین، قیمت‌گذاری، تأمین‌کنندگان و ابزارهای عملیاتی در TravelTech.',
    detailEn: 'Leading product systems, supply operations, pricing, providers and internal tooling in TravelTech.',
  },
  {
    year: '2019—2023',
    company: 'SmartSync / JRLead',
    roleFa: 'بنیان‌گذار محصول و مدیر پروژه',
    roleEn: 'Founding Product & Project Lead',
    detailFa: 'ساخت محصولات CRM، ابزارهای کسب‌وکار و راهکارهای اختصاصی از کشف نیاز تا تحویل.',
    detailEn: 'Built CRM products, business tools and tailored systems from discovery through delivery.',
  },
  {
    year: '2018—2021',
    company: 'Brace',
    roleFa: 'هم‌بنیان‌گذار و مدیر عملیات',
    roleEn: 'Co-founder & Operations Manager',
    detailFa: 'طراحی فرایند، اجرای پروژه و ساخت تیم برای محصولات و خدمات دیجیتال.',
    detailEn: 'Designed operations, delivered projects and built teams around digital products and services.',
  },
];

const copy = {
  fa: {
    nav: ['کارهای منتخب', 'توانایی‌ها', 'مسیر', 'ارتباط'],
    status: 'آماده همکاری روی پروژه‌های بین‌المللی منتخب',
    eyebrow: 'PRODUCT × OPERATIONS × SYSTEMS',
    titleA: 'محصولاتی می‌سازم که',
    titleB: 'پیچیدگی را به حرکت تبدیل می‌کنند.',
    lead:
      'محمد باقر ذوالفقاری هستم؛ مدیر محصول و عملیات با تمرکز بر TravelTech، CRM، Marketplace و سیستم‌هایی که داده، تیم و اجرا را به هم متصل می‌کنند.',
    primary: 'مشاهده کارها',
    secondary: 'دریافت رزومه',
    proofA: 'هتل در دامنه عملیات',
    proofB: 'کاهش کار دستی',
    proofC: 'بهبود پایبندی SLA',
    manifesto: 'من رابط کاربری تحویل نمی‌دهم؛ سیستم تصمیم‌گیری، جریان کار و نتیجه قابل‌اندازه‌گیری می‌سازم.',
    workLabel: 'SELECTED SYSTEMS',
    workTitle: 'سه محصول، سه مسئله واقعی، یک رویکرد: وضوح در مقیاس.',
    explore: 'مشاهده ساختار پروژه',
    capabilitiesLabel: 'CAPABILITY SYSTEM',
    capabilitiesTitle: 'ترکیب محصول، عملیات و داده برای پروژه‌هایی که باید واقعاً کار کنند.',
    journeyLabel: 'EXPERIENCE',
    journeyTitle: 'مسیر حرفه‌ای من از داخل عملیات شروع شد و به ساخت سیستم‌های محصول‌محور رسید.',
    contactLabel: 'LET’S BUILD',
    contactTitle: 'برای ساخت یک محصول بین‌المللی، فقط ایده کافی نیست؛ سیستم لازم است.',
    contactText: 'برای نقش‌های Remote Product، Business Operations و پروژه‌های TravelTech، SaaS و Marketplace آماده گفت‌وگو هستم.',
    email: 'شروع گفتگو',
    copied: 'ایمیل کپی شد',
  },
  en: {
    nav: ['Selected work', 'Capabilities', 'Journey', 'Contact'],
    status: 'Available for selected international collaborations',
    eyebrow: 'PRODUCT × OPERATIONS × SYSTEMS',
    titleA: 'I build products that turn',
    titleB: 'complexity into momentum.',
    lead:
      'I am Mohammad Bagher Zolfaghari, a product and operations leader focused on TravelTech, CRM, marketplaces and systems that connect data, teams and execution.',
    primary: 'Explore selected work',
    secondary: 'Download résumé',
    proofA: 'hotels in operational scope',
    proofB: 'less repetitive work',
    proofC: 'SLA adherence improvement',
    manifesto: 'I do not just ship interfaces. I build decision systems, operating flows and measurable outcomes.',
    workLabel: 'SELECTED SYSTEMS',
    workTitle: 'Three products, three real problems, one approach: clarity at scale.',
    explore: 'Explore project system',
    capabilitiesLabel: 'CAPABILITY SYSTEM',
    capabilitiesTitle: 'Product, operations and data combined for work that must perform in the real world.',
    journeyLabel: 'EXPERIENCE',
    journeyTitle: 'My career started inside operations and evolved into building product-led systems.',
    contactLabel: 'LET’S BUILD',
    contactTitle: 'International products need more than ideas. They need operating systems.',
    contactText: 'Open to remote product, business operations and selected TravelTech, SaaS and marketplace collaborations.',
    email: 'Start a conversation',
    copied: 'Email copied',
  },
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={diagonal ? 'M6 18 18 6M9 6h9v9' : 'M5 12h13M13 6l6 6-6 6'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SystemVisual({ active }: { active: ProjectKey }) {
  return (
    <div className={`system-visual system-${active}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="signal signal-one" />
      <div className="signal signal-two" />
      <div className="system-core">
        <span>MBZ / OS</span>
        <strong>{active === 'crm' ? 'CUSTOMER FLOW' : active === 'supply' ? 'SUPPLY SIGNALS' : 'DECISION ENGINE'}</strong>
        <small>LIVE SYSTEM / 2026</small>
      </div>
      <div className="system-ring ring-one" />
      <div className="system-ring ring-two" />
      <div className="system-node node-a"><i />CRM</div>
      <div className="system-node node-b"><i />SUPPLY</div>
      <div className="system-node node-c"><i />AI</div>
      <div className="system-node node-d"><i />BI</div>
      <div className="system-readout readout-a"><span>LIVE</span><strong>98.4%</strong><small>system health</small></div>
      <div className="system-readout readout-b"><span>FLOW</span><strong>24/7</strong><small>operational signal</small></div>
    </div>
  );
}

function ProjectInterface({ type }: { type: ProjectKey }) {
  if (type === 'crm') {
    return (
      <div className="product-ui crm-ui" aria-hidden="true">
        <div className="ui-top"><span /><b>MBZ CRM</b><i>•••</i></div>
        <div className="ui-body">
          <aside><strong>Pipeline</strong><span>Overview</span><span>Accounts</span><span>Activities</span><span>Insights</span></aside>
          <section>
            <div className="ui-kpi-row"><div><small>Active accounts</small><strong>428</strong></div><div><small>Next actions</small><strong>76</strong></div><div><small>Conversion</small><strong>31%</strong></div></div>
            <div className="pipeline"><article><small>NEW</small><b>12</b><span /><span /><span /></article><article><small>QUALIFIED</small><b>28</b><span /><span /><span /></article><article><small>NEGOTIATION</small><b>16</b><span /><span /></article></div>
          </section>
        </div>
      </div>
    );
  }

  if (type === 'supply') {
    return (
      <div className="product-ui supply-ui" aria-hidden="true">
        <div className="ui-top"><span /><b>SUPPLY COMMAND</b><i>LIVE</i></div>
        <div className="supply-map">
          <div className="map-orbit orbit-1" /><div className="map-orbit orbit-2" />
          <div className="map-point p1" /><div className="map-point p2" /><div className="map-point p3" /><div className="map-point p4" /><div className="map-point p5" />
          <div className="map-card"><small>Inventory health</small><strong>92.8%</strong><span>+4.6 this week</span></div>
          <div className="map-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-ui ai-ui" aria-hidden="true">
      <div className="ui-top"><span /><b>REVIEW INTELLIGENCE</b><i>AI ASSIST</i></div>
      <div className="ai-layout">
        <div className="review-card"><small>Incoming review</small><p>رفتار کارکنان بسیار حرفه‌ای بود و...</p><div><span>Confidence 96%</span><b>Publish</b></div></div>
        <div className="decision-stack"><article><span>01</span><div><small>Safety check</small><strong>Passed</strong></div></article><article><span>02</span><div><small>Language quality</small><strong>High</strong></div></article><article><span>03</span><div><small>Human review</small><strong>Ready</strong></div></article></div>
        <div className="ai-pulse"><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('fa');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectKey>('crm');
  const [copied, setCopied] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  useEffect(() => {
    const stored = localStorage.getItem('mbz-lang');
    if (stored === 'fa' || stored === 'en') setLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('mbz-lang', lang);
  }, [lang]);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.16 },
    );
    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const navTargets = useMemo(() => ['work', 'capabilities', 'journey', 'contact'], []);
  const active = projects.find((project) => project.key === activeProject) ?? projects[0];

  const handlePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!heroRef.current || event.pointerType === 'touch') return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    heroRef.current.style.setProperty('--mx', x.toFixed(3));
    heroRef.current.style.setProperty('--my', y.toFixed(3));
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('mbz1372@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <main className="portfolio-shell">
      <div className="page-noise" />
      <header className="global-nav">
        <a className="identity" href="#top" aria-label="MBZ home">
          <span>MBZ</span>
          <div><strong>Mohammad Bagher Zolfaghari</strong><small>Product & Operations</small></div>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          {navTargets.map((target, index) => <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>{t.nav[index]}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="language-switch" onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}>{lang === 'fa' ? 'EN' : 'FA'}</button>
          <button className="mobile-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu"><span /><span /></button>
        </div>
      </header>

      <section className="hero-section" id="top" ref={heroRef} onPointerMove={handlePointer}>
        <div className="hero-copy" data-reveal>
          <div className="availability"><i />{t.status}</div>
          <p className="micro-label">{t.eyebrow}</p>
          <h1><span>{t.titleA}</span><em>{t.titleB}</em></h1>
          <p className="hero-description">{t.lead}</p>
          <div className="hero-cta">
            <a className="action action-primary" href="#work">{t.primary}<Arrow /></a>
            <a className="action action-ghost" href="/Zolfaghari-Resume.pdf">{t.secondary}<Arrow diagonal /></a>
          </div>
          <div className="hero-proof">
            <div><strong>3500+</strong><span>{t.proofA}</span></div>
            <div><strong>40%</strong><span>{t.proofB}</span></div>
            <div><strong>25%</strong><span>{t.proofC}</span></div>
          </div>
        </div>
        <div className="hero-system" data-reveal>
          <SystemVisual active={activeProject} />
        </div>
        <div className="hero-index"><span>01</span><small>INTRO / 05</small></div>
      </section>

      <section className="manifesto-band" data-reveal>
        <p>{t.manifesto}</p>
        <div className="marquee" aria-hidden="true"><span>TRAVELTECH · CRM · MARKETPLACE · AI · OPERATIONS · DATA · </span><span>TRAVELTECH · CRM · MARKETPLACE · AI · OPERATIONS · DATA · </span></div>
      </section>

      <section className="project-section" id="work">
        <div className="section-intro" data-reveal>
          <p className="micro-label">{t.workLabel}</p>
          <h2>{t.workTitle}</h2>
        </div>

        <div className="project-experience" data-reveal>
          <div className="project-selector" role="tablist" aria-label="Selected projects">
            {projects.map((project) => (
              <button key={project.key} className={activeProject === project.key ? 'is-active' : ''} onClick={() => setActiveProject(project.key)} role="tab" aria-selected={activeProject === project.key}>
                <span>{project.index}</span><div><small>{project.category}</small><strong>{lang === 'fa' ? project.titleFa : project.titleEn}</strong></div><i />
              </button>
            ))}
          </div>

          <article className={`project-stage stage-${active.key}`}>
            <div className="stage-copy">
              <div className="stage-meta"><span>{active.index}</span><small>{active.category}</small></div>
              <h3>{lang === 'fa' ? active.titleFa : active.titleEn}</h3>
              <p>{lang === 'fa' ? active.summaryFa : active.summaryEn}</p>
              <div className="stage-tags">{active.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="stage-impact"><strong>{active.metric}</strong><span>{lang === 'fa' ? active.metricLabelFa : active.metricLabelEn}</span></div>
              <button className="text-link">{t.explore}<Arrow diagonal /></button>
            </div>
            <div className="stage-visual"><ProjectInterface type={active.key} /></div>
          </article>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-intro split" data-reveal>
          <div><p className="micro-label">{t.capabilitiesLabel}</p><h2>{t.capabilitiesTitle}</h2></div>
          <p>Strategy is useful only when it becomes an operating model teams can understand, adopt and improve.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([number, title, detail], index) => (
            <article key={title} className={`capability-card card-${index + 1}`} data-reveal>
              <div><span>{number}</span><i /></div><h3>{title}</h3><p>{detail}</p><small>MBZ / CAPABILITY</small>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="journey-heading" data-reveal><p className="micro-label">{t.journeyLabel}</p><h2>{t.journeyTitle}</h2></div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article key={item.year} data-reveal>
              <span className="experience-number">0{index + 1}</span><strong className="experience-year">{item.year}</strong><div><small>{item.company}</small><h3>{lang === 'fa' ? item.roleFa : item.roleEn}</h3></div><p>{lang === 'fa' ? item.detailFa : item.detailEn}</p><i className="experience-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit orbit-blue" /><div className="contact-orbit orbit-green" />
        <div className="contact-content" data-reveal>
          <p className="micro-label">{t.contactLabel}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div><a className="action action-light" href="mailto:mbz1372@gmail.com">{t.email}<Arrow /></a><button className="copy-button" onClick={copyEmail}>{copied ? t.copied : 'mbz1372@gmail.com'}</button></div>
        </div>
        <footer><span>© 2026 MBZ / Mashhad</span><nav><a href="https://www.linkedin.com/in/mbzolfaghari">LinkedIn</a><a href="https://github.com/mbz1372">GitHub</a><a href="https://t.me/mbzolfaghari">Telegram</a><a href="/admin">Studio</a></nav></footer>
      </section>
    </main>
  );
}
