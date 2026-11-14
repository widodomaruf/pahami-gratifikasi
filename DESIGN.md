# GratiCek: catatan desain

Dokumen ini mencatat arah tampilan GratiCek dan alasannya, supaya perubahan berikutnya tetap konsisten.

Design Read: alat bantu layanan publik untuk ASN dan pelayan publik, gaya lugas ala situs pemerintah, dial ENERGY 1 / RHYTHM 1 / MOTION 1.

## Identitas

- **Tema merah, hitam, putih.** Mengikuti permintaan pemilik agar terasa dekat dengan nuansa KPK, sehingga pengguna langsung mengenali topik antikorupsi. GratiCek tetap menyebut diri sebagai alat bantu edukasi, bukan layanan resmi KPK.
- **Satu warna aksen merah** (`--accent` untuk teks dan garis, `--accent-fill` untuk tombol berisi). Di mode gelap, tombol berisi memakai merah yang lebih gelap agar teks putih tetap terbaca (kontras minimal 4,5:1).
- **Tiga warna status** hanya untuk hasil cek: merah tua = wajib tolak, oranye kecokelatan = wajib lapor, hijau = tidak wajib lapor. Warna ini bermakna, bukan hiasan.
- **Huruf Plus Jakarta Sans** (satu keluarga untuk seluruh halaman). Dipilih karena pemilik meminta sans serif, terbaca jelas di layar HP, dan lahir dari konteks Indonesia.
- **Motif identitas:** cap status bergaya stempel (WAJIB LAPOR dan lainnya) yang mengingatkan pada stempel dokumen dinas. Ini satu-satunya teks kapital dengan jarak huruf lebar.

## Tata letak

- **Satu kolom kerja** dengan lebar maksimal 920 px, karena isinya alur tanya jawab dan formulir yang dibaca berurutan.
- **Menu atas di PC, menu bawah di HP**, karena pengguna sering membuka dari HP saat baru menerima pemberian.
- **Kartu dipakai untuk pilihan yang bisa diklik** (kondisi, pengecualian, kanal lapor), bukan untuk hiasan.
- **Target sentuh minimal 44 px di HP** untuk semua tombol dan pilihan.

## Gerak

- Tidak ada animasi dekoratif. Gulir otomatis ke formulir dimatikan bila pengguna memilih kurangi gerakan.

## Logo

- Perisai GratiCek, logo PERPAKSINAS, dan logo Dana Rakca berasal dari pemilik.
- Logo PERPAKSINAS dan Dana Rakca (urutan ini, tanpa label) ada di pita putih di atas kepala halaman, masing-masing menaut ke Instagram-nya. Pita selalu putih di kedua tema karena kedua logo berlatar putih.
- Kop lembar cetak memakai "KPK" atas keputusan pemilik.
