# Tugas: GratiCek

Satu tugas = satu hasil yang bisa dicek. Pindahkan ke "Selesai" setelah memenuhi `ACCEPTANCE_CRITERIA.md`.

## Belum dikerjakan

### Keamanan dan privasi
- [ ] Pindahkan JavaScript inline ke `app.js`, lalu hapus `'unsafe-inline'` dari `script-src` di CSP.
- [ ] Simpan huruf Plus Jakarta Sans (`.woff2` 400, 500, 600) di repo; hapus Google Fonts dari HTML dan CSP.
- [ ] Perbarui GSAP, Lenis, dan Motion ke versi terbaru; uji ulang API `Motion.animate` (versi mayor baru).
- [ ] Cek dasbor Vercel Analytics: kunjungan masih tercatat setelah CSP aktif.

### Data dan aturan
- [ ] Tambahkan libur 2028 ke `DEFAULT_HOL` setelah SKB 3 Menteri 2028 terbit.
- [ ] Cantumkan rujukan resmi KPK untuk pertanyaan PROVE IT.
- [ ] Cocokkan ulang daftar libur 2026 dengan SKB 3 Menteri 2026.

### Tampilan
- [ ] Label "Wajib dipilih" di judul "Jenis & Kerahasiaan Laporan" terlalu kecil dan berimpitan di HP.
- [ ] Uji di iPhone sungguhan: gulir sentuh, pemilih tanggal, dialog cetak.

### Dokumen
- [ ] Perbarui buku panduan PDF sesuai tampilan terbaru (layar awal ringkas, PROVE IT, ikon pengecualian).

### Keputusan pemilik
- [ ] Simpan draf formulir di perangkat atau tidak (praktis, tetapi data pribadi tersimpan di peramban).
- [ ] Tambah teori deteksi lain (mis. unsur Pasal 12B, pemberian transaksional vs tanam budi).
- [ ] Hapus branch lama `ikon-pengecualian`.

## Selesai (November 2026)

- [x] Cek Status dengan 19 kondisi, pertanyaan Ya/Tidak/Ragu, dan hasil berpasal.
- [x] Kado urunan dihitung per pemberi; batas dibandingkan tanpa pembulatan.
- [x] Menu Uji PROVE IT.
- [x] Layar awal ringkas; kartu yang bisa diketuk diberi warna dan tanda panah.
- [x] Ikon untuk 16 pengecualian.
- [x] Animasi GSAP, Motion, Lenis; mati saat "kurangi gerakan".
- [x] Pustaka animasi disimpan di `vendor/`; CSP dan header keamanan di `vercel.json`.
- [x] Aplikasi tetap jalan saat `localStorage` diblokir.
- [x] Libur 2027; peringatan tenggat lewat; isian otomatis tidak menimpa ketikan.
- [x] Ikon dan gambar pratinjau tautan sebagai berkas statis.
- [x] Uji otomatis `tests/cek.js`.
- [x] Teks antarmuka dirapikan; lisensi MIT.
