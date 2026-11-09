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
1. Ekstrak `pinarak-app-v29.zip`.
2. Di repositori GitHub: Add file > Upload files, pilih semua berkas hasil ekstrak (timpa yang lama), Commit changes.
3. Tunggu proses build selesai, lalu buka alamat situsnya. Di layar masuk ada tulisan **PinaraK web v29**.

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

## Unggah foto dan video dari HP atau komputer
Di form konten ada tombol **Unggah foto atau video**. Filenya disimpan di Cloudinary dan link publiknya otomatis masuk ke kolom media, siap dipakai posting otomatis. Foto diubah ke JPEG (syarat Instagram), video MP4 atau MOV tetap. Bisa beberapa file sekaligus (maksimal 10). Link manual, termasuk Google Drive, tetap bisa ditempel di kolom di bawahnya.

Cara mengaktifkan (sekali saja):
1. Daftar gratis di cloudinary.com (tanpa kartu kredit). Di Dashboard catat **Cloud name**, **API Key**, dan **API Secret**.
2. Di Apps Script buka Project Settings > Script Properties, lalu tambahkan tiga isian: `CLOUDINARY_CLOUD` (Cloud name), `CLOUDINARY_KEY` (API Key), `CLOUDINARY_SECRET` (API Secret).
3. Tempel ulang `PinaraK_Api.gs`, lalu Deploy > New version.
4. Unggah isi `pinarak-app-v29.zip` ke GitHub, lalu ketuk Perbarui di aplikasi.

Catatan:
- API Secret hanya tersimpan di Apps Script. Aplikasi hanya menerima tanda tangan sekali pakai, dan hanya perangkat yang sudah masuk yang bisa memintanya.
- Paket gratis Cloudinary biasanya membatasi foto 10 MB dan video 100 MB per file. Kalau terlalu besar, aplikasi menampilkan pesannya. Kuota penyimpanan bisa penuh; hapus file lama sesekali lewat folder `pinarak` di Cloudinary.
- Link hasil unggahan bersifat publik (Instagram perlu mengambilnya), tetapi namanya acak dan tidak bisa ditebak.

## Masuk dan layar pembuka
- Masuk dengan kode akses cukup **sekali per perangkat**. Sesi berlaku setahun dan diperpanjang otomatis setiap kali aplikasi dipakai, jadi perangkat yang rutin dipakai tidak akan diminta masuk lagi. Setelah itu aplikasi langsung membuka layar pembuka lalu Beranda.
- Untuk Apps Script: tempel ulang `PinaraK_Api.gs`, lalu Deploy > New version (supaya sesi bergulir aktif).
- **Tautan masuk pribadi** (tanpa mengetik kode): buka alamat aplikasimu dengan tambahan `#k=KODEAKSES`, misalnya `https://nama.github.io/pinarak/#k=kodemu`. Aplikasi masuk sendiri dan kode langsung dihapus dari kolom alamat. Simpan sebagai bookmark di perangkatmu sendiri dan jangan dibagikan, karena tautan itu berisi kode akses. Kalau kamu mengganti kode akses, tautannya tidak berlaku lagi.
- Layar pembuka: logo bergerak, salam sesuai jam, dan tagline. Tampil minimal 2 detik, ketuk layar untuk melewati, dan **tidak pernah lebih dari 5 detik** (bisa diubah lewat `SPLASH_MAKS` di `config.js`, 2 sampai 7). Kalau aplikasi dibuka lagi dalam 2 menit, layar pembuka dilewati.
- Aplikasi sengaja tidak dibuat terbuka tanpa kode sama sekali: alamat situs dan alamat server bersifat publik, sedangkan isinya pesan pribadi pelanggan dan kemampuan membalas dari akun nadheera.luxury.

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

## Unggah foto dan video ke Google Drive (pilihan tanpa akun baru)
1. Tempel `PinaraK_Api.gs` dan `PinaraK_Code.gs` terbaru di Apps Script, simpan.
2. Di Script Properties tambahkan `UPLOAD_PROVIDER` dengan nilai `DRIVE`.
3. Muat ulang Sheet, lalu menu **PinaraK > Izinkan Google Drive**. Saat Google meminta izin: Lanjutan, Buka (tidak aman), Izinkan.
4. **Deploy > Manage deployments > pensil > New version > Deploy**. Langkah ini wajib supaya aplikasi web memakai izin Drive.
5. Unggah isi zip v19 ke GitHub, lalu ketuk **Perbarui** di aplikasi.
6. Di form konten, ketuk **Unggah foto atau video**. File disimpan di folder **PinaraK Media** di Drive-mu dengan nama acak. Foto otomatis dikecilkan (maks 2048 px) dan dijadikan JPEG; video MP4 atau MOV maksimal 200 MB.
7. Uji linknya di jendela incognito: harus langsung mengunduh file, bukan menampilkan halaman.
Media lama dibersihkan lewat **PinaraK > Bersihkan media Drive lebih dari 60 hari** (jalankan hanya bila kontennya sudah terbit).

## Posting otomatis tanpa persetujuan terpisah (v20)
- Di form konten, centang **Terbitkan otomatis ke Instagram**, isi caption, tanggal, jam, dan media, lalu ketuk **Simpan**. Konten langsung masuk antrean dan terbit pada jam jadwal. Tombol Setujui sudah dihapus.
- Mencentang kotak itu otomatis mengubah Status dari Draf ke Terjadwal. **Status Draf tidak pernah terbit sendiri**; itu cara menunda.
- Kalau pemeriksaan gagal (misalnya link media tidak bisa dibuka), konten tetap tersimpan, formulir tetap terbuka, dan alasannya ditampilkan. Perbaiki lalu Simpan lagi.
- Jam di formulir kini selalu mengikuti jadwal yang tersimpan (tidak kembali ke 19.00).

## Tanggal dan jam kosong sampai kamu isi (v21)
- Di form konten baru, kolom **Tanggal** dan **Jam** kosong. Tidak ada lagi jam bawaan 19.00.
- Isi keduanya sekaligus, atau kosongkan keduanya. Konten tanpa jadwal tersimpan sebagai draf dan muncul di tab **Daftar**, kelompok **Tanpa jadwal**.
- **Terbitkan otomatis** wajib punya tanggal dan jam.
- Untuk konten yang sudah punya jadwal, jam di formulir selalu mengikuti jadwal yang tersimpan.

## Progres posting jelas dan konten tayang dikunci (v22)
- Chip di kartu konten: **Antre** (menunggu jam), **Memproses**, **Tayang**, **Gagal terbit**, dan **Simulasi** (Mode Uji).
- Konten yang sudah tayang **dikunci**: caption, jadwal, media, dan pengaturan tidak bisa diubah. Hanya link postingan yang boleh diisi. Konten yang cuma ditandai tayang manual punya tombol "Salah tandai? Kembalikan ke Terjadwal".
- Mode Uji tidak lagi mengubah status jadi Tayang. Statusnya Simulasi, jadi tidak membingungkan.
- Perlu: tempel `PinaraK_Code.gs` dan `PinaraK_Api.gs` terbaru, lalu Deploy New version.

## Form posting yang sederhana (v23)
Satu layar, empat langkah: **1. Foto atau video**, **2. Caption** (hashtag ditulis di sini), **3. Jenis posting** (Reels, Feed, Story; terisi otomatis dari media), **4. Kapan terbit?** (Jadwalkan atau Sekarang). Dua tombol: **Jadwalkan posting** (berubah menjadi **Posting sekarang** bila memilih Sekarang) dan **Simpan sebagai draf**.
- Tidak ada lagi kotak centang, dropdown status, kolom hashtag, atau Pengaturan posting. Link media sendiri dilipat di bawah tombol unggah.
- Satu kalimat di atas tombol menjelaskan kapan dan di akun mana posting akan terbit.
- Konten yang dijadwalkan punya kotak hijau; yang gagal punya kotak merah dengan alasannya dan tombol **Coba terbitkan lagi**; Mode Uji punya catatan kuning.
- Kalau pemeriksaan gagal saat menjadwalkan, konten disimpan sebagai **draf** dan alasannya ditampilkan, jadi tidak pernah setengah terjadwal.
- Perlu: tempel `PinaraK_Api.gs` terbaru, lalu Deploy New version.

## Laporan DM, unduh PDF (v24)
Di tab **Laporan**, ketuk **Laporan DM · unduh PDF**. Pilih **Satu hari** atau **Rentang tanggal** (maksimal 93 hari), pilih akun, lalu **Unduh PDF**.
- Yang dicatat: **waktu DM masuk** (bukan waktu dibalas), akun pengirim, dan isi DM. Balasan kita dan pesan echo tidak ikut.
- Urutan dari DM paling awal. Untuk rentang, dikelompokkan per hari beserta jumlahnya.
- Isi pesan yang lebih dari 90 hari tampil sebagai [dihapus] (pengaturan Retensi isi pesan).
- Maksimal 2000 DM per PDF. Perlu: tempel `PinaraK_Api.gs` terbaru, lalu Deploy New version.

## Insight Instagram otomatis dan laporan PDF (v25)
- Tab **Laporan**: kalau data insight minggu itu belum ada, ketuk **Ambil dari Instagram**. Angka diambil dan disimpan langsung. Di layar **Isi data insight**, tombol yang sama hanya mengisi kolom (belum menyimpan) supaya bisa diperiksa dulu.
- Yang belum tersedia dari Instagram (kunjungan profil, ketukan tautan bio, siaran langsung) diisi sendiri. Pengikut bersih dihitung dari data minggu sebelumnya.
- Otomatis: Rabu 08.00 mengambil minggu lalu (Senin sampai Minggu); tanggal 3 jam 08.00 mengambil 30 hari yang berakhir di akhir bulan lalu. Email laporan digeser ke Rabu 10.00 dan tanggal 3 jam 10.00.
- **Periksa dan bagikan**: tombol **Unduh PDF** memakai teks laporan yang sedang tampil, termasuk yang kamu edit.
- Perlu: tempel `PinaraK_Api.gs` dan `PinaraK_Code.gs` terbaru, Deploy New version, lalu jalankan menu **Pasang pemicu otomatis**. Cek izin: menu **Tes insight Instagram**.

## Perbaikan tampilan hasil audit (v26)
- Semua kontrol minimal 44 px, semua teks minimal 12 px, strip kalender menampilkan tujuh hari, dan teks tidak lagi terpotong titik tiga.
- Inbox: empat tab berhitung. Percakapan DM: akun tampil @handle, jam tiap pesan, dan tombol Salin balasan di mode Draf.
- Konten: judul Konten, filter Daftar satu baris plus Muat lebih banyak, dan papan minggu tujuh kolom di desktop.
- Beranda: baris status koneksi dan penanda prioritas. Lembar Tambah tanpa emoji. Pengaturan lebih lengkap dan teks lama soal persetujuan dihapus.
- Laporan DM per tanggal (PDF) pindah ke dalam kartu DM.
- Perlu: tempel `PinaraK_Api.gs` terbaru (menambah jam kerja dan status Telegram ke aplikasi), lalu Deploy New version.

## Laporan DM dan sosmed di dua tab, kesimpulan topik DM (v27)
- Tab Laporan, **Mingguan** dan **Bulanan**, sama-sama menampilkan kartu **Sosmed** dan kartu **DM**.
- Kartu DM: Total DM, Dibalas, Median balas, **Rata-rata per hari**, **Pesan per percakapan**, Topik terbanyak, kotak **Kesimpulan**, dan grafik **Topik pesan terbanyak**.
- Topik dikelompokkan dari kata kunci di pesan pelanggan (bukan AI), jadi berlaku juga untuk DM hasil impor.
- Perlu: tempel `PinaraK_Code.gs`, `PinaraK_Fitur.gs`, dan `PinaraK_Api.gs` terbaru, lalu Deploy New version.

## Laporan DM berdasarkan akun baru (v28)
- DM yang dihitung dan didaftar adalah **DM pertama dari akun yang baru pertama kali mengirim pesan** pada periode itu. Pesan lanjutan dari akun yang sama tidak dihitung sebagai DM baru.
- Kartu DM: kotak **Akun baru**, Dibalas, Median balas, Rata-rata per hari, **Pesan per akun**, dan Topik terbanyak, ditambah kesimpulan.
- PDF **Laporan DM Akun Baru**: satu baris per akun baru dengan kolom Waktu masuk, Akun pengirim, DM pertama, Topik, dan Dibalas.
- Akun lama yang mengirim DM lagi disebut terpisah di kesimpulan.

## Laporan DM seperti catatan manual (v29)
- Satu baris per **DM yang bertanya**: akun baru (DM pertama) dan **akun lama yang bertanya hal baru** (jeda lebih dari 12 jam, ada topik). Ucapan terima kasih dan balasan singkat tidak dihitung.
- PDF **Laporan DM Instagram**: kolom Tanggal, Nama akun, Isi chat (ringkasan, misalnya "Tanya harga dan ready atau stok"), Produk, Admin, Akun (Baru atau Lama), dan Dibalas.
- Produk dan Admin diambil dari tab Percakapan (kolom `produk` dan kolom `admin` yang ditambahkan sendiri) serta nama di tab Produk.
- Kartu DM: kotak **DM akun lama** menggantikan Pesan per akun.
