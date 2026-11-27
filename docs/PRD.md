# PRD: GratiCek

## Masalah

ASN dan pelayan publik sering bingung saat menerima pemberian: boleh diterima, wajib dilaporkan, atau harus ditolak? Aturannya ada di Perkom KPK 2/2019 jo. Perkom KPK 1/2026, tetapi pasalnya panjang dan memuat 16 pengecualian dengan syarat dan batas nilai masing-masing. Akibatnya, sebagian orang tidak melapor karena tidak tahu, atau terlambat melewati batas 30 hari kerja.

## Pengguna

- **Utama:** ASN dan pelayan publik yang baru menerima pemberian dan ingin tahu statusnya, sering lewat HP.
- **Kedua:** penyuluh antikorupsi dan fasilitator yang memakai GratiCek saat sosialisasi.
- **Ketiga:** UPG instansi yang menerima formulir laporan dari pegawai.

## Tujuan

1. Pengguna tahu status pemberiannya (tolak, lapor, atau tidak wajib lapor) beserta pasal dasarnya.
2. Pengguna tahu batas akhir lapor dalam hari kerja.
3. Pengguna yang wajib lapor bisa langsung membuat formulir laporan siap cetak ke PDF.

## Fitur (cakupan saat ini)

| Fitur | Isi |
| --- | --- |
| Cek Status | 19 kondisi pemberian, pencarian kata kunci, bentuk dan nilai, pertanyaan Ya/Tidak/Ragu, hasil dengan alasan dan pasal |
| Kado urunan | Nilai dibagi jumlah pemberi; batas per pemberi dan per tahun (huruf l dan n) |
| Uji PROVE IT | Tujuh pertanyaan reflektif; satu jawaban Ya atau Ragu ditandai bahaya |
| Tidak Wajib Lapor | Daftar 16 pengecualian Pasal 2 ayat (3) dengan ikon, syarat, dan batas nilai |
| Hitung Tenggat | 30 hari kerja (batas lapor) atau 20 hari kerja (melengkapi laporan); libur 2026 dan 2027 bisa diubah |
| Cara Melapor | Kanal resmi, alur setelah melapor, formulir laporan bagian A sampai E, cetak 2 halaman A4 |
| Lainnya | Mode terang dan gelap, bisa dipasang di HP, tautan Arnitas untuk fasilitator |

## Di luar cakupan

- Mengirim laporan ke KPK. Pengiriman tetap lewat GOL KPK, email, UPG, atau surat.
- Akun, login, atau penyimpanan data di server. Semua isian tetap di peramban pengguna.
- Menjadi layanan resmi KPK. GratiCek adalah alat bantu edukasi mandiri.

## Prinsip

- **Bila ragu, arahkan ke pilihan yang lebih aman.** Jawaban Ragu selalu menghasilkan lapor atau tolak.
- **Tidak pernah menulis "boleh diterima" untuk pemberian yang wajib lapor.**
- **Data pribadi tidak meninggalkan perangkat.**

## Ukuran keberhasilan

- Pengguna menyelesaikan cek status dari layar pertama sampai hasil.
- Kunjungan tercatat di Vercel Web Analytics (hanya tampilan halaman, tanpa data pribadi).
- Masukan fasilitator setelah sesi sosialisasi.

## Dasar hukum

- UU 31/1999 jo. UU 20/2001, Pasal 12B dan 12C.
- Perkom KPK 2/2019 tentang Pelaporan Gratifikasi, diubah dengan Perkom KPK 1/2026.
- Keputusan Pimpinan KPK 1461/2020 (acuan formulir).
- SKB 3 Menteri tentang libur nasional dan cuti bersama 2026 dan 2027.
