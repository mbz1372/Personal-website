import { notFound } from 'next/navigation'
import { Home } from '@/components/home'
import type { Locale } from '@/data/site'

export function generateStaticParams(){ return [{locale:'fa'},{locale:'en'}] }
export default async function LocalePage({params}:{params:Promise<{locale:string}>}){ const {locale}=await params; if(locale!=='fa'&&locale!=='en') notFound(); return <Home locale={locale as Locale}/> }