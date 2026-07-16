import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects, type Locale } from '@/data/site'
import { SiteShell } from '@/components/site-shell'

export function generateStaticParams(){ return ['fa','en'].flatMap(locale=>projects.map(p=>({locale,slug:p.slug}))) }
export default async function WorkPage({params}:{params:Promise<{locale:string;slug:string}>}){
 const {locale,slug}=await params; if(locale!=='fa'&&locale!=='en') notFound(); const project=projects.find(p=>p.slug===slug); if(!project) notFound(); const l=locale as Locale; const labels=l==='fa'?['چالش','رویکرد','نتیجه']:['Challenge','Approach','Outcome']; const Arrow=l==='fa'?ArrowRight:ArrowLeft
 return <SiteShell locale={l}><main className={`case-page tone-${project.tone}`}><section className="case-hero"><Link href={`/${l}#work`} className="back-link"><Arrow size={18}/>{l==='fa'?'بازگشت به پروژه‌ها':'Back to work'}</Link><div className="tag-row">{project.tags.map(t=><span key={t}>{t}</span>)}</div><h1>{project.title[l]}</h1><p>{project.summary[l]}</p><div className="case-big-metric"><strong>{project.metric}</strong><span>{project.metricLabel[l]}</span></div></section><section className="case-body">{[project.challenge[l],project.approach[l],project.result[l]].map((v,i)=><article key={labels[i]}><span>0{i+1}</span><h2>{labels[i]}</h2><p>{v}</p></article>)}</section><section className="next-project"><p>{l==='fa'?'پروژه بعدی':'Next project'}</p><Link href={`/${l}/work/${projects[(projects.indexOf(project)+1)%projects.length].slug}`}>{projects[(projects.indexOf(project)+1)%projects.length].title[l]}<ArrowUpRight/></Link></section></main></SiteShell>
}