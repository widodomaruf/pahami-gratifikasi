# Arsitektur: GratiCek

GratiCek adalah situs statis satu halaman. Semua logika berjalan di peramban pengguna.

```
Peramban pengguna
  index.html
    ├─ CSS (token warna terang/gelap, tata letak, gaya cetak)
    ├─ Script utama (IIFE)
    │    ├─ Data: SIT, EXC, EXC_UI, BENTUK, PROVE, DEFAULT_HOL
    │    ├─ Router hash (#cek, #uji, #pengecualian, #tenggat, #lapor)
    │    ├─ Cek Status: goStep → showQ → evaluate → showResult
    │    ├─ Hitung hari kerja: addWorkDays, workDaysBetween
    │    ├─ Formulir laporan → lembar cetak (#print-sheet) → window.print()
    │    └─ Event gc:* untuk lapisan animasi
    └─ Lapisan animasi (vendor/: GSAP, Lenis, Motion)
         └─ hanya mendengarkan event gc:*; aplikasi tetap jalan tanpa lapisan ini

Vercel
  ├─ Menyajikan berkas statis + header dari vercel.json
  └─ Web Analytics (tampilan halaman)
```

## Berkas

| Berkas | Isi |
| --- | --- |
| `index.html` | Seluruh aplikasi: HTML, CSS, JavaScript, logo mitra |
| `vendor/` | GSAP, Lenis, Motion (salinan paket npm) |
| `manifest.webmanifest`, `icon-*.png` | Pemasangan sebagai aplikasi dan gambar pratinjau tautan |
| `vercel.json` | Header keamanan dan cache |
| `tests/cek.js` | Uji alur utama |
| `docs/` | Dokumen proyek |

## Bagian utama script

| Bagian | Tugas |
| --- | --- |
| `route()` | Membaca `location.hash`, menampilkan satu `section.view`, menandai menu aktif |
| `renderGrid()` | Daftar kondisi dan pencarian; teks pencarian di-escape dengan `escapeHtml()` |
| `goStep(n)` | Pindah langkah 1 sampai 4 di Cek Status |
| `evaluate()` | Aturan inti: tolak, lapor, atau aman, beserta alasan dan catatan |
| `showResult()` | Menampilkan hasil, tenggat 30 hari kerja, dan langkah berikutnya |
| `addWorkDays()` | Menambah hari kerja, melewati Sabtu, Minggu, dan `HOL` |
| `renderProve()` | Kesimpulan Uji PROVE IT |
| Tombol cetak | Menyalin isian formulir ke lembar cetak lewat `textContent`, lalu `window.print()` |

## Alur data

1. Pengguna mengisi pilihan dan nilai. Data disimpan di objek `st` di memori.
2. `evaluate()` membaca `st` dan data `SIT`, lalu mengembalikan status dan alasan.
3. Tombol "Isi formulir laporan" menyalin sebagian `st` ke formulir, tanpa menimpa ketikan pengguna.
4. Tombol cetak menyalin isian formulir ke lembar cetak, lalu membuka dialog cetak peramban.
5. Yang disimpan permanen hanya pilihan tema (`localStorage`, kunci `gc-theme`). Isian lain hilang saat halaman ditutup.

## Keamanan

- Isian pengguna tidak pernah masuk ke `innerHTML` tanpa `escapeHtml()`; lembar cetak memakai `textContent`.
- CSP: skrip hanya dari domain sendiri, tidak ada koneksi ke server lain (`connect-src 'self'`).
- Detail dan sisa pekerjaan: `SECURITY.md`.
