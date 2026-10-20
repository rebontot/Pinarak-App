# PinaraK Tahap 1: panduan pasang

## 1. Server (Apps Script)
1. Buka proyek Apps Script PinaraK.
2. Ganti seluruh isi **Code.gs** dengan `PinaraK_Code.gs`, dan seluruh isi **Api.gs** dengan `PinaraK_Api.gs` (Ctrl+A, hapus, tempel).
3. Tambah berkas Script baru bernama **Fitur**, tempel isi `PinaraK_Fitur.gs`. Simpan (Ctrl+S).
4. Deploy > Manage deployments > pensil > Version: **New version** > Deploy. Alamat `/exec` tidak berubah.
5. Berkas Index.html di proyek Apps Script tidak dipakai lagi dan boleh dihapus.

## 2. Google Sheet
1. Muat ulang Sheet, lalu menu **PinaraK > Perbarui struktur Sheet** (menambah tab Agenda, Catatan, Rencana, Produk, Referensi, Laporan_Arsip, kolom baru, dan pilihan Mode UJI).
2. Menu **PinaraK > Rapikan tampilan Sheet** (warna dan tata letak; isi data tidak berubah).
3. Di tab Pengaturan, ubah **Mode** menjadi **UJI** untuk mencoba tanpa akses Meta.

## 3. Aplikasi (GitHub Pages)
1. Ekstrak `pinarak-app-v16.zip`.
2. Di repositori GitHub: Add file > Upload files, pilih semua berkas hasil ekstrak (timpa yang lama), Commit changes.
3. Tunggu proses build selesai, lalu buka alamat situsnya. Di layar masuk ada tulisan **PinaraK web v16**.

## 4. Mencoba tanpa Meta
- Menu **PinaraK > Isi contoh lengkap Tahap 1 (agenda, insight, laporan)** mengisi sekaligus: agenda, catatan kantor, kartu produk, referensi, data insight, serta DM dan konten contoh. Dengan itu Beranda, Konten, dan semua tab Laporan (mingguan, bulanan, catatan) langsung berisi. Aman dijalankan ulang.
- Untuk menghapusnya: **PinaraK > Hapus contoh Tahap 1**. Data insight asli tidak ikut terhapus.
- Di aplikasi: form insight punya tombol **Isi contoh angka**, dan form agenda punya **Pakai contoh**.
- Dengan Mode UJI: menyetujui balasan DM dan auto post hanya simulasi, tidak ada yang terkirim ke Instagram.
- AI (opsional): isi Script Property `AI_API_KEY`. Tanpa itu, rencana, evaluasi, dan pembacaan agenda memakai cadangan otomatis.

## 5. Menyambung Meta (terakhir)
1. Pastikan penerima DM (Cloudflare Worker) aktif, token `IG_TOKEN_akun_1` terisi di Script Properties, dan `id_ig` terisi di tab Akun.
2. Uji dulu: kirim DM dari akun pelanggan biasa ke nadheera.luxury, lalu cek apakah muncul di Inbox.
3. Hanya jika DM masuk, ubah Mode ke **KIRIM**. Nyalakan **Posting otomatis** terakhir, setelah satu uji posting berhasil.

## Status konten
- Status sekarang hanya empat: **Draf**, **Terjadwal**, **Tayang**, **Batal**. Konten lama berstatus Ide, Siapkan (Brief), Dikerjakan (Produksi), dan Periksa (Review) otomatis ditampilkan sebagai Draf. Status Siap ditampilkan sebagai Terjadwal. Data di Sheet tidak diubah.
- Setelah menempel `PinaraK_Code.gs` dan `PinaraK_Fitur.gs`, jalankan sekali **PinaraK > Perbarui struktur Sheet** agar dropdown status di kolom Konten ikut menjadi empat pilihan.

## Kecepatan buka
- Server: tempel ulang `PinaraK_Api.gs` dan `PinaraK_Fitur.gs`, lalu Deploy > New version. Pembukaan app sekarang memuat Beranda dan Inbox lewat dua permintaan yang berjalan bersamaan.
- Aplikasi: setelah v15 terpasang, cangkang app dibuka langsung dari simpanan HP dan disegarkan di latar. Versi baru tetap diumumkan lewat banner.

## Banner pembaruan
- Setiap kali kamu mengunggah versi baru ke GitHub, aplikasi yang sudah terpasang di HP menampilkan banner **Versi baru tersedia** di atas Beranda. Ketuk **Perbarui** dan aplikasi memuat ulang dengan versi terbaru. Kamu tidak perlu menghapus atau memasang ulang ikon di layar utama.
- Pertama kali memasang v14, banner ini bisa muncul sekali. Ketuk Perbarui saja.

## Tema warna
- Bawaan: **hijau** (warna PinaraK). Untuk tema **pink** ala Syifa Studio, buka `config.js` di repositori GitHub dan ubah `TEMA: 'hijau'` menjadi `TEMA: 'pink'`, lalu simpan. Muat ulang aplikasi (di HP, tutup dan buka lagi).
- Kalau `config.js` tertimpa saat mengunggah zip baru, ulangi pengaturan itu.

## Catatan tampilan
- Aplikasi hanya memakai akun Instagram **nadheera.luxury** (diambil dari tab Akun berdasarkan handle-nya). Baris akun lain di tab Akun tidak ditampilkan; hapus sendiri di Sheet bila tidak dipakai.
- Konten cukup diisi caption, tanggal, dan jam. Judul diambil otomatis dari baris pertama caption. Platform, status, hashtag, URL media, dan posting otomatis ada di bagian **Pengaturan posting**.
- Link postingan: terisi otomatis bila terbit lewat posting otomatis. Untuk posting manual, tempel linknya di form konten setelah tayang, atau biarkan kosong.

## Catatan
- Pengujian dilakukan dengan tiruan Google Sheet dan browser simulasi. Belum diuji di Apps Script, Meta, dan HP aslimu.
- Kalender momen berisi hari nasional dan tanggal belanja. Tanggal hari besar keagamaan yang berubah tiap tahun ditambahkan lewat Agenda.
