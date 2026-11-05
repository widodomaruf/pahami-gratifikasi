# Pahami Gratifikasi

Website panduan gratifikasi untuk Pegawai Negeri dan Penyelenggara Negara. Situs ini membantu pengguna menentukan apakah sebuah pemberian **boleh diterima tanpa lapor**, **wajib dilaporkan**, atau **wajib ditolak**, berdasarkan Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi sebagaimana diubah dengan **Peraturan KPK Nomor 1 Tahun 2026**.

> Situs ini adalah alat bantu edukasi, bukan layanan resmi KPK. Bila ragu, laporkan melalui Unit Pengendali Gratifikasi (UPG) instansi atau GOL KPK.

## Fitur

- **Cek Gratifikasi.** Pengguna memilih situasi dari daftar (kado pernikahan, hadiah rekan kerja, parsel/THR, honor, voucher, pemberian dari vendor, dan lainnya), mengisi bentuk, nilai, dan tanggal terima, lalu menjawab 1–4 pertanyaan Ya/Tidak/Ragu. Hasilnya berupa label, alasan, dasar pasal, langkah berikutnya, dan tanggal batas lapor.
- **Daftar Pengecualian.** Ke-16 penerimaan yang tidak wajib dilaporkan (Pasal 2 ayat 3 huruf a–p), termasuk batas nilai huruf l dan n.
- **Hitung Tenggat.** Menghitung 30 hari kerja (batas lapor) atau 20 hari kerja (batas melengkapi laporan), tanpa Sabtu, Minggu, libur nasional, dan cuti bersama. Daftar libur bisa ditambah atau dihapus langsung di halaman.
- **Cara Melapor.** Kanal resmi (GOL KPK, aplikasi GOL, email, UPG), aturan penyerahan objek gratifikasi, dan linimasa setelah melapor.

## Aturan yang dipakai

| Ketentuan | Isi |
| --- | --- |
| Pasal 2 ayat (2) | Pemberian terkait jabatan yang berlawanan dengan tugas wajib ditolak |
| Pasal 2 ayat (3) huruf l | Pemberian acara pernikahan, kelahiran, dan sejenisnya maks. Rp1.500.000 per pemberi |
| Pasal 2 ayat (3) huruf n | Pemberian rekan kerja (bukan uang) maks. Rp500.000 per pemberian dan Rp1.500.000 per tahun dari pemberi yang sama |
| Pasal 2 ayat (4) | Pengecualian tidak berlaku bila dilarang aturan instansi |
| Pasal 4A | Penolakan gratifikasi dapat dilaporkan |
| Pasal 5 ayat (2)–(3) | Makanan/minuman mudah rusak tidak wajib diserahkan dan boleh langsung disalurkan untuk kemanfaatan sosial |
| Pasal 9 | Laporan tidak lengkap harus dilengkapi dalam 20 hari kerja |
| Pasal 17–19 | Penetapan status ≤ 30 hari kerja, SK disampaikan ≤ 7 hari kerja |

Jawaban **Ragu** selalu diarahkan ke hasil yang lebih aman (lapor atau tolak).

## Struktur

```
index.html   # seluruh halaman: HTML, CSS, dan JavaScript dalam satu file
README.md
```

Tanpa backend, tanpa login, dan tanpa mengirim jawaban pengguna ke mana pun. Satu-satunya sumber eksternal adalah font Plus Jakarta Sans dari Google Fonts. Daftar libur yang diubah pengguna disimpan di `localStorage` browser masing-masing.

## Memasang di GitHub Pages

1. Buat repositori baru, misalnya `pahami-gratifikasi`.
2. Unggah `index.html` dan `README.md` ke cabang `main`.
3. Buka **Settings → Pages**, pilih **Deploy from a branch**, cabang `main`, folder `/ (root)`, lalu **Save**.
4. Situs aktif di `https://<username>.github.io/pahami-gratifikasi/` setelah beberapa menit.

## Memperbarui data

Semua data aturan ada di bagian `<script>` dalam `index.html`:

- `SIT`: daftar situasi, huruf pengecualian, batas nilai, dan pertanyaan syarat.
- `EXC`: teks ringkas 16 pengecualian.
- `DEFAULT_HOL`: libur nasional dan cuti bersama. **Daftar 2026 masih perkiraan; cocokkan dengan SKB 3 Menteri yang berlaku** dan tambahkan tahun berikutnya setiap ada SKB baru.

## Catatan yang perlu dikonfirmasi

- Bila nilai melebihi batas (misalnya amplop Rp2.000.000), apakah yang dilaporkan seluruh nilai atau hanya kelebihannya. Teks Perkom tidak menyebutkannya; konfirmasi ke UPG atau KPK.
- Isian formulir GOL KPK dapat berubah; cocokkan panduan di tab Cara Melapor secara berkala.

## Sumber

- Peraturan KPK Nomor 1 Tahun 2026 tentang Perubahan atas Peraturan KPK Nomor 2 Tahun 2019 tentang Pelaporan Gratifikasi (ditetapkan 14 Januari 2026, diundangkan 20 Januari 2026, Berita Negara 2026 Nomor 43).
- [Prosedur Pelaporan Gratifikasi – KPK](https://www.kpk.go.id/id/layanan/gratifikasi/prosedur-pelaporan-gratifikasi)
- [GOL KPK](https://gol.kpk.go.id/)

## Kredit

Disusun oleh **Muhammad Widodo Ma'ruf - Penyuluh Antikorupsi Utama**.
