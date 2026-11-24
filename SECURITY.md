# Catatan Keamanan

Hasil tinjauan keamanan 24 November 2026: situs statis tanpa backend, login, atau database. Data formulir hanya diproses di peramban.

## Sudah diperbaiki

| Kode | Temuan | Perbaikan |
| --- | --- | --- |
| M-1 | Skrip GSAP, Lenis, Motion dimuat dari CDN tanpa verifikasi isi | Disalin dari paket npm ke `vendor/` dan dimuat dari domain sendiri |
| M-2 | Tidak ada Content-Security-Policy | CSP di `vercel.json`: skrip hanya dari domain sendiri, `connect-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'` |
| L-1 | Header keamanan dasar tidak ada | `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` |

## Belum selesai

1. **CSP masih mengizinkan `'unsafe-inline'`** untuk `script-src` dan `style-src`, karena JavaScript dan CSS masih ditulis di dalam `index.html`. Supaya CSP benar-benar menahan XSS, pindahkan skrip inline ke berkas `.js` terpisah (misalnya `app.js`), lalu hapus `'unsafe-inline'` dari `script-src`. Gaya inline boleh tetap.
2. **L-2 · Google Fonts membocorkan IP pengunjung ke Google.** Simpan berkas `.woff2` Plus Jakarta Sans (bobot 400, 500, 600) di repo, ganti `<link>` Google Fonts dengan `@font-face` lokal, lalu hapus `fonts.googleapis.com` dan `fonts.gstatic.com` dari CSP.
3. **L-3 · Versi pustaka tertinggal.** `npm audit` 0 kerentanan untuk versi yang dipakai. Versi terbaru saat ditinjau: gsap 3.15.1, lenis 1.3.28, motion 14.14.0 (versi mayor baru, perlu uji ulang API `Motion.animate`). Cara memperbarui ada di `vendor/README.md`.
4. **Vercel Analytics di bawah CSP belum dipastikan di produksi.** Skripnya dari domain sendiri (`/_vercel/insights/script.js`) sehingga seharusnya lolos. Setelah deploy, cek dasbor Analytics masih menerima kunjungan; bila tidak, cek Console peramban untuk pesan "Content Security Policy".

## Aturan saat menambah fitur

- Data dari pengguna jangan dimasukkan ke `innerHTML` tanpa `escapeHtml()`; lebih aman pakai `textContent`.
- Jangan menambah skrip dari CDN. Simpan di `vendor/` dengan nama berkas memuat versi.
- Domain baru yang perlu dimuat (gambar, font, API) harus ditambahkan ke CSP di `vercel.json`, atau akan diblokir.
- Data formulir jangan disimpan atau dikirim ke mana pun tanpa persetujuan pengguna.
