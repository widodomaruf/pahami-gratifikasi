# GratiCek v1.2

Panduan praktis dan generator formulir pelaporan gratifikasi bagi ASN, Pegawai Negeri, dan Penyelenggara Negara. Aplikasi ini membantu mengecek status sebuah pemberian (**Aman Diterima**, **Wajib Lapor KPK**, atau **Wajib Tolak**) serta menyiapkan formulir laporan siap cetak ke PDF berdasarkan Peraturan KPK Nomor 2 Tahun 2019 sebagaimana diubah dengan **Peraturan KPK Nomor 1 Tahun 2026**.

> **Catatan:** GratiCek adalah alat bantu edukasi mandiri, bukan layanan resmi KPK. Bila ragu, segera konsultasikan dan laporkan melalui Unit Pengendali Gratifikasi (UPG) instansi atau sistem GOL KPK.

## Fitur Utama

* **Cek Status**
  * Pencarian cepat dan pengelompokan 19 kondisi lapangan (*Layanan & Lapangan*, *Internal Kantor*, *Keluarga & Hajatan*, dan *Kegiatan Luar & Umum*).
  * Perhitungan otomatis batas nilai per pemberi (termasuk skema patungan/urunan untuk kado rekan kerja dan hajatan).
  * Alur pertanyaan penentu (Ya/Tidak/Ragu) yang mengutamakan prinsip kehati-hatian, dilengkapi langkah taktis di lapangan.

* **Aman Diterima**
  * Ringkasan 16 jenis pemberian yang dikecualikan dari kewajiban lapor (Pasal 2 ayat 3 huruf a–p) beserta batasan nominalnya.

* **Hitung Tenggat**
  * Kalkulator batas akhir pelaporan (30 hari kerja) dan kelengkapan dokumen (20 hari kerja) yang otomatis mengecualikan akhir pekan serta daftar libur nasional/cuti bersama (dapat disesuaikan pengguna).

* **Cara Melapor & Formulir PDF**
  * Panduan kanal pelaporan resmi KPK (GOL KPK, Email, UPG Instansi, dan Surat) beserta linimasa tindak lanjut pascapelaporan.
  * **Formulir Laporan Siap Cetak PDF:** Mengacu pada format Formulir Laporan Gratifikasi KPK (SK Pimpinan KPK No. 1461 Tahun 2020 jo. Perkom KPK 1/2026) yang terintegrasi di bagian bawah halaman ini, lengkap dengan fitur isi otomatis (*auto-fill*) dari hasil pengecekan dan tata letak cetak kertas A4 (2 halaman resmi).

* **Privasi Terjaga, Mode Gelap & PWA**
  * Berjalan 100% di sisi peramban (*client-side*) tanpa mengirim data identitas maupun isi laporan ke server mana pun. Mendukung tema Gelap/Terang serta dapat dipasang (*install*) di layar utama ponsel atau komputer.

## Dasar Hukum & Ketentuan

| Ketentuan | Ringkasan Aturan | 
| ----- | ----- | 
| **Pasal 2 ayat (2)** | Pemberian terkait jabatan dan berlawanan dengan kewajiban/tugas wajib ditolak. | 
| **Pasal 2 ayat (3) huruf l** | Pemberian acara pernikahan, kelahiran, akikah, khitanan, dan upacara adat/agama maks. Rp1.500.000 per pemberi. | 
| **Pasal 2 ayat (3) huruf n** | Pemberian sesama rekan kerja (bukan uang/alat tukar) maks. Rp500.000 per pemberian dan Rp1.500.000 per tahun dari pemberi yang sama. | 
| **Pasal 2 ayat (4)** | Seluruh pengecualian gugur apabila dilarang oleh ketentuan internal instansi. | 
| **Pasal 4A** | Penolakan gratifikasi dapat dilaporkan melalui kanal pelaporan resmi. | 
| **Pasal 5 ayat (2)–(3)** | Makanan/minuman mudah rusak dapat langsung disalurkan untuk kemanfaatan sosial dan dilampirkan dokumentasinya. | 
| **Pasal 9 & 17–19** | Batas melengkapi dokumen ≤ 20 hari kerja; penetapan status KPK ≤ 30 hari kerja; penyampaian SK ≤ 7 hari kerja. | 

## Struktur Berkas

```
index.html   # Aplikasi web lengkap (HTML, CSS, JS, dan template cetak PDF dalam satu file)
README.md    # Dokumentasi aplikasi
```

## Sumber Referensi

* Peraturan KPK Nomor 1 Tahun 2026 tentang Perubahan atas Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi.
* Keputusan Pimpinan KPK Nomor 1461 Tahun 2020 tentang Pedoman Pelaporan Gratifikasi.
* Portal Pelaporan Daring: [GOL KPK](https://gol.kpk.go.id/)

## Penyusun & Kontak

Disusun oleh **Muhammad Widodo Ma'ruf — Penyuluh Antikorupsi Utama**.

* **Saran & Masukan:** [hi.widodomaruf@gmail.com](mailto:hi.widodomaruf@gmail.com)
* **Instagram:** [@widodomaruf](https://www.instagram.com/widodomaruf/)