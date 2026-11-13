# GratiCek v1.1

Panduan praktis dan generator formulir pelaporan gratifikasi bagi ASN, Pegawai Negeri, dan Penyelenggara Negara. Aplikasi ini membantu mengecek status sebuah pemberian (**Aman Diterima**, **Wajib Lapor KPK**, atau **Wajib Tolak**) serta menyiapkan formulir laporan siap cetak ke PDF berdasarkan Peraturan KPK Nomor 2 Tahun 2019 sebagaimana diubah dengan **Peraturan KPK Nomor 1 Tahun 2026**.

> **Catatan:** GratiCek adalah alat bantu edukasi mandiri, bukan layanan resmi KPK. Bila ragu, segera konsultasikan dan laporkan melalui Unit Pengendali Gratifikasi (UPG) instansi atau sistem GOL KPK.

## Fitur Utama

1. **Cek Status Gratifikasi**
   * Pencarian cepat dan pengelompokan 19 situasi lapangan (*Layanan & Lapangan*, *Internal Kantor*, *Keluarga & Hajatan*, dan *Kegiatan Luar & Umum*).
   * Perhitungan otomatis batas nilai per pemberi (termasuk skema patungan/urunan untuk kado rekan kerja dan hajatan).
   * Alur pertanyaan penentu (Ya/Tidak/Ragu) yang mengutamakan prinsip kehati-hatian, dilengkapi langkah taktis di lapangan.
2. **Buat Formulir Laporan Siap Cetak PDF**
   * Mengacu pada format Formulir Laporan Gratifikasi KPK (SK Pimpinan KPK No. 1461 Tahun 2020 jo. Perkom KPK 1/2026) untuk laporan penerimaan maupun penolakan.
   * **Isi Otomatis (*Auto-Fill*):** Hasil pengecekan dari tab pertama dapat langsung ditransfer ke formulir laporan.
   * Tata letak cetak khusus kertas A4 (2 halaman resmi) yang siap disimpan ke PDF untuk dikirim melalui email `pelaporan.gratifikasi@kpk.go.id` atau diserahkan ke UPG.
3. **16 Pengecualian Gratifikasi**
   * Ringkasan 16 jenis penerimaan yang tidak wajib dilaporkan (Pasal 2 ayat 3 huruf a–p) beserta batasan nominalnya.
4. **Hitung Tenggat 30 & 20 Hari Kerja**
   * Kalkulator batas akhir pelaporan (30 hari kerja) dan kelengkapan dokumen (20 hari kerja) yang otomatis mengecualikan akhir pekan serta daftar libur nasional/cuti bersama (dapat disesuaikan pengguna).
5. **Cara Melapor & Linimasa**
   * Panduan kanal pelaporan resmi KPK dan tahapan tindak lanjut pascapelaporan.
6. **Privasi Terjaga, Mode Gelap & PWA**
   * Berjalan 100% di sisi peramban (*client-side*) tanpa mengirim data identitas maupun isi laporan ke server mana pun. Mendukung tema Gelap/Terang serta dapat dipasang (*install*) di layar utama ponsel atau komputer.

## Dasar Hukum & Ketentuan

| Ketentuan | Ringkasan Aturan |
| --- | --- |
| **Pasal 2 ayat (2)** | Pemberian terkait jabatan dan berlawanan dengan kewajiban/tugas wajib ditolak. |
| **Pasal 2 ayat (3) huruf l** | Pemberian acara pernikahan, kelahiran, akikah, khitanan, dan upacara adat/agama maks. Rp1.500.000 per pemberi. |
| **Pasal 2 ayat (3) huruf n** | Pemberian sesama rekan kerja (bukan uang/alat tukar) maks. Rp500.000 per pemberian dan Rp1.500.000 per tahun dari pemberi yang sama. |
| **Pasal 2 ayat (4)** | Seluruh pengecualian gugur apabila dilarang oleh ketentuan internal instansi. |
| **Pasal 4A** | Penolakan gratifikasi dapat dilaporkan melalui kanal pelaporan resmi. |
| **Pasal 5 ayat (2)–(3)** | Makanan/minuman mudah rusak dapat langsung disalurkan untuk kemanfaatan sosial dan dilampirkan dokumentasinya. |
| **Pasal 9 & 17–19** | Batas melengkapi dokumen ≤ 20 hari kerja; penetapan status KPK ≤ 30 hari kerja; penyampaian SK ≤ 7 hari kerja. |

## Struktur Berkas

```text
index.html   # Aplikasi web lengkap (HTML, CSS, JS, dan template cetak PDF dalam satu file)
README.md    # Dokumentasi aplikasi
```

## Sumber Referensi

* Peraturan KPK Nomor 1 Tahun 2026 tentang Perubahan atas Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi.
* Keputusan Pimpinan KPK Nomor 1461 Tahun 2020 tentang Pedoman Pelaporan Gratifikasi.
* Portal Pelaporan Daring: [GOL KPK](https://gol.kpk.go.id/)

## Penyusun

Disusun oleh **Muhammad Widodo Ma'ruf — Penyuluh Antikorupsi Utama**.