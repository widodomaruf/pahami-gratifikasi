# Tech stack: GratiCek

| Bagian | Pilihan | Alasan |
| --- | --- | --- |
| Bahasa | HTML, CSS, JavaScript biasa (tanpa framework) | Satu berkas `index.html`, tanpa proses build, mudah dipasang di mana saja |
| Huruf | Plus Jakarta Sans 400, 500, 600 dari Google Fonts | Sans serif yang jelas di HP |
| Animasi | GSAP 3.12.5, Lenis 1.1.20, Motion 11.11.17 | Transisi menu, langkah, dan hasil; gulir halus; umpan balik saat diketuk. Disimpan di `vendor/`, bukan dari CDN |
| Hosting | Vercel (proyek `grati-cek`, domain `graticek.vercel.app`) | Deploy otomatis dari GitHub; pratinjau per branch |
| Header keamanan | `vercel.json` | CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, COOP |
| Statistik | Vercel Web Analytics (`/_vercel/insights/script.js`) | Hanya tampilan halaman, tanpa data pribadi |
| Aplikasi HP | `manifest.webmanifest`, `icon-192.png`, `icon-512.png` | Bisa dipasang dari peramban yang mendukung |
| Uji | Playwright (Chromium), `tests/cek.js` | Uji alur utama di peramban sungguhan |
| Kode sumber | GitHub `widodomaruf/pahami-gratifikasi` | Branch `main` = produksi |

## Yang sengaja tidak dipakai

- Tidak ada server, database, atau API sendiri.
- Tidak ada `package.json` atau proses build. Playwright hanya dipasang sementara saat menguji (`npm install --no-save playwright`).
- Tidak ada variabel lingkungan (environment variable).
