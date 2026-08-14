const express   = require('express');
const cors      = require('cors');
const puppeteer = require('puppeteer');

const app  = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

let browser = null;

async function getBrowser() {
  if (!browser || !browser.connected) {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--font-render-hinting=none',
        '--disable-font-subpixel-positioning',
        '--disable-lcd-text',
        '--force-color-profile=srgb',
        '--disable-skia-renderer-oop-rasterization'
      ]
    });
  }
  return browser;
}

app.post('/export', async (req, res) => {
  const { url, selector = '[data-export-card]', width, height, filename = 'export.png' } = req.body;
  if (!url) return res.status(400).json({ error: 'url required' });

  let page;
  try {
    const br = await getBrowser();
    page = await br.newPage();

    /* Viewport à la taille réelle — la carte est déjà rendue à cette taille */
    await page.setViewport({ width: width + 40, height: height + 40, deviceScaleFactor: 1 });

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    /* Attendre que React ait rendu l'état (signal data-ready + délai) */
    try {
      await page.waitForSelector('[data-export-card][data-ready]', { timeout: 5000 });
    } catch(e) {}
    await new Promise(r => setTimeout(r, 800));

    const el = await page.$(selector);
    if (!el) { await page.close(); return res.status(404).json({ error: 'selector not found' }); }

    const png = await el.screenshot({ type: 'png', omitBackground: false });
    await page.close();

    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': png.length
    });
    res.send(png);

  } catch (err) {
    console.error('Export error:', err);
    if (page) await page.close().catch(() => {});
    res.status(500).json({ error: err.message });
  }
});

app.get('/ping', (_, res) => res.json({ ok: true }));
app.listen(PORT, () => console.log(`Export server on http://localhost:${PORT}`));
process.on('SIGTERM', async () => { if (browser) await browser.close(); process.exit(0); });
process.on('SIGINT',  async () => { if (browser) await browser.close(); process.exit(0); });
