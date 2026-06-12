import type { Article } from '../types';

export const seedArticles: Article[] = [
  {
    id: '1',
    title: 'Mengenal React: Library UI yang Populer',
    summary: 'React adalah library JavaScript untuk membangun antarmuka pengguna. Dibuat oleh Meta, React menggunakan konsep komponen yang reusable.',
    content: `React adalah library JavaScript open-source yang dibuat oleh Meta (sebelumnya Facebook) untuk membangun antarmuka pengguna (UI). Sejak diluncurkan pada 2013, React telah menjadi salah satu pilihan utama para developer web di seluruh dunia.

## Apa itu Komponen?

Konsep utama React adalah **komponen**: potongan UI yang mandiri dan bisa dipakai berulang kali. Misalnya, tombol, kartu artikel, atau form login bisa masing-masing dibuat sebagai komponen tersendiri.

## Mengapa Pakai React?

1. **Virtual DOM** — React tidak langsung mengubah DOM browser, melainkan membandingkan perubahan terlebih dahulu sehingga update tampilan menjadi lebih efisien.
2. **Ekosistem besar** — Banyak library pendukung seperti React Router, Redux, dan lainnya.
3. **JSX** — Sintaks yang memadukan HTML dan JavaScript sehingga kode lebih mudah dibaca.

React cocok untuk proyek kecil maupun besar, dan dengan React 19, performa serta kemudahan pengembangan terus meningkat.`,
    authorName: 'Admin ArtikelKu',
    createdAt: '2024-01-15T08:00:00.000Z',
  },
  {
    id: '2',
    title: 'TypeScript: Kenapa Perlu Tipe Data di JavaScript?',
    summary: 'TypeScript menambahkan sistem tipe statis ke JavaScript, membantu mendeteksi kesalahan lebih awal saat pengembangan.',
    content: `TypeScript adalah superset dari JavaScript yang dikembangkan oleh Microsoft. Artinya, semua kode JavaScript yang valid juga valid di TypeScript — TypeScript hanya menambahkan fitur di atasnya.

## Masalah yang Dipecahkan TypeScript

JavaScript bersifat *dinamis*: tipe variabel bisa berubah kapan saja. Ini fleksibel, tapi juga mudah menimbulkan bug yang baru muncul saat program dijalankan.

Contoh bug JavaScript:
\`\`\`js
function tambah(a, b) {
  return a + b;
}
tambah(5, "3"); // Hasilnya "53", bukan 8!
\`\`\`

Dengan TypeScript, kita bisa menentukan bahwa \`a\` dan \`b\` harus bertipe \`number\`, dan TypeScript akan langsung memberi peringatan jika kita salah memanggil fungsi tersebut.

## Manfaat Utama

- **Deteksi error lebih awal** — Kesalahan ditemukan saat penulisan kode, bukan saat runtime.
- **Autocomplete lebih baik** — IDE mengerti struktur data sehingga bisa memberi saran yang akurat.
- **Kode lebih mudah dipahami** — Tipe data berperan sebagai dokumentasi otomatis.

TypeScript sangat disarankan untuk proyek berskala menengah hingga besar.`,
    authorName: 'Admin ArtikelKu',
    createdAt: '2024-02-03T09:30:00.000Z',
  },
  {
    id: '3',
    title: 'localStorage: Simpan Data di Browser Tanpa Server',
    summary: 'localStorage adalah API browser untuk menyimpan data secara lokal. Data tersimpan meski halaman di-refresh, tapi terbatas pada satu browser.',
    content: `localStorage adalah mekanisme penyimpanan yang disediakan oleh browser modern. Data yang disimpan di localStorage akan tetap ada meski tab atau browser ditutup — berbeda dengan sessionStorage yang hilang saat sesi berakhir.

## Cara Penggunaan Dasar

\`\`\`js
// Menyimpan data
localStorage.setItem('nama', 'Budi');

// Membaca data
const nama = localStorage.getItem('nama'); // "Budi"

// Menghapus data
localStorage.removeItem('nama');

// Menghapus semua data
localStorage.clear();
\`\`\`

## Menyimpan Objek

localStorage hanya bisa menyimpan string. Untuk menyimpan objek atau array, gunakan JSON:

\`\`\`js
const user = { id: '1', nama: 'Budi' };
localStorage.setItem('user', JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem('user'));
\`\`\`

## Keterbatasan

- **Kapasitas terbatas** — Umumnya sekitar 5–10 MB per origin.
- **Hanya di browser** — Tidak bisa diakses dari server.
- **Tidak aman untuk data sensitif** — Jangan simpan password atau token penting di sini.
- **Per browser** — Data tidak berpindah antar perangkat.

Untuk tahap belajar, localStorage sangat praktis karena tidak butuh server sama sekali.`,
    authorName: 'Admin ArtikelKu',
    createdAt: '2024-02-20T14:00:00.000Z',
  },
  {
    id: '4',
    title: 'React Router: Navigasi Halaman di Aplikasi React',
    summary: 'React Router memungkinkan aplikasi React berpindah halaman tanpa reload browser, memberikan pengalaman seperti aplikasi native.',
    content: `React secara default adalah library untuk membangun UI — bukan untuk mengatur navigasi antar halaman. Di sinilah **React Router** berperan.

## Single Page Application (SPA)

Aplikasi React umumnya adalah SPA: hanya ada satu file HTML, dan pergantian "halaman" dilakukan dengan JavaScript tanpa me-reload browser. Ini membuat navigasi terasa cepat dan mulus.

## Konsep Dasar React Router

### BrowserRouter
Pembungkus utama yang mengaktifkan fitur routing:

\`\`\`tsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>
\`\`\`

### Routes & Route
Mendefinisikan "URL ini → tampilkan komponen ini":

\`\`\`tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/artikel/:id" element={<DetailPage />} />
</Routes>
\`\`\`

### Link & NavLink
Digunakan untuk berpindah halaman (menggantikan tag \`<a>\`):

\`\`\`tsx
<Link to="/artikel/1">Baca Artikel</Link>
<NavLink to="/" className={({ isActive }) => isActive ? 'aktif' : ''}>Home</NavLink>
\`\`\`

### useNavigate & useParams
Hook untuk navigasi programatik dan membaca parameter URL:

\`\`\`tsx
const navigate = useNavigate();
navigate('/'); // pindah ke Home

const { id } = useParams();
// id berisi nilai dari :id di URL
\`\`\`

React Router v6 (yang dipakai saat ini) sangat ringan dan mudah dipelajari.`,
    authorName: 'Admin ArtikelKu',
    createdAt: '2024-03-10T11:00:00.000Z',
  },
  {
    id: '5',
    title: 'Vite: Build Tool Modern yang Super Cepat',
    summary: 'Vite adalah build tool generasi baru yang memanfaatkan ES Modules native browser untuk hot reload yang sangat cepat saat pengembangan.',
    content: `Vite (dibaca "vit", dari bahasa Prancis artinya "cepat") adalah build tool modern yang diciptakan oleh Evan You — creator Vue.js. Meski awalnya untuk Vue, Vite kini mendukung React, Svelte, dan framework lainnya.

## Masalah dengan Build Tool Lama

Build tool tradisional seperti Webpack harus **meng-bundle seluruh kode** sebelum server dev bisa dijalankan. Semakin besar proyek, semakin lama waktu startup-nya — bisa puluhan detik.

## Pendekatan Vite

Vite memanfaatkan **ES Modules native** yang sudah didukung oleh browser modern. Saat mengembangkan:

1. Vite **tidak** meng-bundle semua kode di awal.
2. Browser langsung meminta modul yang dibutuhkan.
3. Vite hanya mentransformasi modul yang diminta, secara on-demand.

Hasilnya: server dev bisa siap dalam **kurang dari 1 detik**, bahkan pada proyek besar.

## Hot Module Replacement (HMR)

HMR adalah fitur yang memperbarui modul yang berubah **tanpa me-reload seluruh halaman**. Vite mengimplementasikan HMR yang sangat presisi, sehingga perubahan kode langsung terlihat di browser hampir seketika.

## Perintah Dasar

\`\`\`bash
npm run dev      # Jalankan server development
npm run build    # Build untuk produksi
npm run preview  # Preview hasil build
\`\`\`

Untuk produksi, Vite menggunakan Rollup di balik layar untuk menghasilkan bundle yang optimal.`,
    authorName: 'Admin ArtikelKu',
    createdAt: '2024-04-05T10:00:00.000Z',
  },
];
