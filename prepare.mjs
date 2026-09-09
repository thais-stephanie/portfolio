import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
const root = new URL('./public/', import.meta.url);
const titles = {index: 'Thaís Holanda — Solutions Engineer & Architect', 'case-billing-automation':'Billing Automation', 'case-contract-changes':'Contract Change Automation', 'case-onboarding-round-robin':'Onboarding Round Robin', 'case-requisition-builder':'Requisition Builder', 'case-revenue-model':'Compensation & Revenue Model'};
for(const file of readdirSync(root).filter(f=>f.endsWith('.html'))){
  let html=readFileSync(new URL(file,root),'utf8');
  html=html.replace(/<link[^>]+https:\/\/fonts\.(?:googleapis|gstatic)\.com[^>]*>/g,'');
  html=html.replace('<html>','<html lang="en">');
  const title=titles[file.replace('.html','')];
  if(!html.includes('<title>')) html=html.replace('<head>',`<head>\n<title>${title}</title>\n<meta name="description" content="${file==='index.html'?'Explore systems, integrations and automation built by Thaís Holanda.':`${title}: a production systems case study by Thaís Holanda.`}">\n<link rel="icon" href="./favicon.svg">\n<link rel="stylesheet" href="./vendor/fonts.css">\n<style>:focus-visible{outline:3px solid #C6F24E;outline-offset:4px}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;scroll-behavior:auto!important;transition:none!important}}</style>`);
  writeFileSync(new URL(file,root),html);
}
let runtime=readFileSync(new URL('support.js',root),'utf8');
runtime=runtime.replace('https://unpkg.com/react@18.3.1/umd/react.production.min.js','./vendor/react.production.min.js').replace('https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js','./vendor/react-dom.production.min.js').replace('https://unpkg.com/@babel/standalone@7.29.0/babel.min.js','./vendor/babel.min.js');
writeFileSync(new URL('support.js',root),runtime);
let references=0;
for(const file of readdirSync(root).filter(f=>f.endsWith('.html'))){
 const html=readFileSync(new URL(file,root),'utf8');
 for(const m of html.matchAll(/(?:src|href)="([^"{}]+)"/g)){
  if(/^(https?:|mailto:|#)/.test(m[1]))continue;
  const path=m[1].split('#')[0];
  if(path&&!existsSync(new URL(path,root)))throw Error(`${file}: missing ${path}`);
  references++;
 }
}
console.log(`Validated ${references} local references across six pages.`);
