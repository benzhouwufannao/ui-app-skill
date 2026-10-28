#!/usr/bin/env node
// Optional dependency: Playwright available in the caller's environment.
const fs = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
function args(argv) {
  const input = argv[0];
  if (!input || input === '--help') return null;
  const value = (key, fallback) => { const i = argv.indexOf(key); return i < 0 ? fallback : argv[i + 1]; };
  const widths = value('--widths', '320,375,390').split(',').map(Number);
  if (widths.some(w => !Number.isFinite(w) || w < 200)) throw Error('Invalid --widths');
  return { input, widths, out: path.resolve(value('--out', 'mobile-check')), channel: value('--channel', undefined) };
}
async function main() {
  const options = args(process.argv.slice(2));
  if (!options) { console.log('Usage: node scripts/check-mobile.cjs <file.html|http(s) URL> [--out directory] [--widths 320,375,390] [--channel chrome]'); return; }
  const { chromium } = require('playwright');
  await fs.mkdir(options.out, { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: options.channel });
  const report = { target: options.input, generatedAt: new Date().toISOString(), configurations: [], limits: ['Heuristics, not accessibility or visual-quality certification.', 'Does not exercise application flows or authenticate integrations.', 'Small text and touch findings require contextual review.'] };
  try {
    for (const width of options.widths) {
      for (const scale of (width === Math.min(...options.widths) ? [1, 1.3] : [1])) {
        const page = await browser.newPage({ viewport: { width, height: 812 }, deviceScaleFactor: 1 });
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        const url = /^https?:\/\//.test(options.input) ? options.input : pathToFileURL(path.resolve(options.input)).href;
        await page.goto(url, { waitUntil: 'load' });
        await page.evaluate(async () => { await document.fonts.ready; });
        if (scale !== 1) await page.evaluate(scale => {
          // Snapshot first: sequential computed-size reads would compound inheritance.
          const sizes = [...document.querySelectorAll('body *')].map(e => [e, parseFloat(getComputedStyle(e).fontSize)]);
          sizes.forEach(([e, size]) => e.style.setProperty('font-size', `${size * scale}px`, 'important'));
        }, scale);
        const measurements = await page.evaluate(() => {
          const visible = e => { const s = getComputedStyle(e), r = e.getBoundingClientRect(); return s.visibility !== 'hidden' && s.display !== 'none' && r.width > 0 && r.height > 0; };
          const describe = e => ({ tag: e.tagName.toLowerCase(), id: e.id || undefined, text: (e.innerText || e.getAttribute('aria-label') || '').trim().slice(0, 100) });
          const all = [...document.querySelectorAll('body *')].filter(visible);
          const text = all.filter(e => [...e.childNodes].some(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim()));
          return {
            viewportWidth: innerWidth, documentWidth: document.documentElement.scrollWidth,
            horizontalOverflow: document.documentElement.scrollWidth > innerWidth + 1,
            smallText: text.filter(e => parseFloat(getComputedStyle(e).fontSize) < 12).map(e => ({ ...describe(e), size: parseFloat(getComputedStyle(e).fontSize) })),
            smallTargets: all.filter(e => e.matches('button,a[href],input:not([type=hidden]),select,textarea,[role=button]')).filter(e => { const r = e.getBoundingClientRect(); return r.width < 44 || r.height < 44; }).map(e => ({ ...describe(e), width: e.getBoundingClientRect().width, height: e.getBoundingClientRect().height })),
            clippedTextCandidates: text.filter(e => ['hidden','clip'].includes(getComputedStyle(e).overflowX) && e.scrollWidth > e.clientWidth + 1).map(describe)
          };
        });
        const name = `${width}-${scale === 1 ? 'normal' : 'text130'}`;
        await page.screenshot({ path: path.join(options.out, `${name}-top.png`) });
        await page.screenshot({ path: path.join(options.out, `${name}-full.png`), fullPage: true });
        await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
        await page.screenshot({ path: path.join(options.out, `${name}-bottom.png`) });
        report.configurations.push({ width, height: 812, textScale: scale, errors, ...measurements, screenshotPrefix: name });
        await page.close();
      }
    }
    await fs.writeFile(path.join(options.out, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report.configurations.map(c => ({ width: c.width, scale: c.textScale, overflow: c.horizontalOverflow, smallText: c.smallText.length, smallTargets: c.smallTargets.length, runtimeErrors: c.errors.length })), null, 2));
    if (report.configurations.some(c => c.horizontalOverflow || c.errors.length)) process.exitCode = 1;
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error.message); process.exitCode = 2; });
