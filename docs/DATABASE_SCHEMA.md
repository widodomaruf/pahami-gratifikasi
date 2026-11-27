# Skema data: GratiCek

GratiCek **tidak memakai database**. Tidak ada tabel, server, atau data pengguna yang disimpan. Semua data aturan ditulis sebagai konstanta JavaScript di `index.html`, dan isian pengguna hanya ada di memori peramban.

Dokumen ini mencatat bentuk data tersebut.

## Data aturan (konstanta)

### `SIT`: daftar kondisi pemberian (19 item)

| Kolom | Tipe | Arti |
| --- | --- | --- |
| `id` | teks | Kunci unik, mis. `nikah`, `parsel` |
| `cat` | teks | Kategori: `layanan`, `kantor`, `pribadi`, `umum` |
| `kw` | teks | Kata kunci pencarian |
| `t`, `s` | teks | Judul dan keterangan singkat |
| `huruf` | teks/null | Huruf pengecualian Pasal 2 ayat (3), `a` sampai `p` |
| `always` | `'tolak'`/`'lapor'` | Hasil pasti tanpa pertanyaan |
| `why_always` | teks | Alasan untuk hasil pasti |
| `limit` | angka | Batas nilai per pemberi (Rp) |
| `yearly` | angka | Batas per tahun dari pemberi yang sama (Rp) |
| `why_limit` | teks | Alasan bila melewati `limit` |
| `perGiver` | boolean | Nilai dibagi jumlah pemberi (kado urunan) |
| `noMoney` | boolean | Pengecualian hanya untuk barang, bukan uang/voucher |
| `allowedBentuk` | daftar teks | Bentuk yang boleh dikecualikan |
| `q` | daftar `{t, fail, why}` | Pertanyaan syarat; `fail` = jawaban yang membuat wajib lapor |
| `tip` | HTML konstan | Saran lapangan |
| `warn` | boolean | Ditandai Wajib Tolak di daftar |

### `EXC`: 16 pengecualian

`[huruf, teks, batas?]`, mis. `['l', 'Pemberian terkait pernikahan ...', 'Maks. Rp1.500.000 per pemberi']`.

### `EXC_UI`

`{huruf: [judul singkat, path SVG ikon]}`.

### `BENTUK`

`[nilai, label]`: `uang`, `voucher`, `makanan`, `barang`.

### `PROVE`

`[huruf, nama, pertanyaan]`, tujuh baris P, R, O, V, E, I, T.

### `DEFAULT_HOL`

Daftar tanggal ISO (`YYYY-MM-DD`) libur nasional dan cuti bersama 2026 dan 2027. Disalin ke `HOL` saat halaman dibuka; pengguna bisa menambah atau menghapus, tetapi perubahan tidak disimpan.

## Data sesi (memori, hilang saat halaman ditutup)

### `st`: keadaan Cek Status

| Kolom | Arti |
| --- | --- |
| `sit` | Kondisi terpilih (item `SIT`) |
| `bentuk`, `nilai`, `unknown`, `item` | Bentuk, nilai rupiah, nilai tidak diketahui, nama barang |
| `tgl` | Tanggal diterima (ISO) |
| `pemberi`, `total` | Jumlah pemberi; total setahun dari rekan yang sama |
| `qs`, `qi`, `answers` | Pertanyaan, posisi, dan jawaban |
| `lastStatus` | Hasil terakhir: `tolak`, `lapor`, `aman` |

### Formulir laporan

Kolom `fa_*` (identitas pelapor), `fb_*` (pemberi), `fc_*` (penerimaan), `fd_*` (kronologi), `fe_*` (kompensasi dan tanda tangan). Isinya hanya disalin ke lembar cetak.

## Penyimpanan permanen

| Tempat | Kunci | Nilai |
| --- | --- | --- |
| `localStorage` | `gc-theme` | `light` atau `dark` |

Tidak ada cookie dan tidak ada data pribadi yang disimpan.
