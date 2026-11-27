# GratiCek

Panduan dan formulir pelaporan gratifikasi untuk ASN dan pelayan publik, berdasarkan Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi sebagaimana diubah dengan **Peraturan KPK Nomor 1 Tahun 2026**.

GratiCek membantu pengguna menjawab satu pertanyaan saat menerima pemberian: **harus ditolak, wajib dilaporkan, atau tidak wajib dilaporkan?** Bila wajib dilaporkan, isian hasil cek bisa langsung dipindahkan ke formulir laporan yang siap dicetak ke PDF.

> GratiCek adalah alat bantu edukasi mandiri, bukan layanan resmi KPK. Bila ragu, laporkan melalui GOL KPK (gol.kpk.go.id) atau Unit Pengendali Gratifikasi (UPG) instansi.

Dikembangkan oleh **Muhammad Widodo Ma'ruf** (Penyuluh Antikorupsi Utama, PAK.915.3.00005 2024) sebagai bagian dari gerakan Forum Paksiapi Dana Rakca.

Buku panduan penggunaan (PDF): [Google Drive](https://drive.google.com/drive/folders/1rAWgVEES0AaMG82MINxaFE2T2F58aTk_)

## Fitur

### 1. Cek Status

- Layar awal ringkas: kotak pencarian dan empat kondisi yang paling sering terjadi. Daftar lengkap 19 kondisi (empat kategori: Layanan & Lapangan, Internal Kantor & Rekan, Keluarga & Hajatan, Kegiatan Luar & Umum) dibuka lewat tombol **Lihat semua kondisi**.
- Pencarian kata kunci sehari-hari, misalnya "uang bensin", "amplop nikah", "parsel", atau "ditinggal di meja".
- Pengguna mengisi bentuk pemberian, nilai, tanggal diterima, lalu menjawab beberapa pertanyaan Ya / Tidak / Ragu.
- Hasil berupa salah satu dari tiga status, lengkap dengan alasan, dasar pasal, dan langkah berikutnya:
  - **Wajib Tolak** (Pasal 2 ayat 2)
  - **Wajib Lapor KPK**, disertai tanggal batas lapor 30 hari kerja
  - **Tidak Wajib Lapor** (termasuk pengecualian Pasal 2 ayat 3)
- Jawaban **Ragu** selalu diarahkan ke pilihan yang lebih aman, yaitu lapor atau tolak.
- **Kado urunan** (pernikahan dan sejenisnya, hadiah rekan kerja) dihitung per pemberi. Contoh: Rp5.000.000 dari 20 orang = Rp250.000 per pemberi. Bila masih dalam batas, hasil tetap disertai catatan untuk melapor bila ragu.
- Ringkasan hasil bisa disalin untuk disimpan atau dikirim.

### Uji PROVE IT

Tujuh pertanyaan reflektif yang dirangkum KPK untuk mengenali pemberian yang patut dicurigai: **P**urpose (tujuan), **R**ules (aturan), **O**penness (keterbukaan), **V**alue (nilai), **E**thics (etika), **I**dentity (identitas), dan **T**iming (waktu). Satu jawaban Ya atau Ragu ditandai sebagai tanda bahaya. Menjadi menu tersendiri (**Uji PROVE IT**, di HP: **PROVE IT**), dan juga ditautkan dari halaman hasil cek.

### 2. Tidak Wajib Lapor

Daftar 16 penerimaan yang dikecualikan dari kewajiban lapor (Pasal 2 ayat 3 huruf a sampai p), beserta syarat dan batas nilainya.

### 3. Hitung Tenggat

- Menghitung batas 30 hari kerja untuk melapor, atau 20 hari kerja untuk melengkapi laporan yang dikembalikan (Pasal 9).
- Sabtu, Minggu, libur nasional, dan cuti bersama tidak dihitung. Daftar libur bisa ditambah atau dihapus langsung di halaman.

### 4. Cara Melapor dan Formulir Laporan

- Kanal resmi: GOL KPK, email pelaporan.gratifikasi@kpk.go.id, UPG instansi, dan surat ke Direktorat Gratifikasi KPK.
- Alur setelah melapor: verifikasi, kelengkapan dokumen, penetapan status, dan penyampaian SK.
- **Formulir Laporan Gratifikasi** (penerimaan atau penolakan) mengacu SK Pimpinan KPK Nomor 1461 Tahun 2020, dengan bagian A sampai E: identitas pelapor, data pemberi, data penerimaan, kronologi, dan permohonan kompensasi. Formulir dicetak dua halaman A4 lewat menu cetak peramban, lalu bisa disimpan sebagai PDF.

### Lainnya

- Tampilan menyesuaikan perangkat: menu di atas pada layar lebar, menu di bagian bawah pada HP.
- Kartu yang bisa diketuk berlatar merah muda dengan tanda panah; kartu yang hanya untuk dibaca berlatar putih tanpa panah. Tautan bergaris bawah.
- Mode terang dan gelap.
- Bisa dipasang sebagai aplikasi di HP (tombol **Pasang Aplikasi** muncul pada peramban yang mendukung).
- Logo PERPAKSINAS dan Paksiapi Dana Rakca di bagian atas menaut ke akun Instagram masing-masing.
- Tombol **Beranda** di kepala halaman membuka s.id/widodomaruf (kumpulan aplikasi pengembang), dan tombol **Panduan** membuka buku panduan PDF.
- Kartu **Arnitas (Arena Integritas)** di bagian bawah setiap halaman, untuk fasilitator yang ingin mengadakan kuis live dan mini game antikorupsi: [arnitas.vercel.app](https://arnitas.vercel.app).

## Privasi

Semua isian, termasuk data pribadi di formulir laporan, hanya diproses di peramban pengguna. Tidak ada server, akun, atau pengiriman data ke pihak mana pun. Satu-satunya sumber luar yang dimuat adalah huruf Plus Jakarta Sans dari Google Fonts. Pustaka animasi (GSAP, Lenis, Motion) disimpan di folder `vendor/`, tidak dimuat dari CDN. Pilihan tema disimpan di `localStorage` peramban masing-masing.

`vercel.json` memasang header keamanan: Content-Security-Policy (skrip hanya dari domain sendiri, data tidak bisa dikirim ke server lain), larangan halaman dibingkai situs lain, `nosniff`, `Referrer-Policy`, dan `Permissions-Policy`.

## Struktur berkas

```
index.html                 # seluruh aplikasi: HTML, CSS, JavaScript, dan logo dalam satu berkas
icon-192.png, icon-512.png # ikon aplikasi dan gambar pratinjau tautan
manifest.webmanifest       # data pemasangan sebagai aplikasi di HP
tests/cek.js               # uji alur utama (lihat bagian Menguji)
LICENSE                    # Lisensi MIT
vercel.json                # header keamanan (CSP dan lainnya) untuk Vercel
SECURITY.md                # catatan keamanan: yang sudah dan belum diperbaiki
vendor/                    # GSAP, Lenis, Motion (disalin dari npm, lihat vendor/README.md)
README.md
DESIGN.md                  # catatan arah tampilan dan alasannya
docs/                      # PRD, arsitektur, alur pengguna, kriteria selesai, tugas
.env.example               # variabel lingkungan (saat ini tidak ada)
```

## Dokumen proyek

| Dokumen | Isi |
| --- | --- |
| [PRD](docs/PRD.md) | Masalah, pengguna, fitur, dan cakupan |
| [DESIGN.md](DESIGN.md) | Arah tampilan, gerak, dan aksesibilitas |
| [Tech stack](docs/TECH_STACK.md) | Bahasa, pustaka, hosting, dan alat |
| [Arsitektur](docs/ARCHITECTURE.md) | Struktur aplikasi dan alur data |
| [Skema data](docs/DATABASE_SCHEMA.md) | Bentuk data aturan dan data sesi (tanpa database) |
| [API](docs/API_DOCUMENTATION.md) | Alamat halaman, berkas statis, dan event internal (tanpa backend) |
| [Alur pengguna](docs/USER_FLOWS.md) | Alur cek, lapor, PROVE IT, dan tenggat |
| [Kriteria selesai](docs/ACCEPTANCE_CRITERIA.md) | Syarat sebuah perubahan dianggap selesai |
| [Tugas](docs/TASKS.md) | Pekerjaan yang sudah dan belum selesai |
| [SECURITY.md](SECURITY.md) | Catatan keamanan |
| [.env.example](.env.example) | Variabel lingkungan (saat ini tidak ada) |

## Memasang di GitHub Pages

1. Unggah `index.html` (dan berkas lain bila diinginkan) ke cabang `main` repositori.
2. Buka **Settings → Pages**, pilih **Deploy from a branch**, cabang `main`, folder `/ (root)`, lalu **Save**.
3. Situs aktif di `https://<username>.github.io/<nama-repo>/` setelah beberapa menit.

## Memasang di Vercel

1. Di Vercel, pilih **Add New → Project** dan impor repositori ini.
2. Framework Preset: **Other**, tanpa build command dan tanpa output directory.
3. Klik **Deploy**.

## Memperbarui aturan dan data

Semua data ada di bagian `<script>` dalam `index.html`:

| Konstanta | Isi |
| --- | --- |
| `SIT` | Daftar kondisi: judul, kategori, kata kunci pencarian, huruf pengecualian, batas nilai (`limit`, `yearly`), bentuk yang diperbolehkan, pertanyaan syarat, dan tips lapangan |
| `EXC` | Teks ringkas 16 pengecualian (huruf a sampai p) |
| `BENTUK` | Pilihan bentuk pemberian |
| `DEFAULT_HOL` | Libur nasional dan cuti bersama |

Yang perlu diperiksa secara berkala:

- **Daftar libur.** Saat ini berisi tahun 2026 dan 2027 (2027 sesuai SKB 3 Menteri No. 1205/2026, 3/2026, dan 2/2026). Tambahkan tahun berikutnya setiap terbit SKB 3 Menteri tentang hari libur nasional dan cuti bersama.
- **Formulir laporan.** Cocokkan isian dengan formulir resmi KPK atau GOL KPK terbaru bila ada perubahan.
- **Batas nilai.** Bila Perkom KPK diubah, perbarui `limit` dan `yearly` di `SIT` serta teks di `EXC`.

## Menguji

Uji alur utama berjalan di peramban Chromium lewat Playwright: status hasil cek (termasuk batas per pemberi dan per tahun), kronologi yang tidak tertimpa, tenggat yang sudah lewat, libur 2027, dan aplikasi tetap jalan saat penyimpanan situs diblokir.

```
npm install --no-save playwright
npx playwright install chromium
node tests/cek.js
```

Jalankan setiap kali `SIT`, batas nilai, atau `DEFAULT_HOL` diubah. Hasil yang benar: `Semua uji lulus.`

## Dasar hukum

- Undang-Undang Nomor 31 Tahun 1999 jo. Undang-Undang Nomor 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi, Pasal 12B dan 12C.
- Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi.
- Peraturan KPK Nomor 1 Tahun 2026 tentang Perubahan atas Peraturan KPK Nomor 2 Tahun 2019 (ditetapkan 14 Januari 2026, diundangkan 20 Januari 2026, Berita Negara 2026 Nomor 43).
- Keputusan Pimpinan KPK Nomor 1461 Tahun 2020 (acuan formulir laporan).

## Tautan

- [Buku Panduan Penggunaan GratiCek (PDF)](https://drive.google.com/drive/folders/1rAWgVEES0AaMG82MINxaFE2T2F58aTk_)
- [GOL KPK](https://gol.kpk.go.id/)
- [Prosedur Pelaporan Gratifikasi KPK](https://www.kpk.go.id/id/layanan/gratifikasi/prosedur-pelaporan-gratifikasi)
- [Instagram PERPAKSINAS](https://www.instagram.com/perpaksinas/)
- [Instagram Paksiapi Dana Rakca](https://www.instagram.com/paksiapi.danarakca/)

## Saran dan masukan

- Email: hi.widodomaruf@gmail.com
- Instagram: [@widodomaruf](https://www.instagram.com/widodomaruf/)

## Lisensi

Kode GratiCek dirilis dengan [Lisensi MIT](LICENSE). Pustaka di folder `vendor/` mengikuti lisensinya masing-masing (lihat `vendor/README.md`).
