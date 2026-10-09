import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = process.env.QA_LOCAL_URL || 'http://127.0.0.1:4173';
const publicBase = 'https://mbzolfaghari.ir';
const out = 'qa-output';
await fs.mkdir(out + '/screenshots', {recursive:true});
const browser = await chromium.launch({headless:true});
const report = {timestamp:new Date().toISOString(), base, publicBase, scenarios:[], checks:[], problems:[]};
const viewports = [
  {name:'desktop',width:1440,height:900},
  {name:'tablet',width:768,height:1024},
  {name:'mobile',width:390,height:844},
  {name:'narrow',width:320,height:680}
];
const critical = (name,ok,detail={})=> {
  report.checks.push({name,ok,...detail});
  if(!ok)report.problems.push({name,...detail});
};
const safe = async (fn,fb=null)=> {try{return await fn()}catch(e){return fb}};
for(const size of viewports) {
  for(const lang of ['en','fa']) {
    const ctx = await browser.newContext({viewport:{width:size.width,height:size.height},deviceScaleFactor:1,locale:lang==='fa'?'fa-IR':'en-US',reducedMotion:'reduce'});
    const page = await ctx.newPage();
    const errors=[];
    const broken=[];
    page.on('pageerror',e=>errors.push(e.message));
    page.on('console',m=> {if(m.type()==='error') errors.push(m.text())});
    page.on('response',r=> {if(r.status()>=400 && new URL(r.url()).origin===new URL(base).origin)broken.push({status:r.status(),url:r.url()})});
    const response = await safe(()=>page.goto(base,{waitUntil:'networkidle',timeout:25000}));
    await page.waitForTimeout(250);
    if(lang==='fa') await safe(()=>page.locator('#language-toggle').click());
    await page.waitForTimeout(200);
    const metrics=await page.evaluate(()=>{
      const w=document.documentElement.scrollWidth;
      const interactive=[...document.querySelectorAll('a,button')].filter(el=>{
        const box=el.getBoundingClientRect();
        const css=getComputedStyle(el);
        return css.visibility!=='hidden' && css.display!=='none' && box.width>0 && box.height>0
      }).map(el=>({tag:el.tagName,text:el.textContent.trim().slice(0,35),width:Math.round(el.getBoundingClientRect().width),height:Math.round(el.getBoundingClientRect().height)}));
      const overflowElements = [...document.querySelectorAll('body *')].map(el => {
        const rect = el.getBoundingClientRect();
        return {tag:el.tagName.toLowerCase(),className:typeof el.className==='string'?el.className.slice(0,90):'',text:(el.textContent||'').trim().slice(0,35),left:Math.round(rect.left),right:Math.round(rect.right),width:Math.round(rect.width)};
      }).filter(el=>el.right>innerWidth+2 && el.width>0).sort((a,b)=>b.right-a.right).slice(0,12);
      const navCta=document.querySelector('.nav-cta')?.getBoundingClientRect();
      const trustLine=document.querySelector('.trust-topics')?.getBoundingClientRect();
      return {
        overflowElements,
        navCta:navCta?{width:Math.round(navCta.width),height:Math.round(navCta.height)}:null,
        trustLine:trustLine?{width:Math.round(trustLine.width),right:Math.round(trustLine.right)}:null,
        bodyFont:getComputedStyle(document.body).fontFamily,
        paragraphFont:getComputedStyle(document.querySelector('.hero-description')).fontFamily,
        title:document.title,lang:document.documentElement.lang,dir:document.documentElement.dir,
        viewport:window.innerWidth,scrollWidth:w,overflow:w>window.innerWidth+2,
        sections:[...document.querySelectorAll('main section[id]')].map(el=>el.id),
        firstH1:document.querySelector('h1')?.textContent.trim(),
        fontHeading:getComputedStyle(document.querySelector('h1')).fontFamily,
        portraitOk:document.querySelector('.portrait-frame img')?.complete && document.querySelector('.portrait-frame img')?.naturalWidth>0,
        navVisible:getComputedStyle(document.querySelector('#site-nav')).visibility,
        interactiveSmall:interactive.filter(x=>x.width<24||x.height<24)
      };
    });
    const id=size.name+'-'+lang;
    await page.screenshot({path:out+'/screenshots/'+id+'.jpg',fullPage:true,type:'jpeg',quality:72,animations:'disabled'});
    const record={id,httpStatus:response?.status(),metrics,errors,broken};
    if(size.width<=768){
      const menu=page.locator('#menu-toggle');
      await menu.click();
      record.menuOpen=await page.locator('#site-nav').evaluate(el=>el.classList.contains('open'));
      await page.keyboard.press('Escape');
      record.menuClosed=!(await page.locator('#site-nav').evaluate(el=>el.classList.contains('open')));
    }
    if (size.name==='desktop' || size.name==='mobile') {
      await page.addScriptTag({path:'node_modules/axe-core/axe.min.js'});
      const violations = await page.evaluate(async () => {
        const result = await window.axe.run(document, {runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}});
        return result.violations.map(v=>({id:v.id,impact:v.impact,description:v.help,nodeCount:v.nodes.length,samples:v.nodes.slice(0,2).map(n=>n.target.join(' '))}));
      });
      record.accessibilityViolations=violations;
      critical(id+' WCAG A/AA',violations.length===0,{violations});
    }
    report.scenarios.push(record);
    critical(id+' http',response?.ok()===true,{status:response?.status()});
    critical(id+' language direction',metrics.lang===lang&&metrics.dir===(lang==='fa'?'rtl':'ltr'),{actual:metrics.lang+'/'+metrics.dir});
    critical(id+' horizontal overflow',!metrics.overflow,{scrollWidth:metrics.scrollWidth,viewport:metrics.viewport});
    critical(id+' portrait',metrics.portraitOk===true,{portraitOk:metrics.portraitOk});
    critical(id+' expected typography',metrics.bodyFont.includes(lang==='fa'?'Vazirmatn':'DM Sans'),{font:metrics.bodyFont});
    critical(id+' js runtime',errors.filter(x=>!x.includes('fonts.googleapis.com')).length===0,{errors});
    critical(id+' local assets',broken.length===0,{broken});
    if(size.width<=768){
      critical(id+' mobile menu open and Escape',record.menuOpen===true&&record.menuClosed===true,{open:record.menuOpen,closed:record.menuClosed});
    }
    await ctx.close();
  }
}
for(const which of ['resume.html','articles.html','videos.html','robots.txt','sitemap.xml']) {
  const ctx=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const page=await ctx.newPage();
  const response=await safe(()=>page.goto(base+'/'+which,{waitUntil:'domcontentloaded',timeout:20000}));
  const title=await safe(()=>page.title());
  const status=response?.status()||null;
  report.checks.push({name:'local route '+which,ok:response?.ok()===true,status,title});
  if(!response?.ok())report.problems.push({name:'local route '+which,status});
  if(which==='resume.html'){
    const en=await page.locator('h1').textContent();
    await page.pdf({path:out+'/resume-en.pdf',format:'A4',printBackground:true,preferCSSPageSize:true});
    await page.locator('#language-toggle').click();
    const fa=await page.locator('h1').textContent();
    await page.pdf({path:out+'/resume-fa.pdf',format:'A4',printBackground:true,preferCSSPageSize:true});
    critical('resume bilingual toggle',en!==fa&&fa.includes('محمد'),{en,fa});
    const printValue=await page.evaluate(() => {const s=getComputedStyle(document.querySelector('.toolbar')); return s.display});
    recordNoop(printValue);
    await page.screenshot({path:out+'/screenshots/resume-fa.jpg',fullPage:true,type:'jpeg',quality:72,animations:'disabled'});
  }
  await ctx.close();
}
function recordNoop(value){report.resumeToolbarDisplay=value}
try{
  const ctx=await browser.newContext({viewport:{width:1440,height:900},ignoreHTTPSErrors:true});
  const page=await ctx.newPage();
  const response=await page.goto(publicBase,{waitUntil:'domcontentloaded',timeout:22000});
  const title=await page.title();
  const text=await page.locator('body').innerText();
  const hasNew=text.includes('From ideas to working systems')||text.includes('Built around product')||text.includes('The journey behind the work');
  const hasOld=text.includes('Certifications & Achievements')||text.includes('TechSolutions Co.');
  const res=await safe(()=>page.goto(publicBase+'/resume.html',{waitUntil:'domcontentloaded',timeout:18000}));
  report.production={status:response.status(),title,hasNew,hasOld,resumeStatus:res?.status()};
  critical('public production matches redesigned portfolio',hasNew&&!hasOld,report.production);
  critical('public production resume route works',res?.ok()===true,{status:res?.status()});
  await ctx.close();
}catch(e){report.production={error:String(e)};report.problems.push({name:'production reachability',error:String(e)})}
await browser.close();
await fs.writeFile(out+'/report.json',JSON.stringify(report,null,2),'utf8');
console.log('=== QA REPORT BEGIN ===');
console.log(JSON.stringify({timestamp:report.timestamp,production:report.production,problems:report.problems,scenarios:report.scenarios.map(x=>({id:x.id,http:x.httpStatus,lang:x.metrics.lang,dir:x.metrics.dir,overflow:x.metrics.overflow,overflowElements:x.metrics.overflowElements,navCta:x.metrics.navCta,trustLine:x.metrics.trustLine,bodyFont:x.metrics.bodyFont,portrait:x.metrics.portraitOk,accessibilityViolations:x.accessibilityViolations,menuOpen:x.menuOpen,menuClosed:x.menuClosed,errors:x.errors,broken:x.broken}))},null,2));
console.log('=== QA REPORT END ===');
if(report.problems.length)process.exitCode=1;
