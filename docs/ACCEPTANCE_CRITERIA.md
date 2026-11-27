# Kriteria selesai: GratiCek

Sebuah perubahan dianggap selesai bila semua butir yang relevan terpenuhi. Butir bertanda **(uji)** diperiksa otomatis oleh `node tests/cek.js`.

## Cek Status

- [ ] Amplop nikah Rp5.000.000 dari 20 pemberi → Tidak Wajib Lapor, dengan rincian Rp250.000 per pemberi dan catatan "bila ragu, laporkan". **(uji)**
- [ ] Kado rekan Rp3.000.000 dari 15 orang dengan total setahun Rp9.000.000 → Wajib Lapor KPK. **(uji)**
- [ ] Kado rekan Rp2.500.002 dari 5 orang → Wajib Lapor KPK; Rp2.500.000 dari 5 orang → Tidak Wajib Lapor. **(uji)**
- [ ] Parsel hari raya → Wajib Lapor KPK. **(uji)**
- [ ] Pemberian dari pihak yang sedang dilayani → Wajib Tolak. **(uji)**
- [ ] Jawaban Ragu tidak pernah menghasilkan Tidak Wajib Lapor.
- [ ] Hasil Wajib Lapor atau Wajib Tolak tidak pernah memuat kata "boleh diterima".
- [ ] Setiap hasil menyebut alasan dan pasal.

## Tenggat

- [ ] 30 hari kerja sejak 27 November 2026 = Kamis, 14 Januari 2027. **(uji)**
- [ ] Batas yang sudah lewat menampilkan "Sudah lewat". **(uji)**
- [ ] Sabtu, Minggu, dan semua tanggal di `DEFAULT_HOL` tidak dihitung.

## Formulir dan cetak

- [ ] Isian otomatis tidak menimpa teks yang sudah diketik pengguna. **(uji)**
- [ ] Hasil cetak 2 halaman A4 dengan kop KPK, termasuk saat kronologi panjang.
- [ ] Data formulir tidak dikirim ke server mana pun.

## Ketahanan

- [ ] Aplikasi tetap jalan bila `localStorage` diblokir. **(uji)**
- [ ] Aplikasi tetap jalan bila pustaka di `vendor/` gagal dimuat (tanpa animasi).
- [ ] Tidak ada error JavaScript dan tidak ada pelanggaran CSP di Console. **(uji untuk error JavaScript)**

## Tampilan dan aksesibilitas

- [ ] Tidak ada geser ke samping dari lebar 375 px sampai 1280 px.
- [ ] Target sentuh minimal 44 px di HP.
- [ ] Semua isian punya label yang terlihat; fokus keyboard terlihat; dialog mengunci fokus.
- [ ] Pilihan "kurangi gerakan" mematikan semua animasi.
- [ ] Kontras teks minimal 4,5:1 di mode terang dan gelap.
- [ ] Tampil benar di Chromium dan WebKit (Safari).

## Teks

- [ ] Tidak ada tanda pisah panjang (—) di teks antarmuka.
- [ ] Tidak ada klaim tanpa dasar; pasal dan angka sesuai sumber.

## Rilis

- [ ] Perubahan diuji dulu di branch dan pratinjau Vercel, lalu digabung ke `main` setelah disetujui pemilik.
