# API: GratiCek

GratiCek **tidak punya API atau backend sendiri**, dan tidak memakai autentikasi. Dokumen ini mencatat antarmuka yang ada: alamat halaman, berkas statis, dan event internal untuk lapisan animasi.

## Alamat halaman (hash)

| Alamat | Menu |
| --- | --- |
| `/#cek` (bawaan) | Cek Status |
| `/#uji` | Uji PROVE IT |
| `/#pengecualian` | Tidak Wajib Lapor |
| `/#tenggat` | Hitung Tenggat |
| `/#lapor` | Cara Melapor |
| `/#formulir` | Cara Melapor, langsung ke formulir |

## Berkas statis

| Metode | Path | Isi |
| --- | --- | --- |
| GET | `/` | `index.html` |
| GET | `/manifest.webmanifest` | Manifest aplikasi |
| GET | `/icon-192.png`, `/icon-512.png` | Ikon; `icon-512.png` juga gambar pratinjau tautan |
| GET | `/vendor/*.js` | GSAP, Lenis, Motion (cache setahun) |

Semua respons memakai header dari `vercel.json`.

## Layanan luar yang dipanggil

| Layanan | Untuk apa |
| --- | --- |
| `fonts.googleapis.com`, `fonts.gstatic.com` | Huruf Plus Jakarta Sans |
| `/_vercel/insights/*` (domain sendiri) | Vercel Web Analytics |

Tidak ada data formulir yang dikirim ke layanan mana pun.

## Event internal (`document`)

Script utama mengirim event ini; lapisan animasi di akhir `index.html` mendengarkannya. Tanpa lapisan animasi, event diabaikan.

| Event | `detail` | Kapan |
| --- | --- | --- |
| `gc:view` | elemen `section.view` | Menu berganti |
| `gc:step` | elemen langkah `#s1` sampai `#s4` | Langkah Cek Status berganti |
| `gc:result` | elemen `#result` | Hasil cek tampil |
| `gc:prove` | elemen `#prove-out` | Kesimpulan PROVE IT berubah |
| `gc:toast` | elemen `#toast` | Notifikasi muncul |
| `gc:modal` | `true`/`false` | Dialog konfirmasi dibuka/ditutup |

Fungsi bantu: `scrollToEl(el, center)` dan `scrollToTop()` memakai Lenis bila aktif, dan gulir bawaan bila tidak.
