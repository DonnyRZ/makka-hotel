# Design Specification - Mecca Boutique Hotel & Restaurant

## 1. Tujuan Dokumen

Dokumen ini menjadi pedoman desain UI/UX untuk website publik Mecca Boutique Hotel & Restaurant. Pedoman ini menerjemahkan identitas hotel, isi company profile, scope website, dan referensi visual ICCU Uzbekistan menjadi sistem desain yang konsisten serta dapat digunakan pada seluruh halaman.

Dokumen ini membahas arah visual, tata letak, komponen, perilaku responsif, penggunaan foto, aksesibilitas, dan panduan desain setiap halaman. Dokumen ini tidak membahas tech stack, database, API, CMS, atau detail implementasi backend.

## 2. Sasaran Desain

Website harus:

- Memperkenalkan Mecca sebagai boutique hotel dengan identitas modern Islamic-Uzbek.
- Menampilkan pengalaman menginap, kuliner, rooftop, dan acara secara visual dan meyakinkan.
- Membangun persepsi premium tanpa terasa kaku atau terlalu institusional.
- Memberikan jalur yang jelas menuju reservasi atau kontak.
- Menjelaskan keunikan 30 kamar yang terinspirasi oleh 30 Juz Al-Qur'an secara elegan dan tidak berlebihan.
- Mengomunikasikan hospitality yang hangat, tenang, inklusif, dan profesional.
- Menjaga konsistensi pengalaman pada desktop, tablet, dan mobile.

## 3. Sumber Acuan

Desain mengacu pada:

- Company profile Mecca Boutique Hotel & Restaurant sebagai sumber utama identitas, fasilitas, dan konten bisnis.
- `1. Scope.md` sebagai sumber struktur halaman dan fitur website.
- Website ICCU Uzbekistan sebagai referensi arah visual: warna hijau gelap, aksen emas, tipografi serif, pola geometris Islam, komposisi editorial, dan bentuk pointed arch.
- Koleksi foto dan render hotel yang tersedia sebagai sumber visual utama.

Referensi ICCU digunakan sebagai inspirasi, bukan untuk disalin. Logo, ilustrasi, pola, komposisi, dan elemen visual milik ICCU tidak boleh digunakan secara langsung.

## 4. Arah Kreatif

### 4.1 Konsep Utama

**Modern Islamic Boutique Hospitality**

Desain menggabungkan:

- Kemewahan yang tenang.
- Kehangatan pelayanan hotel.
- Detail arsitektur Islamic-Uzbek.
- Presentasi editorial yang modern.
- Fotografi sebagai elemen komunikasi utama.

Hasil akhir harus terasa lebih hangat dan mengundang dibanding referensi ICCU. Website bukan situs institusi atau museum; pengalaman visual harus mendorong pengunjung membayangkan dirinya menginap, bersantap, menikmati rooftop, atau mengadakan acara di Mecca.

### 4.2 Kepribadian Visual

- Premium, bukan mencolok.
- Spiritual, bukan menggurui.
- Berbudaya, bukan kuno.
- Hangat, bukan terlalu gelap.
- Elegan, bukan dekoratif berlebihan.
- Informatif, tetapi tetap lapang.

### 4.3 Prinsip Desain

1. **Photography first** - foto hotel menjadi bukti utama pengalaman yang ditawarkan.
2. **Quiet luxury** - gunakan ruang kosong, proporsi, material visual, dan tipografi untuk membangun kesan premium.
3. **One signature motif** - pointed arch menjadi bentuk khas, tetapi tidak digunakan pada semua elemen.
4. **Warm darkness** - hijau gelap tetap dominan, diseimbangkan dengan ivory, beige, kayu, dan foto bernuansa hangat.
5. **Clear invitation** - setiap halaman memiliki ajakan tindakan yang jelas tanpa terasa agresif.
6. **Cultural restraint** - ornamen Islam digunakan secara halus dan kontekstual.

## 5. Sistem Warna

### 5.1 Palet Utama

| Token | Warna | Penggunaan |
| --- | --- | --- |
| `Forest 950` | `#04140F` | Latar paling gelap, hero, header, footer |
| `Forest 900` | `#07211A` | Latar section utama |
| `Forest 850` | `#08241C` | Surface atau section bertingkat |
| `Forest 800` | `#0A2A22` | Card gelap dan panel informasi |
| `Gold 500` | `#C9A24A` | CTA utama, garis aksen, ikon penting |
| `Gold 300` | `#DFC77C` | Hover, highlight lembut, detail dekoratif |
| `Ivory 100` | `#F0E8D8` | Latar terang dan panel editorial |
| `Ivory 200` | `#E5E0D8` | Teks utama pada latar gelap |
| `Sand 300` | `#D8CCB5` | Latar netral, border ringan, metadata |
| `Sage 300` | `#B7C3AE` | Teks sekunder pada latar gelap |
| `White` | `#F9F8F8` | Teks dengan kontras tertinggi |
| `Ink 900` | `#17211D` | Teks pada latar terang |
| `Error` | `#B64B45` | Pesan kesalahan form |
| `Success` | `#4F8067` | Status berhasil atau tersedia |

### 5.2 Proporsi Penggunaan

Komposisi warna yang disarankan:

- 50-60% hijau gelap.
- 20-25% foto dan video.
- 10-15% ivory atau warm neutral.
- Maksimal 5-8% emas.

Emas berfungsi sebagai aksen, bukan warna latar dominan. Hindari menempatkan teks panjang berwarna emas karena keterbacaan akan menurun.

### 5.3 Kombinasi yang Disarankan

- `Forest 950` + `Ivory 200` untuk hero dan footer.
- `Forest 900` + `White` untuk section utama.
- `Ivory 100` + `Ink 900` untuk section yang lebih hangat dan informatif.
- `Forest 800` + `Sage 300` untuk cards dan metadata.
- `Gold 500` + `Forest 950` untuk tombol utama.

### 5.4 Penggunaan Latar

Halaman tidak boleh seluruhnya menggunakan satu hijau gelap yang sama. Variasikan ritme visual melalui:

- Section hero gelap dengan foto.
- Section hijau gelap solid.
- Section hijau sedikit lebih terang.
- Section ivory untuk informasi yang membutuhkan keterbacaan tinggi.
- Section full-bleed photography sebagai jeda visual.

## 6. Tipografi

### 6.1 Font Utama

- **Display dan heading:** Cormorant Garamond.
- **Body, navigasi, label, dan tombol:** Manrope.

Jika font tersebut tidak tersedia, fallback yang disarankan:

- Heading: Georgia, `Times New Roman`, serif.
- Body: Inter, Arial, sans-serif.

### 6.2 Karakter Penggunaan

- Serif digunakan untuk headline, pernyataan utama, nama fasilitas, dan angka besar.
- Sans-serif digunakan untuk body copy, menu, tombol, label, metadata, dan form.
- Italic serif boleh digunakan secara terbatas untuk kutipan atau aksen editorial.
- Huruf kapital penuh hanya digunakan untuk eyebrow, label singkat, atau navigasi kecil.

### 6.3 Skala Tipografi

| Gaya | Desktop | Mobile | Weight | Line height |
| --- | --- | --- | --- | --- |
| Display XL | 72 px | 44 px | 600 | 1.00-1.08 |
| Display L | 56 px | 38 px | 600 | 1.05-1.12 |
| H1 | 48 px | 36 px | 600 | 1.10-1.18 |
| H2 | 40 px | 30 px | 600 | 1.15-1.22 |
| H3 | 28 px | 24 px | 600 | 1.20-1.30 |
| H4 | 22 px | 20 px | 600 | 1.25-1.35 |
| Body L | 18 px | 17 px | 400 | 1.65 |
| Body | 16 px | 16 px | 400 | 1.65 |
| Small | 14 px | 14 px | 400-500 | 1.50 |
| Eyebrow | 12 px | 11 px | 600 | 1.40 |
| Button | 14 px | 14 px | 600 | 1.00 |

Headline hero maksimal dua hingga tiga baris. Panjang body copy idealnya 55-75 karakter per baris.

## 7. Grid, Container, dan Spacing

### 7.1 Container

- Lebar maksimum konten utama: 1440 px.
- Lebar konten nyaman untuk desktop: 76-84% viewport.
- Padding horizontal desktop: 64-96 px.
- Padding horizontal tablet: 32-48 px.
- Padding horizontal mobile: 20-24 px.
- Teks panjang memiliki lebar maksimum 680-760 px.

### 7.2 Grid

- Desktop: 12 kolom.
- Tablet: 8 kolom.
- Mobile: 4 kolom.
- Gutter desktop: 24-32 px.
- Gutter tablet: 20-24 px.
- Gutter mobile: 16 px.

### 7.3 Spacing Scale

Gunakan skala konsisten: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120, dan 160 px.

- Jarak antar-elemen kecil: 8-16 px.
- Jarak isi card: 20-32 px.
- Jarak heading ke body: 16-24 px.
- Jarak antarblok dalam satu section: 32-64 px.
- Padding vertikal section desktop: 120-160 px.
- Padding vertikal section tablet: 88-112 px.
- Padding vertikal section mobile: 64-80 px.

### 7.4 Ritme Komposisi

- Hindari semua section menggunakan layout dua kolom yang sama.
- Selang-selingkan full-width image, editorial split, cards, statistics, dan gallery mosaic.
- Gunakan alignment asimetris yang tetap terkontrol.
- Berikan ruang kosong besar di sekitar pesan utama.

## 8. Bentuk, Border, dan Elevasi

### 8.1 Pointed Arch

Pointed arch adalah bentuk signature untuk:

- Foto hero sekunder.
- Satu atau dua foto unggulan per halaman.
- Card pengalaman utama.
- Frame dekoratif pada cerita hotel.

Pointed arch tidak digunakan untuk tombol, form, semua thumbnail, atau seluruh card. Penggunaan berlebihan akan membuat desain terasa tematik dan kehilangan kesan modern.

### 8.2 Corner Radius

- Card standar: 10-12 px.
- Panel informasi: 8-10 px.
- Input: 8 px.
- Tombol pill: radius penuh.
- Thumbnail kecil: 6-8 px.

### 8.3 Border

- Border gelap: putih dengan opacity 10-14%.
- Border terang: `#D8CCB5` atau hitam dengan opacity 10%.
- Border emas hanya untuk fokus, status aktif, atau elemen khusus.
- Ketebalan umum: 1 px.

### 8.4 Shadow

Gunakan shadow secara sangat ringan. Pada tema gelap, depth lebih baik dibangun melalui perbedaan warna surface dan border. Shadow dapat digunakan pada:

- Header sticky setelah scroll.
- Card terang di atas foto atau latar kontras.
- Floating contact action pada mobile.

## 9. Ornamen dan Ikonografi

### 9.1 Pola Geometris

- Gunakan pola geometris Islam yang dibuat khusus untuk Mecca.
- Opacity ideal: 2-5%.
- Cocok digunakan pada hero, transisi section, atau footer.
- Pola tidak boleh mengganggu foto atau keterbacaan teks.
- Hindari motif yang terlalu detail pada layar kecil.

### 9.2 Rosette dan Garis Aksen

Section label dapat menggunakan urutan:

`rosette kecil - garis pendek - eyebrow uppercase`

Gunakan sebagai penanda visual yang konsisten, bukan dekorasi pada setiap teks.

### 9.3 Ikon

- Gunakan ikon outline sederhana dengan ketebalan seragam.
- Sudut ikon dapat sedikit membulat agar terasa ramah.
- Ukuran umum: 18-24 px.
- Ikon fasilitas tidak boleh lebih dominan daripada nama fasilitas.
- Hindari campuran gaya ikon filled, outline, dan ilustratif dalam satu halaman.

## 10. Fotografi, Video, dan Render

### 10.1 Arah Fotografi

Foto harus mengutamakan:

- Kehangatan cahaya interior.
- Detail material, ukiran, tekstur, dan ornamen.
- Ruang yang rapi dan siap digunakan tamu.
- Komposisi luas yang menunjukkan konteks ruang.
- Momen golden hour untuk exterior dan rooftop.
- Sudut yang memberi rasa skala untuk restoran dan event.

### 10.2 Kategori Visual Website

- Exterior hotel.
- Lobby dan common areas.
- Rooms dan room details.
- Indonesian Restaurant.
- Italian Restaurant.
- Rooftop Cafe & Bar.
- Event dan private function spaces.
- Detail interior dan hospitality.
- Surrounding views atau view dari hotel jika relevan.

Layout plan dan kategori galeri arsitektur tidak ditampilkan sebagai konten publik.

### 10.3 Rasio Foto

- Hero desktop: 16:9 atau crop sinematik 2:1.
- Hero mobile: 4:5 atau 3:4.
- Card rooms/dining: 4:3.
- Card experience: 3:4 atau pointed arch portrait.
- Gallery featured: 4:3 atau 16:9.
- Gallery supporting: 1:1, 3:4, dan 4:3 secara terkontrol.

### 10.4 Color Grading

- Pertahankan warna material asli.
- Gunakan white balance hangat dan konsisten.
- Hindari saturasi emas atau kuning yang berlebihan.
- Foto malam tidak boleh kehilangan detail pada shadow.
- Foto dengan temperatur warna yang sangat berbeda tidak ditempatkan berdampingan tanpa penyesuaian.

### 10.5 Overlay

- Overlay hero: hitam-hijau 45-55% tergantung kontras foto.
- Overlay card dengan teks di atas foto: 35-60%, berbentuk gradient dari bawah.
- Selalu pastikan headline dan tombol terbaca pada seluruh breakpoint.

### 10.6 Render Konsep

Render yang belum merepresentasikan kondisi aktual wajib diberi label seperti **Concept Render** atau **Design Visualization**. Label harus terlihat tetapi tidak mengganggu presentasi visual.

### 10.7 Video

Jika video tersedia:

- Gunakan video pendek tanpa suara sebagai background hero hanya jika kualitasnya tinggi.
- Sediakan poster image sebagai fallback.
- Jangan autoplay dengan suara.
- Hindari video berat pada mobile; prioritaskan performa dan opsi reduced motion.

## 11. Komponen Global

### 11.1 Announcement Bar

Opsional dan hanya digunakan untuk informasi penting seperti soft opening, status reservasi, atau pengumuman khusus.

- Tinggi: 30-36 px.
- Latar: `Gold 500` atau `Ivory 100`.
- Teks: `Forest 950`, 12-13 px.
- Maksimal satu kalimat dan satu link.
- Dapat ditutup jika sifatnya promosi sementara.

### 11.2 Header dan Navigasi

Header desktop:

- Logo di kiri.
- Navigasi utama di tengah atau kanan.
- Language selector jika bahasa website sudah dikonfirmasi.
- Tombol **Reserve** atau **Contact Us** sebagai CTA utama.
- Maksimal 6-7 item yang terlihat langsung.
- Subhalaman dapat dikelompokkan dalam dropdown sederhana.

Perilaku:

- Transparan di atas hero.
- Berubah menjadi `Forest 950` solid dengan border tipis setelah scroll.
- Sticky untuk mempermudah navigasi.
- Tinggi desktop: 80-92 px.
- Tinggi mobile: 64-72 px.

Struktur navigasi yang disarankan:

- Home
- Hotel
- Rooms
- Dining
- Experiences
- Gallery
- Contact
- Reserve

`Hotel` dapat menuju About. `Experiences` dapat mengelompokkan Rooftop serta Events.

### 11.3 Mobile Navigation

- Gunakan full-screen atau drawer menu.
- Tampilkan link dengan ukuran minimal 20 px.
- CTA reservasi tetap terlihat jelas.
- Language selector ditempatkan di bagian bawah menu.
- Drawer harus dapat ditutup dengan tombol, klik area luar, dan tombol Escape jika menggunakan keyboard.

### 11.4 Buttons

**Primary button**

- Latar `Gold 500`.
- Teks `Forest 950`.
- Tinggi 48-52 px.
- Padding horizontal 24-30 px.
- Bentuk pill.
- Hover: `Gold 300`, sedikit naik maksimal 2 px.

**Secondary button**

- Transparan.
- Border putih atau gold dengan opacity yang cukup.
- Teks menyesuaikan latar.
- Hover: surface transparan 8-12%.

**Text link**

- Teks dengan ikon panah.
- Underline atau garis emas muncul saat hover.

Semua CTA harus menggunakan kata kerja yang jelas, misalnya **Explore Rooms**, **View Dining**, **Plan Your Event**, **Get Directions**, atau **Contact Us**.

### 11.5 Section Heading

Anatomi:

- Eyebrow dengan rosette dan garis pendek.
- H2 serif.
- Deskripsi singkat maksimal dua hingga tiga baris.
- Link opsional di sisi kanan pada desktop.

Jangan membuat semua heading rata tengah. Gunakan rata kiri sebagai pola utama dan center alignment hanya pada section tertentu.

### 11.6 Room Card

Isi minimum:

- Foto utama.
- Nama atau tipe kamar.
- Luas rata-rata jika relevan.
- Bed type.
- View.
- Maksimal tiga fasilitas utama.
- CTA detail atau reservasi.

Desain:

- Foto rasio 4:3.
- Surface gelap atau ivory sesuai section.
- Informasi dipadatkan, tidak menyerupai tabel spesifikasi.
- Fitur spiritual seperti qibla marker dan prayer mat ditampilkan dengan bahasa yang elegan.

### 11.7 Dining Card

Isi minimum:

- Foto suasana atau hidangan.
- Nama venue.
- Jenis cuisine.
- Luas atau karakter venue bila relevan.
- Status 100% halal-certified pada level section atau intro, bukan badge berulang di setiap card.
- CTA untuk melihat detail atau melakukan inquiry.

### 11.8 Experience Card

Digunakan untuk rooftop dan acara.

- Gunakan foto portrait atau pointed arch.
- Judul dan satu deskripsi singkat.
- Detail penting dalam chips atau metadata.
- Hindari lebih dari empat baris teks pada card listing.

### 11.9 Facility Item

- Ikon outline.
- Nama fasilitas.
- Deskripsi satu kalimat jika diperlukan.
- Dapat menggunakan grid 3-4 kolom desktop dan 1-2 kolom mobile.

### 11.10 Statistics

Statistik utama dapat menampilkan:

- 30 Rooms.
- Inspired by 30 Juz.
- 3 Culinary Venues.
- Up to 500 Guests untuk event.

Gunakan angka serif besar, label sans-serif, dan divider tipis. Jangan membuat klaim tambahan yang tidak ada di company profile.

### 11.11 Gallery

- Gunakan curated mosaic atau bento grid.
- Satu gambar featured lebih besar daripada gambar lainnya.
- Filter hanya berdasarkan kategori yang memang memiliki cukup aset.
- Lightbox mendukung next, previous, close, keyboard, swipe, caption, dan image count.
- Lazy loading digunakan secara visual melalui placeholder yang tidak menyebabkan layout bergeser.

### 11.12 Testimonial atau Quote Card

Testimonials tidak digunakan kecuali tersedia kutipan asli dan izin publikasi. Sebagai pengganti, pola visual tersebut dapat digunakan untuk:

- Owner's Welcome.
- Hotel Philosophy.
- Brand statement.

Konten tidak boleh dibuat seolah-olah merupakan testimoni tamu jika sumbernya tidak tersedia.

### 11.13 Contact Panel

Panel kontak memuat hanya kanal yang sudah dikonfirmasi:

- Telepon.
- Email.
- Alamat.
- WhatsApp bila tersedia.
- Jam operasional bila relevan.
- Tombol directions.

Jika form digunakan, field dibuat sesingkat mungkin dan tidak meminta data yang tidak diperlukan.

### 11.14 Footer

Footer terdiri dari:

- Logo dan deskripsi singkat.
- Navigasi ringkas.
- Kontak.
- Social media yang valid.
- Language selector jika digunakan.
- Copyright.

Gunakan divider halus, ruang kosong yang cukup, dan hindari footer yang terlalu padat.

## 12. Spesifikasi Desain per Halaman

## 12.1 Home

Tujuan: memperkenalkan pengalaman Mecca secara menyeluruh dan mengarahkan pengunjung ke area utama.

Urutan section yang disarankan:

1. Hero full-screen dengan exterior atau visual hotel terbaik.
2. Intro brand dan positioning boutique hotel.
3. Statistik utama: 30 rooms, 30 Juz inspiration, culinary venues, event capacity.
4. Story singkat mengenai identitas modern Islamic-Uzbek.
5. Featured rooms.
6. Dining venues.
7. Rooftop highlight.
8. Events and private functions.
9. Curated gallery preview.
10. Location teaser dan CTA contact/reservation.

Karakter visual:

- Hero dramatis, tetapi copy ringkas.
- Section pertama setelah hero lebih hangat dengan latar ivory atau foto terang.
- Pointed arch digunakan pada brand story atau rooftop highlight.
- Hindari memasukkan seluruh detail dari halaman internal ke Home.

## 12.2 About the Hotel

Tujuan: menjelaskan cerita, filosofi, identitas, dan karakter pelayanan hotel.

Urutan section:

1. Internal hero dengan foto detail interior atau exterior.
2. Hotel introduction.
3. Cerita 30 kamar yang terinspirasi dari 30 Juz.
4. Identitas desain modern Islamic-Uzbek.
5. Hospitality philosophy.
6. Facilities and services.
7. Language support dan concierge information.
8. CTA menuju Rooms atau Contact.

Karakter visual:

- Editorial dan story-driven.
- Gunakan kombinasi teks besar, foto detail, dan ruang kosong.
- Jangan menampilkan klaim sejarah atau filosofi yang tidak didukung company profile.

## 12.3 Rooms & Accommodation

Tujuan: memperlihatkan kualitas kamar dan memberi informasi yang cukup untuk keputusan menginap.

Urutan section:

1. Hero kamar terbaik.
2. Ringkasan accommodation: 30 rooms, average 18 m2, queen bed.
3. Room listing atau room overview.
4. Room features: qibla marker, prayer mat, views, dan fasilitas terkait.
5. Gallery kamar dan detail interior.
6. Hotel facilities yang relevan bagi tamu.
7. CTA reservation atau inquiry.

Karakter visual:

- Lebih terang dan nyaman dibanding halaman Events.
- Foto tempat tidur, kamar mandi, detail furniture, dan view harus seimbang.
- Jika seluruh kamar memiliki spesifikasi yang sama, hindari membuat variasi tipe kamar yang tidak nyata.

## 12.4 Dining

Tujuan: memperkenalkan keseluruhan pengalaman kuliner 100% halal-certified.

Urutan section:

1. Hero dining.
2. Intro culinary experience dan halal positioning.
3. Indonesian Restaurant - 497 m2.
4. Italian Restaurant - 452 m2.
5. Food, ambience, dan interior gallery.
6. Inquiry atau reservation CTA jika kanalnya tersedia.

Karakter visual:

- Gunakan warna hangat, tekstur kayu, dan pencahayaan dining.
- Setiap venue mendapat blok editorial yang cukup besar, bukan card kecil saja.
- Rooftop Cafe & Bar dapat diberi teaser, tetapi detail utamanya berada di halaman Rooftop & Experiences.

## 12.5 Rooftop & Experiences

Tujuan: menonjolkan rooftop sebagai pengalaman dan destination tersendiri.

Urutan section:

1. Hero rooftop saat golden hour atau malam.
2. Intro Rooftop Cafe & Bar - 600.7 m2.
3. View dan ambience.
4. Seating atau area experience.
5. Curated rooftop gallery.
6. CTA inquiry atau visit.

Karakter visual:

- Sinematik dan immersive.
- Gunakan full-bleed photography lebih banyak.
- Transisi dari golden hour ke night ambience dapat digunakan sebagai ritme visual.
- Render harus diberi label jika belum menggambarkan kondisi aktual.

## 12.6 Events & Private Functions

Tujuan: memosisikan Mecca sebagai venue acara dan private function hingga 500 tamu.

Urutan section:

1. Hero event setup atau venue terbaik.
2. Intro kapasitas dan jenis acara.
3. Venue options atau area yang dapat digunakan.
4. Event capacity highlight - up to 500 guests.
5. Services atau support yang sudah terkonfirmasi.
6. Event gallery atau concept render.
7. Inquiry CTA.

Karakter visual:

- Formal tetapi tetap hangat.
- Fokus pada skala ruang, fleksibilitas, ambience, dan kemudahan inquiry.
- Jangan menjanjikan paket, peralatan, catering, atau layanan yang belum dikonfirmasi.

## 12.7 Gallery

Tujuan: menyediakan eksplorasi visual terkurasi tanpa membuat pengunjung menghadapi seluruh file foto mentah.

Kategori yang disarankan:

- All.
- Exterior.
- Rooms.
- Interiors.
- Dining.
- Rooftop.
- Events.
- Views.

Ketentuan:

- Pilih foto terbaik, bukan foto terbanyak.
- Hindari duplikasi sudut yang hampir sama.
- Jangan menampilkan layout plan.
- Jangan membuat kategori Architecture.
- Bedakan actual photography dan concept render.
- Gunakan lightbox yang mudah digunakan pada mobile.

## 12.8 Location & Contact

Tujuan: membantu pengunjung memahami lokasi serta menghubungi hotel dengan cepat.

Urutan section:

1. Hero atau page heading ringkas.
2. Alamat dan contact details.
3. Peta atau map embed.
4. Travel proximity: sekitar 30 menit dari airport dan 20 menit dari station, sesuai data company profile.
5. Contact form atau direct contact actions jika digunakan.
6. CTA directions dan reservation/contact.

Karakter visual:

- Informasi harus langsung terlihat dan mudah dipindai.
- Mobile memprioritaskan tap-to-call, WhatsApp jika tersedia, dan directions.
- Angka jarak waktu harus disajikan sebagai estimasi dan tidak digambarkan sebagai jaminan waktu tempuh.

## 13. Perilaku Responsif

### 13.1 Desktop Besar

- Gunakan ruang kosong secara aktif; jangan memperbesar semua teks dan gambar tanpa batas.
- Container tetap dibatasi maksimal 1440 px.
- Gallery dapat menggunakan 4 kolom atau bento layout.
- Split layout dapat memakai rasio 5:7 atau 6:6.

### 13.2 Tablet

- Navigasi dapat berubah menjadi menu ringkas jika item tidak muat.
- Grid 3-4 kolom berubah menjadi 2 kolom.
- Split layout dipertahankan jika keterbacaan masih baik; jika tidak, ditumpuk.
- Section padding dikurangi tanpa membuat halaman padat.

### 13.3 Mobile

- Semua informasi utama menjadi satu kolom.
- Hero minimal sekitar 75-90% tinggi viewport, bukan selalu 100%.
- Headline maksimal 3-4 baris.
- CTA utama dan sekunder dapat ditumpuk penuh jika ruang terbatas.
- Card carousel harus memperlihatkan sedikit card berikutnya sebagai affordance, atau gunakan scroll indicator.
- Tabel dihindari; ubah informasi menjadi stacked items.
- Target sentuh minimal 44 x 44 px.
- Floating contact action hanya digunakan jika tidak menutup konten.

## 14. Interaksi dan Motion

### 14.1 Prinsip Motion

- Halus, tenang, dan mendukung orientasi pengguna.
- Tidak menggunakan animasi dekoratif terus-menerus.
- Durasi umum 180-300 ms.
- Reveal section dapat menggunakan fade dan pergeseran 12-20 px.
- Parallax, jika digunakan, harus sangat ringan dan dinonaktifkan pada mobile atau reduced motion.

### 14.2 Hover State

- Card image dapat scale maksimal 1.03.
- Border atau aksen emas dapat menguat.
- Tombol dapat berubah warna dan bergerak maksimal 2 px.
- Text link menampilkan garis atau pergerakan ikon panah ringan.

### 14.3 Focus State

- Semua elemen interaktif memiliki focus ring yang jelas.
- Gunakan ring `Gold 300` atau warna kontras dengan offset 2-3 px.
- Focus tidak boleh dihilangkan hanya demi estetika.

### 14.4 Reduced Motion

Jika pengguna memilih reduced motion:

- Nonaktifkan parallax.
- Nonaktifkan autoplay background video.
- Kurangi transform dan gunakan pergantian opacity sederhana.

## 15. Aksesibilitas

- Target minimum mengikuti WCAG 2.2 level AA.
- Kontras body text minimal 4.5:1.
- Kontras teks besar minimal 3:1.
- Body text minimal 16 px.
- Semua gambar informatif memiliki alt text yang bermakna.
- Gambar dekoratif menggunakan alt kosong.
- Informasi tidak disampaikan melalui warna saja.
- Semua fungsi dapat digunakan dengan keyboard.
- Lightbox memiliki focus trap, tombol close, dan dukungan Escape.
- Form memiliki label yang terlihat, pesan error spesifik, dan status berhasil yang dapat dibaca assistive technology.
- Heading mengikuti hierarki H1, H2, H3 tanpa melompati struktur secara sembarangan.
- Carousel tidak bergerak otomatis tanpa kontrol yang jelas.
- Teks di atas foto selalu memiliki overlay yang cukup.

## 16. Panduan Konten UI

### 16.1 Tone of Voice

- Hangat dan penuh hormat.
- Percaya diri tanpa klaim berlebihan.
- Ringkas dan mudah dipindai.
- Mengutamakan manfaat bagi tamu.
- Istilah hospitality konsisten di seluruh halaman.

### 16.2 Panjang Konten

- Hero eyebrow: 2-5 kata.
- Hero headline: ideal 6-12 kata.
- Hero description: maksimal 2-3 baris.
- Card title: maksimal 1-2 baris.
- Card description: 20-45 kata.
- Section intro: 50-100 kata.
- Button: 1-4 kata.

### 16.3 Penulisan Data

- Gunakan format luas yang konsisten, misalnya `497 m2`, kecuali standar brand menentukan simbol `m²`.
- Kapasitas ditulis `Up to 500 guests` atau terjemahan setara.
- Informasi waktu tempuh ditulis sebagai estimasi.
- `100% halal-certified` hanya digunakan jika status dan wording tersebut telah disetujui untuk publikasi.
- Jangan membuat harga, paket, penghargaan, rating, atau testimoni tanpa sumber yang valid.

## 17. Kurasi Aset

### 17.1 Prioritas Pemilihan Foto

1. Fokus tajam dan resolusi tinggi.
2. Pencahayaan terbaik.
3. Komposisi bersih tanpa objek mengganggu.
4. Mewakili ruang secara akurat.
5. Tidak terlalu mirip dengan foto lain yang sudah dipilih.
6. Memiliki ruang untuk crop desktop dan mobile.

### 17.2 Jumlah Awal yang Disarankan

- Hero alternatives: 2-3 foto per halaman utama.
- Rooms: 8-12 foto terkurasi.
- Dining: 6-10 foto per venue jika tersedia.
- Rooftop: 10-15 foto yang menunjukkan waktu dan area berbeda.
- Events: 6-10 foto atau render terkurasi.
- Exterior dan common areas: 10-15 foto.
- Gallery publik total: lebih baik 40-70 foto unggulan daripada ratusan foto berulang.

### 17.3 Penamaan dan Metadata

Sebelum digunakan, setiap aset sebaiknya memiliki:

- Nama deskriptif.
- Kategori.
- Status actual photo atau concept render.
- Lokasi atau venue.
- Alt text draft.
- Informasi hak penggunaan jika diperlukan.

## 18. Do and Don't

### Do

- Gunakan foto sebagai pusat pengalaman.
- Pertahankan aksen emas secara selektif.
- Gunakan pointed arch sebagai signature motif.
- Seimbangkan section gelap dengan section warm neutral.
- Berikan CTA yang jelas pada setiap halaman.
- Jaga hierarki heading dan ruang kosong.
- Bedakan foto aktual dan render konsep.

### Don't

- Jangan menyalin identitas visual ICCU secara langsung.
- Jangan membuat seluruh halaman gelap dengan intensitas sama.
- Jangan menggunakan emas pada semua judul dan border.
- Jangan memakai pointed arch pada semua card.
- Jangan memenuhi Home dengan seluruh informasi dari subhalaman.
- Jangan menggunakan teks kecil seperti pada beberapa bagian referensi ICCU.
- Jangan membuat kategori galeri Architecture atau menampilkan layout plan.
- Jangan menambahkan testimoni, award, paket, atau klaim tanpa sumber.
- Jangan menggunakan Privacy Policy sebagai halaman scope saat ini.

## 19. Checklist Persetujuan Desain

Desain dinilai siap dilanjutkan jika:

- Identitas Mecca terlihat jelas dan tidak terasa seperti salinan ICCU.
- Arah modern Islamic-Uzbek muncul melalui bentuk, detail, warna, dan fotografi secara proporsional.
- Website terasa premium sekaligus hangat dan mengundang.
- Delapan halaman pada scope memiliki tujuan dan hierarki konten yang jelas.
- Navigasi mudah digunakan dan CTA utama terlihat.
- Seluruh komponen memiliki state default, hover, focus, active, disabled, loading, success, dan error bila relevan.
- Semua layout utama tersedia untuk desktop, tablet, dan mobile.
- Body text tidak lebih kecil dari 16 px.
- Kontras teks dan kontrol memenuhi target aksesibilitas.
- Foto sudah dikurasi dan tidak didominasi duplikasi.
- Render konsep memiliki label yang jelas.
- Tidak ada layout plan, kategori Architecture, atau konten yang belum terverifikasi.
- Konten dan klaim tetap sejalan dengan company profile dan `1. Scope.md`.

## 20. Deliverables Desain yang Diharapkan

Tahap desain idealnya menghasilkan:

- Moodboard dan final visual direction.
- Color styles dan typography styles.
- Spacing, grid, radius, border, dan shadow styles.
- Komponen global beserta seluruh state.
- Desktop dan mobile design untuk seluruh halaman.
- Tablet behavior untuk layout yang kritis.
- Prototype alur navigasi, gallery lightbox, mobile menu, dan contact/reservation CTA.
- Panduan crop dan penggunaan foto.
- Daftar aset final beserta kategori dan status actual/render.
- Handoff notes yang menjelaskan interaksi, responsive behavior, dan aturan konten.

