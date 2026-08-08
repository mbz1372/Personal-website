'use client';

import { useEffect, useState } from 'react';

type Draft = {
  faHeadline: string;
  enHeadline: string;
  faIntro: string;
  enIntro: string;
  email: string;
  location: string;
};

const initialDraft: Draft = {
  faHeadline: 'پیچیدگی عملیاتی را به محصولی روشن، قابل‌اندازه‌گیری و قابل‌رشد تبدیل می‌کنم.',
  enHeadline: 'I turn operational complexity into products that are clear, measurable and ready to scale.',
  faIntro: 'مدیر محصول و عملیات با تمرکز بر CRM، TravelTech، داشبورد و سیستم‌های عملیاتی مقیاس‌پذیر.',
  enIntro: 'Product and operations leader focused on CRM, TravelTech, dashboards and scalable operating systems.',
  email: 'mbz1372@gmail.com',
  location: 'Mashhad, Iran',
};

export default function AdminStudio() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [draft, setDraft] = useState<Draft>(initialDraft);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (localStorage.getItem('mbz-admin-auth') === 'yes') setAuthorized(true);
    const stored = localStorage.getItem('mbz-content-draft');
    if (stored) {
      try { setDraft(JSON.parse(stored) as Draft); } catch { /* keep defaults */ }
    }
  }, []);

  const login = () => {
    if (password === 'mbz-admin') {
      localStorage.setItem('mbz-admin-auth', 'yes');
      setAuthorized(true);
      setStatus('');
    } else setStatus('رمز ورود اشتباه است.');
  };

  const save = () => {
    localStorage.setItem('mbz-content-draft', JSON.stringify(draft));
    setStatus('پیش‌نویس در مرورگر ذخیره شد.');
  };

  const exportJson = async () => {
    const content = JSON.stringify(draft, null, 2);
    await navigator.clipboard.writeText(content);
    setStatus('JSON در کلیپ‌بورد کپی شد.');
  };

  if (!authorized) {
    return (
      <main className="admin-page login-shell">
        <section className="login-panel">
          <div className="admin-brand"><span>MBZ</span><div><strong>Control Room</strong><small>Personal website studio</small></div></div>
          <p className="admin-kicker">Secure content workspace</p>
          <h1>پنل مدیریت سایت شخصی</h1>
          <p>ورود به فضای مدیریت محتوا، پیش‌نویس‌های دوزبانه و راهنمای انتشار.</p>
          <label className="admin-field"><span>رمز ورود</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && login()} placeholder="••••••••" /></label>
          <button className="admin-primary" onClick={login}>ورود به پنل</button>
          {status && <p className="admin-status error">{status}</p>}
        </section>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-brand"><span>MBZ</span><div><strong>Control Room</strong><small>Website OS</small></div></div>
        <nav>
          <a className="active" href="#content">محتوا</a>
          <a href="#projects">پروژه‌ها</a>
          <a href="#seo">SEO</a>
          <a href="#publish">انتشار</a>
        </nav>
        <div className="admin-side-footer"><a href="/">مشاهده سایت</a><button onClick={() => { localStorage.removeItem('mbz-admin-auth'); location.reload(); }}>خروج</button></div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar"><div><p>Website operating system</p><h1>مدیریت محتوا</h1></div><div><button className="admin-secondary" onClick={exportJson}>کپی JSON</button><button className="admin-primary compact" onClick={save}>ذخیره پیش‌نویس</button></div></header>

        <div className="admin-summary-grid">
          <article><span>Language</span><strong>FA / EN</strong><small>Two complete content layers</small></article>
          <article><span>Content model</span><strong>6 sections</strong><small>Hero, work, cases, journey, writing, contact</small></article>
          <article><span>Deployment</span><strong>Vercel</strong><small>Git-based preview and production</small></article>
        </div>

        <section className="admin-editor" id="content">
          <div className="admin-section-head"><div><p>Core positioning</p><h2>Hero & profile</h2></div><span>Draft workspace</span></div>
          <div className="editor-grid">
            <label className="admin-field wide"><span>تیتر فارسی</span><textarea value={draft.faHeadline} onChange={(event) => setDraft({ ...draft, faHeadline: event.target.value })} /></label>
            <label className="admin-field wide ltr"><span>English headline</span><textarea value={draft.enHeadline} onChange={(event) => setDraft({ ...draft, enHeadline: event.target.value })} /></label>
            <label className="admin-field"><span>معرفی فارسی</span><textarea value={draft.faIntro} onChange={(event) => setDraft({ ...draft, faIntro: event.target.value })} /></label>
            <label className="admin-field ltr"><span>English intro</span><textarea value={draft.enIntro} onChange={(event) => setDraft({ ...draft, enIntro: event.target.value })} /></label>
            <label className="admin-field"><span>ایمیل</span><input value={draft.email} onChange={(event) => setDraft({ ...draft, email: event.target.value })} /></label>
            <label className="admin-field"><span>موقعیت</span><input value={draft.location} onChange={(event) => setDraft({ ...draft, location: event.target.value })} /></label>
          </div>
        </section>

        <section className="admin-editor" id="projects">
          <div className="admin-section-head"><div><p>Portfolio architecture</p><h2>مدیریت پروژه‌ها</h2></div><span>3 featured projects</span></div>
          <div className="admin-project-list">
            {['CRM اختصاصی B2B', 'داشبورد زنجیره تأمین', 'موتور پایش هوشمند نظرات'].map((title, index) => <article key={title}><span>0{index + 1}</span><div><strong>{title}</strong><small>Title, summary, tags, metrics and visual tone</small></div><button>ویرایش در کد</button></article>)}
          </div>
        </section>

        <section className="admin-editor" id="publish">
          <div className="admin-section-head"><div><p>Publishing workflow</p><h2>انتشار امن</h2></div><span>Git → Preview → Production</span></div>
          <div className="publish-steps"><article><b>01</b><h3>ویرایش</h3><p>محتوای نهایی را در فایل‌های پروژه به‌روزرسانی کن.</p></article><article><b>02</b><h3>Preview</h3><p>تغییرات را روی branch جدا Push و Preview Vercel را بررسی کن.</p></article><article><b>03</b><h3>Publish</h3><p>پس از تأیید UX، PR را Merge کن تا Production بروزرسانی شود.</p></article></div>
        </section>

        {status && <div className="admin-toast">{status}</div>}
      </section>
    </main>
  );
}
