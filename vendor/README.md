# vendor

Pustaka animasi disimpan di repo (bukan dimuat dari CDN) supaya isi skrip tidak bisa diganti pihak luar. Semua berkas disalin apa adanya dari paket npm resmi.

| Berkas | Paket npm | Lisensi | SHA-384 |
| --- | --- | --- | --- |
| `gsap-3.12.5.min.js` | `gsap@3.12.5` `dist/gsap.min.js` | GreenSock Standard License (header di berkas) | `g4NTh/Iv5PPU4xPyhEWqPcwtNXOvdaDI8LLnyYfyNZOjKJeYQyjzQ9X5275eBjpt` |
| `lenis-1.1.20.min.js` | `lenis@1.1.20` `dist/lenis.min.js` (komentar `sourceMappingURL` dihapus) | MIT, `LICENSE-lenis` | `cnEugbCuRKMaYNWwicwBVjS4GwvG1HLdia+JdKQbQKgeD9wlI0KJK48i4w38mDLb` |
| `motion-11.11.17.js` | `motion@11.11.17` `dist/motion.js` | MIT, `LICENSE-motion.md` | `YXUklWfH/2mt4JRj3K/QEMSu5vCe7gjRtLG44/RHcttBZYOzbK7crTzfjEXcFXng` |

Memperbarui: unduh versi baru dengan `npm pack <paket>@<versi>`, salin berkas `dist`, ganti nama berkas dengan versi baru, lalu sesuaikan `<script src>` di akhir `index.html`. Nama berkas memuat versi karena `vercel.json` menyimpan folder ini di cache selama setahun.
