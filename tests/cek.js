// Uji alur utama GratiCek di peramban sungguhan (Chromium lewat Playwright).
// Jalankan dari akar repo:  npm install --no-save playwright && npx playwright install chromium && node tests/cek.js
const { chromium } = require('playwright');
const path = require('path');
const assert = require('assert');

const URL = 'file://' + path.resolve(__dirname, '..', 'index.html');

async function openPage(browser, opts = {}) {
  const page = await browser.newPage({ viewport: { width: 375, height: 800 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/fonts\.|_vercel|\/vendor\//, r => r.abort());
  if (opts.blockStorage) {
    await page.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('blocked', 'SecurityError'); } });
    });
  }
  await page.goto(URL);
  return { page, errors };
}

async function cek(page, { id, bentuk, nilai, pemberi, total }) {
  await page.click(`[data-jump=${id}]`);
  await page.click(`label.chip:has(input[value=${bentuk}])`);
  await page.fill('#f-nilai', nilai);
  if (pemberi) await page.fill('#f-pemberi', pemberi);
  if (total) await page.fill('#f-total', total);
  await page.click('#to-q');
  while (await page.isVisible('#s3')) await page.click('.answers button[data-a=tidak]');
  const stamp = await page.textContent('#result .stamp');
  await page.click('#restart');
  return stamp;
}

(async () => {
  const browser = await chromium.launch();

  // Status hasil cek
  const { page, errors } = await openPage(browser);
  const kasus = [
    [{ id: 'nikah', bentuk: 'uang', nilai: '5000000', pemberi: '20' }, 'Tidak Wajib Lapor'],   // Rp250.000 per pemberi
    [{ id: 'rekan', bentuk: 'barang', nilai: '3000000', pemberi: '15', total: '9000000' }, 'Wajib Lapor KPK'], // total setahun > Rp1,5 juta
    [{ id: 'rekan', bentuk: 'barang', nilai: '2500002', pemberi: '5' }, 'Wajib Lapor KPK'],    // rata-rata Rp500.000,4 > batas
    [{ id: 'rekan', bentuk: 'barang', nilai: '2500000', pemberi: '5' }, 'Tidak Wajib Lapor'],  // tepat di batas
    [{ id: 'parsel', bentuk: 'makanan', nilai: '750000' }, 'Wajib Lapor KPK'],
    [{ id: 'urusan', bentuk: 'uang', nilai: '500000' }, 'Wajib Tolak'],
  ];
  for (const [input, harapan] of kasus) {
    assert.strictEqual(await cek(page, input), harapan, JSON.stringify(input));
  }

  // Kronologi yang sudah diketik tidak tertimpa isian otomatis
  await page.click('[data-jump=parsel]');
  await page.click('label.chip:has(input[value=makanan])');
  await page.fill('#f-nilai', '750000');
  await page.click('#to-q');
  await page.click('#btn-to-form');
  await page.fill('#fd_kronologi', 'Tulisan saya sendiri');
  await page.goto(URL.replace(/#.*$/, '') + '#cek');
  await page.click('#restart').catch(() => {});
  await page.click('[data-jump=parsel]');
  await page.click('label.chip:has(input[value=makanan])');
  await page.click('#to-q');
  await page.click('#btn-to-form');
  assert.strictEqual(await page.inputValue('#fd_kronologi'), 'Tulisan saya sendiri');

  // Tenggat yang sudah lewat diberi peringatan
  await page.goto(URL + '#tenggat');
  await page.fill('#t-tgl', '2020-01-02');
  await page.dispatchEvent('#t-tgl', 'change');
  assert.match(await page.textContent('#t-out'), /Sudah lewat/);

  // Libur 2027 dihitung: 30 hari kerja sejak 27 Nov 2026 = 14 Jan 2027
  await page.fill('#t-tgl', '2026-11-27');
  await page.dispatchEvent('#t-tgl', 'change');
  assert.match(await page.textContent('#t-out'), /14 Januari 2027/);

  assert.deepStrictEqual(errors, []);

  // Aplikasi tetap jalan bila penyimpanan situs diblokir
  const blocked = await openPage(browser, { blockStorage: true });
  assert.strictEqual(await cek(blocked.page, { id: 'parsel', bentuk: 'makanan', nilai: '750000' }), 'Wajib Lapor KPK');
  await blocked.page.click('#btn-theme');
  assert.deepStrictEqual(blocked.errors, []);

  await browser.close();
  console.log('Semua uji lulus.');
})().catch(e => { console.error(e); process.exit(1); });
