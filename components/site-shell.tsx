'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '@/data/site'

const copy = {
  fa: { work: 'پروژه‌ها', story: 'مسیر', writing: 'نوشته‌ها', contact: 'تماس', cta: 'شروع همکاری' },
  en: { work: 'Work', story: 'Journey', writing: 'Writing', contact: 'Contact', cta: 'Start a conversation' }
}

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const other = locale === 'fa' ? 'en' : 'fa'
  const otherPath = pathname.replace(/^\/(fa|en)/, `/${other}`)
  const t = copy[locale]
  return (
    <div dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`site locale-${locale}`}>
      <header className="nav-shell">
        <Link href={`/${locale}`} className="brand" aria-label="MBZ home"><span className="brand-dot" /><span>MBZ</span></Link>
        <nav className="desktop-nav"><a href="#work">{t.work}</a><a href="#story">{t.story}</a><Link href={`/${locale}/writing`}>{t.writing}</Link><a href="#contact">{t.contact}</a></nav>
        <div className="nav-actions"><Link href={otherPath} className="language-link">{other.toUpperCase()}</Link><a className="nav-cta" href="mailto:mbz1372@gmail.com">{t.cta}<ArrowUpRight size={16}/></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button></div>
      </header>
      {open && <div className="mobile-menu"><a href="#work" onClick={() => setOpen(false)}>{t.work}</a><a href="#story" onClick={() => setOpen(false)}>{t.story}</a><Link href={`/${locale}/writing`} onClick={() => setOpen(false)}>{t.writing}</Link><a href="#contact" onClick={() => setOpen(false)}>{t.contact}</a></div>}
      {children}
    </div>
  )
}