# PinaraK Tahap 1: panduan pasang

## 1. Server (Apps Script)
1. Buka proyek Apps Script PinaraK.
2. Ganti seluruh isi **Code.gs** dengan `PinaraK_Code.gs`, dan seluruh isi **Api.gs** dengan `PinaraK_Api.gs` (Ctrl+A, hapus, tempel).
3. Tambah berkas Script baru bernama **Fitur**, tempel isi `PinaraK_Fitur.gs`. Simpan (Ctrl+S).
4. Deploy > Manage deployments > pensil > Version: **New version** > Deploy. Alamat `/exec` tidak berubah.
5. Berkas Index.html di proyek Apps Script tidak dipakai lagi dan boleh dihapus.

## 2. Google Sheet
1. Muat ulang Sheet, lalu menu **PinaraK > Perbarui struktur Sheet** (menambah tab Agenda, Catatan, Rencana, Produk, Referensi, Laporan_Arsip dan kolom baru).
2. Menu **PinaraK > Rapikan tampilan Sheet** (warna dan tata letak; isi data tidak berubah).
3. Di tab Pengaturan, ubah **Mode** menjadi **UJI** untuk mencoba tanpa akses Meta.

## 3. Aplikasi (GitHub Pages)
1. Ekstrak `pinarak-app-v10.zip`.
2. Di repositori GitHub: Add file > Upload files, pilih semua berkas hasil ekstrak (timpa yang lama), Commit changes.
3. Tunggu proses build selesai, lalu buka alamat situsnya. Di layar masuk ada tulisan **PinaraK web v10**.

## 4. Mencoba tanpa Meta
- Menu **PinaraK > Isi data contoh (preview)** dan **Isi data insight nadheera.luxury** memberi data untuk dicoba.
- Dengan Mode UJI: menyetujui balasan DM dan auto post hanya simulasi, tidak ada yang terkirim ke Instagram.
- AI (opsional): isi Script Property `AI_API_KEY`. Tanpa itu, rencana, evaluasi, dan pembacaan agenda memakai cadangan otomatis.

## 5. Menyambung Meta (terakhir)
1. Pastikan penerima DM (Cloudflare Worker) aktif, token `IG_TOKEN_akun_1` terisi di Script Properties, dan `id_ig` terisi di tab Akun.
2. Uji dulu: kirim DM dari akun pelanggan biasa ke nadheera.luxury, lalu cek apakah muncul di Inbox.
3. Hanya jika DM masuk, ubah Mode ke **KIRIM**. Nyalakan **Posting otomatis** terakhir, setelah satu uji posting berhasil.

## Catatan
- Pengujian dilakukan dengan tiruan Google Sheet dan browser simulasi. Belum diuji di Apps Script, Meta, dan HP aslimu.
- Kalender momen berisi hari nasional dan tanggal belanja. Tanggal hari besar keagamaan yang berubah tiap tahun ditambahkan lewat Agenda.
