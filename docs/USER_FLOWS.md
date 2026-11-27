# Alur pengguna: GratiCek

## 1. Cek status pemberian

```
Cek Status
  └─ Langkah 1: pilih kondisi (4 kondisi tersering, cari, atau "Lihat semua kondisi")
       └─ Langkah 2: bentuk, nilai, tanggal; jumlah pemberi dan total setahun bila urunan
            └─ Langkah 3: pertanyaan Ya / Tidak / Ragu (dilewati untuk kondisi berhasil pasti)
                 └─ Langkah 4: hasil
                      ├─ Wajib Tolak  → tenggat lapor penolakan → Isi formulir laporan penolakan
                      ├─ Wajib Lapor  → tenggat 30 hari kerja   → Isi formulir laporan & cetak PDF
                      └─ Tidak Wajib Lapor → catatan "bila ragu, laporkan"
                      Pilihan lain: Cek pemberian lain, Salin ringkasan, Uji dengan PROVE IT
```

Aturan alur:
- Jawaban Ya atau Ragu pada pertanyaan "pemberi sedang Anda layani" langsung ke hasil Wajib Tolak.
- Jawaban Ragu pada pertanyaan lain menghasilkan Wajib Lapor.

## 2. Mengisi dan mencetak laporan

```
Hasil cek → "Isi formulir laporan" → Cara Melapor (#lapor), gulir ke formulir
  └─ Kolom terisi otomatis: jenis laporan, uraian, nilai, tanggal, kronologi
       └─ Pengguna melengkapi bagian A sampai E
            └─ "Cetak / Simpan sebagai PDF" → dialog cetak → 2 halaman A4
                 └─ Pengguna mengirim lewat email KPK atau menyerahkan ke UPG
```

"Kosongkan formulir" membuka dialog konfirmasi. Menutup halaman saat formulir sudah diisi memunculkan peringatan peramban.

## 3. Uji PROVE IT

```
Uji PROVE IT (#uji) → jawab 7 pertanyaan
  ├─ Ada Ya atau Ragu  → "Ada tanda bahaya"
  ├─ Semua Tidak       → "Belum ada tanda bahaya" → saran Cek Status
  └─ Belum lengkap     → "x dari 7 pertanyaan dijawab"
```

## 4. Hitung tenggat

```
Hitung Tenggat (#tenggat) → tanggal diterima → 30 atau 20 hari kerja
  ├─ Batas akhir + sisa hari kerja
  └─ Sudah lewat → peringatan "Tetap laporkan segera"
  Libur bisa dihapus (ketuk) atau ditambah.
```

## 5. Lihat pengecualian

`Tidak Wajib Lapor` (#pengecualian) → 16 kartu dengan ikon, syarat, dan batas nilai. Hanya untuk dibaca.

## Navigasi

- Layar lebar (≥ 768 px): menu di bawah kepala halaman.
- HP (< 768 px): menu di bagian bawah layar: Cek Status, PROVE IT, Pengecualian, Tenggat, Lapor.
- Kepala halaman: Beranda (s.id/widodomaruf), Panduan (buku panduan PDF), ganti tema.
