// Rewrites absolute internal links in dist/ to relative ones so the site works when
// served from a sub-path (GitHub Pages project URL). Remove this step from the deploy
// workflow once runmystore.com is attached as the custom domain (served from /).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const root = 'dist';
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));

for (const file of walk(root)) {
  if (file.endsWith('.html')) {
    const depth = relative(root, dirname(file)).split('/').filter(Boolean).length;
    const pre = depth ? '../'.repeat(depth) : './';
    let s = readFileSync(file, 'utf8');
    s = s.replace(/(href|src|content)="\/(?!\/)/g, `$1="${pre}`);
    s = s.replaceAll('`/apply/', '`' + pre + 'apply/'); // retainer builder link
    writeFileSync(file, s);
  } else if (file.endsWith('.css')) {
    writeFileSync(file, readFileSync(file, 'utf8').replaceAll('url(/_astro/', 'url('));
  }
}
console.log('relativized links in', root);
