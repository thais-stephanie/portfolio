import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
const root = new URL('./public/', import.meta.url);
const read = f => readFileSync(new URL(f, root), 'utf8');
const pages = readdirSync(root).filter(f => f.endsWith('.html'));

// The runtime loads React and Babel from the bundled copies, never from a CDN.
let runtime = read('support.js');
runtime = runtime.replace('https://unpkg.com/react@18.3.1/umd/react.production.min.js', './vendor/react.production.min.js').replace('https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js', './vendor/react-dom.production.min.js').replace('https://unpkg.com/@babel/standalone@7.29.0/babel.min.js', './vendor/babel.min.js');
writeFileSync(new URL('support.js', root), runtime);

const errors = [];
const ids = Object.fromEntries(pages.map(f => [f, new Set([...read(f).matchAll(/\sid="([^"{}]+)"/g)].map(m => m[1]))]));
const checkFragment = (from, target, frag) => {
  if (frag && !ids[target]?.has(frag)) errors.push(`${from}: #${frag} does not exist in ${target}`);
};

let references = 0;
for (const file of pages) {
  const html = read(file);
  for (const tag of ['<html lang="en">', '<meta charset="utf-8">', '<meta name="viewport"', '<title>', '<meta name="description"', '<link rel="canonical"', 'data-cf-beacon', './vendor/fonts.css', './desk.css', './responsive.css'])
    if (!html.includes(tag)) errors.push(`${file}: missing ${tag}`);
  for (const banned of ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.simpleicons.org', '.dc.html'])
    if (html.includes(banned)) errors.push(`${file}: still references ${banned}`);
  for (const m of html.matchAll(/(?:src|href)="([^"{}]+)"/g)) {
    const ref = m[1];
    if (/^(https?:|mailto:)/.test(ref)) continue;
    const [path, frag] = ref.split('#');
    if (path && !existsSync(new URL(path, root))) { errors.push(`${file}: missing ${path}`); continue; }
    if (!path || path.endsWith('.html')) checkFragment(file, path || file, frag);
    references++;
  }
}

// Related-work links in the technology data point at home-page anchors.
for (const m of read('tech-data.js').matchAll(/\['[^']+', '#([a-z-]+)'\]/g)) { checkFragment('tech-data.js', 'index.html', m[1]); references++; }

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Validated ${references} local references and anchors across ${pages.length} pages.`);
