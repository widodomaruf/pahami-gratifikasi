# GratiCek

Panduan dan formulir pelaporan gratifikasi untuk ASN dan pelayan publik, berdasarkan Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi sebagaimana diubah dengan **Peraturan KPK Nomor 1 Tahun 2026**.

GratiCek membantu pengguna menjawab satu pertanyaan saat menerima pemberian: **harus ditolak, wajib dilaporkan, atau tidak wajib dilaporkan?** Bila wajib dilaporkan, isian hasil cek bisa langsung dipindahkan ke formulir laporan yang siap dicetak ke PDF.

> GratiCek adalah alat bantu edukasi mandiri, bukan layanan resmi KPK. Bila ragu, laporkan melalui GOL KPK (gol.kpk.go.id) atau Unit Pengendali Gratifikasi (UPG) instansi.

Dikembangkan oleh **Muhammad Widodo Ma'ruf** (Penyuluh Antikorupsi Utama) sebagai bagian dari gerakan Forum Paksiapi Dana Rakca.

## Fitur

### 1. Cek Status

- 19 kondisi pemberian yang sering dialami pelayan publik, dikelompokkan dalam empat kategori: Layanan & Lapangan, Internal Kantor & Rekan, Keluarga & Hajatan, serta Kegiatan Luar & Umum.
- Pencarian kata kunci sehari-hari, misalnya "uang bensin", "amplop nikah", "parsel", atau "ditinggal di meja".
- Pengguna mengisi bentuk pemberian, nilai, tanggal diterima, lalu menjawab beberapa pertanyaan Ya / Tidak / Ragu.
- Hasil berupa salah satu dari tiga status, lengkap dengan alasan, dasar pasal, dan langkah berikutnya:
  - **Wajib Tolak** (Pasal 2 ayat 2)
  - **Wajib Lapor KPK**, disertai tanggal batas lapor 30 hari kerja
  - **Tidak Wajib Lapor** (termasuk pengecualian Pasal 2 ayat 3)
- Jawaban **Ragu** selalu diarahkan ke pilihan yang lebih aman, yaitu lapor atau tolak.
- **Kado urunan** (pernikahan dan sejenisnya, hadiah rekan kerja) dihitung per pemberi. Contoh: Rp5.000.000 dari 20 orang = Rp250.000 per pemberi. Bila masih dalam batas, hasil tetap disertai catatan untuk melapor bila ragu.
- Ringkasan hasil bisa disalin untuk disimpan atau dikirim.

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
- Mode terang dan gelap.
- Bisa dipasang sebagai aplikasi di HP (tombol **Pasang Aplikasi** muncul pada peramban yang mendukung).
- Logo PERPAKSINAS dan Paksiapi Dana Rakca di bagian atas menaut ke akun Instagram masing-masing.

## Privasi

Semua isian, termasuk data pribadi di formulir laporan, hanya diproses di peramban pengguna. Tidak ada server, akun, atau pengiriman data ke pihak mana pun. Satu-satunya sumber luar yang dimuat adalah huruf Plus Jakarta Sans dari Google Fonts. Pilihan tema disimpan di `localStorage` peramban masing-masing.

## Struktur berkas

```
index.html                 # seluruh aplikasi: HTML, CSS, JavaScript, dan logo dalam satu berkas
README.md
DESIGN.md                  # catatan arah tampilan dan alasannya
```

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

- **Daftar libur.** Saat ini berisi tahun 2026. Tambahkan tahun berikutnya setiap terbit SKB 3 Menteri tentang hari libur nasional dan cuti bersama.
- **Formulir laporan.** Cocokkan isian dengan formulir resmi KPK atau GOL KPK terbaru bila ada perubahan.
- **Batas nilai.** Bila Perkom KPK diubah, perbarui `limit` dan `yearly` di `SIT` serta teks di `EXC`.

## Dasar hukum

- Undang-Undang Nomor 31 Tahun 1999 jo. Undang-Undang Nomor 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi, Pasal 12B dan 12C.
- Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi.
- Peraturan KPK Nomor 1 Tahun 2026 tentang Perubahan atas Peraturan KPK Nomor 2 Tahun 2019 (ditetapkan 14 Januari 2026, diundangkan 20 Januari 2026, Berita Negara 2026 Nomor 43).
- Keputusan Pimpinan KPK Nomor 1461 Tahun 2020 (acuan formulir laporan).

## Tautan

- [GOL KPK](https://gol.kpk.go.id/)
- [Prosedur Pelaporan Gratifikasi KPK](https://www.kpk.go.id/id/layanan/gratifikasi/prosedur-pelaporan-gratifikasi)
- [Instagram PERPAKSINAS](https://www.instagram.com/perpaksinas/)
- [Instagram Paksiapi Dana Rakca](https://www.instagram.com/paksiapi.danarakca/)

## Saran dan masukan

- Email: hi.widodomaruf@gmail.com
- Instagram: [@widodomaruf](https://www.instagram.com/widodomaruf/)
