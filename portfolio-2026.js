/* MBZ portfolio: progressive enhancement, fully bilingual, keyboard-friendly. */
(() => {
  'use strict';
  const root = document.documentElement;
  const nav = document.getElementById('site-nav');
  const menuButton = document.getElementById('menu-toggle');
  const langButton = document.getElementById('language-toggle');
  const langLabel = document.getElementById('language-label');
  const progress = document.getElementById('page-progress');
  const live = document.getElementById('status-message');
  const metaDescription = document.querySelector('meta[name="description"]');
  const copyButton = document.getElementById('copy-email');
  const email = 'mbz1372@gmail.com';

  const pageCopy = {
    en: {
      title: 'Mohammad Bagher Zolfaghari | Product Management & Operations',
      description: 'Mohammad Bagher Zolfaghari — product management, hospitality supply chain, CRM platforms, automation, and data-driven operations. Based in Mashhad, Iran.'
    },
    fa: {
      title: 'محمدباقر ذوالفقاری | مدیریت محصول و عملیات',
      description: 'پورتفولیوی محمدباقر ذوالفقاری؛ مدیریت محصول، زنجیره تأمین هتلداری، سیستم‌های CRM، اتوماسیون و عملیات داده‌محور.'
    }
  };

  const getSavedLanguage = () => {
    try { return localStorage.getItem('mbz-language') === 'fa' ? 'fa' : 'en'; }
    catch { return 'en'; }
  };
  const setSavedLanguage = lang => {
    try { localStorage.setItem('mbz-language', lang); } catch {}
  };
  const closeMenu = () => {
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', root.lang === 'fa' ? 'باز کردن منو' : 'Open navigation');
  };
  const applyLanguage = lang => {
    const current = lang === 'fa' ? 'fa' : 'en';
    root.lang = current;
    root.dir = current === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en][data-fa]').forEach(el => {
      const content = el.getAttribute('data-' + current);
      if (content !== null) el.textContent = content;
    });
    const page = document.body?.dataset.page || (document.querySelector('.sheet') ? 'resume' : 'home');
    const titles = {
      resume: current === 'fa' ? 'رزومه — محمدباقر ذوالفقاری' : 'Resume — Mohammad Bagher Zolfaghari',
      articles: current === 'fa' ? 'یادداشت‌ها — محمدباقر ذوالفقاری' : 'Writing & Insights — MBZ',
      videos: current === 'fa' ? 'ویدیوها — محمدباقر ذوالفقاری' : 'Videos & Explainers — MBZ'
    };
    document.title = titles[page] || pageCopy[current].title;
    if (metaDescription && !document.querySelector('.sheet')) metaDescription.content = pageCopy[current].description;
    if (langLabel) langLabel.textContent = current === 'fa' ? 'EN' : 'فا';
    if (langButton) langButton.setAttribute('aria-label', current === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی');
    setSavedLanguage(current);
    closeMenu();
  };

  applyLanguage(getSavedLanguage());
  langButton?.addEventListener('click', () => applyLanguage(root.lang === 'fa' ? 'en' : 'fa'));
  menuButton?.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? (root.lang === 'fa' ? 'بستن منو' : 'Close navigation') : (root.lang === 'fa' ? 'باز کردن منو' : 'Open navigation'));
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (nav && menuButton && !nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => { if (innerWidth > 850) closeMenu(); }, { passive: true });

  let frame = null;
  const updateProgress = () => {
    frame = null;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = (max <= 0 ? 0 : Math.max(0, Math.min(100, scrollY / max * 100))) + '%';
  };
  window.addEventListener('scroll', () => {
    if (frame === null) frame = requestAnimationFrame(updateProgress);
  }, { passive: true });
  updateProgress();

  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = nav?.querySelectorAll('a[href^="#"]') || [];
  if ('IntersectionObserver' in window) {
    const sectionWatcher = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach(section => sectionWatcher.observe(section));
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealWatcher = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .08 });
      document.querySelectorAll('[data-reveal]').forEach(el => {
        el.classList.add('reveal');
        revealWatcher.observe(el);
      });
    }
  }

  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      if (live) live.textContent = root.lang === 'fa' ? 'ایمیل کپی شد' : 'Email copied';
      const label = copyButton.querySelector('[data-en][data-fa]');
      if (label) {
        const before = label.textContent;
        label.textContent = root.lang === 'fa' ? 'کپی شد!' : 'Copied!';
        window.setTimeout(() => { label.textContent = before; }, 1700);
      }
    } catch {
      window.location.href = 'mailto:' + email;
    }
  });
})();