'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './experience-enhancer.module.css';

type Slide = {
  index: string;
  eyebrow: string;
  titleFa: string;
  titleEn: string;
  textFa: string;
  textEn: string;
  metric: string;
  metricLabel: string;
  tone: 'blue' | 'green' | 'violet';
};

const slides: Slide[] = [
  {
    index: '01',
    eyebrow: 'PRODUCT OPS · CRM',
    titleFa: 'سیستم CRM که با رفتار واقعی تیم طراحی شد.',
    titleEn: 'A CRM designed around how the team actually works.',
    textFa: 'از کشف نیاز تا طراحی فرصت، پیگیری، گزارش و گردش‌کار؛ یک سیستم عملیاتی واحد به‌جای فرم‌های پراکنده.',
    textEn: 'From discovery to opportunities, follow-ups, reporting and workflow — one operating system instead of scattered forms.',
    metric: '1',
    metricLabel: 'operating system',
    tone: 'blue',
  },
  {
    index: '02',
    eyebrow: 'TRAVELTECH · SUPPLY',
    titleFa: 'تصمیم‌گیری زنجیره تأمین در یک نمای زنده.',
    titleEn: 'Supply-chain decisions in one live operating view.',
    textFa: 'نرخ، ظرفیت، Provider، کیفیت تأمین و SLA در یک تجربه مدیریتی سریع، واضح و قابل اقدام.',
    textEn: 'Pricing, inventory, providers, supply quality and SLA in one fast, clear and actionable management experience.',
    metric: '3500+',
    metricLabel: 'hotels in scope',
    tone: 'green',
  },
  {
    index: '03',
    eyebrow: 'AI · AUTOMATION',
    titleFa: 'اتوماسیون هوشمند برای حذف تصمیم‌های تکراری.',
    titleEn: 'Intelligent automation for repetitive decisions.',
    textFa: 'موتور پایش نظرات با کمک Google API برای افزایش سرعت کنترل محتوا و کاهش کار دستی.',
    textEn: 'A Google API-assisted review engine built to accelerate moderation and reduce repetitive manual work.',
    metric: '40%',
    metricLabel: 'less manual work',
    tone: 'violet',
  },
];

export default function ExperienceEnhancer() {
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);
  const reactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>('#work');
    const stack = section?.querySelector<HTMLElement>('.project-stack');
    if (stack) stack.style.display = 'none';
    if (section) setHost(section);

    const syncLanguage = () => setLang(document.documentElement.lang === 'en' ? 'en' : 'fa');
    syncLanguage();
    const observer = new MutationObserver(syncLanguage);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer:fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (!finePointer || reduceMotion) return;
    const move = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      reactiveRef.current?.style.setProperty('--rx', `${x * 42}px`);
      reactiveRef.current?.style.setProperty('--ry', `${y * 34}px`);
      reactiveRef.current?.style.setProperty('--mx', `${event.clientX}px`);
      reactiveRef.current?.style.setProperty('--my', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  const previous = () => setActive((value) => (value - 1 + slides.length) % slides.length);
  const next = () => setActive((value) => (value + 1) % slides.length);
  const current = slides[active];

  const slider = (
    <div className={styles.sliderShell} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        className={`${styles.slider} ${styles[current.tone]}`}
        onPointerDown={(event) => { dragStart.current = event.clientX; }}
        onPointerUp={(event) => {
          if (dragStart.current === null) return;
          const distance = event.clientX - dragStart.current;
          if (Math.abs(distance) > 55) distance > 0 ? previous() : next();
          dragStart.current = null;
        }}
      >
        <div className={styles.copyColumn}>
          <div className={styles.slideMeta}><span>{current.index}</span><span>{current.eyebrow}</span></div>
          <h3>{lang === 'fa' ? current.titleFa : current.titleEn}</h3>
          <p>{lang === 'fa' ? current.textFa : current.textEn}</p>
          <div className={styles.metric}><strong>{current.metric}</strong><span>{current.metricLabel}</span></div>
        </div>
        <div className={styles.stage} aria-hidden="true">
          <div className={styles.stageGlow} />
          <div className={styles.device}>
            <div className={styles.deviceTop}><i/><i/><i/><span/></div>
            <div className={styles.deviceBody}>
              <aside><b/><b/><b/><b/></aside>
              <main>
                <header><span/><span/></header>
                <section><div/><div/><div/></section>
                <footer><span/><span/><span/><span/></footer>
              </main>
            </div>
          </div>
          <div className={`${styles.floatingPanel} ${styles.panelOne}`}><span>Live signal</span><strong>{active === 1 ? '+25% SLA' : active === 2 ? 'AI assisted' : 'Unified flow'}</strong></div>
          <div className={`${styles.floatingPanel} ${styles.panelTwo}`}><span>System status</span><strong>Operational</strong></div>
          <div className={styles.dataOrb}><span>{current.metric}</span></div>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.dots}>{slides.map((slide, index) => <button key={slide.index} className={index === active ? styles.activeDot : ''} onClick={() => setActive(index)} aria-label={`Go to slide ${index + 1}`} />)}</div>
        <div className={styles.progress}><span style={{ width: `${((active + 1) / slides.length) * 100}%` }} /></div>
        <div className={styles.arrows}><button onClick={previous} aria-label="Previous project">←</button><button onClick={next} aria-label="Next project">→</button></div>
      </div>
    </div>
  );

  return (
    <>
      <div ref={reactiveRef} className={styles.reactiveLayer} aria-hidden="true">
        <i className={styles.reactiveBlue}/><i className={styles.reactiveGreen}/><i className={styles.cursorAura}/>
      </div>
      {host ? createPortal(slider, host) : null}
    </>
  );
}
