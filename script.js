// --- 1. Menangkap Elemen HTML ---
// Kita "kenalan" dulu dengan elemen-elemen penting di HTML
// agar bisa kita perintah nanti.

const uploadBtn = document.getElementById('upload-btn');
const imageWorkspace = document.querySelector('.image-workspace');

// --- 2. Logika Upload Gambar ---
// Ini adalah inti dari fungsi upload kita.

// Saat tombol "Upload Baru" di-klik, jalankan fungsi ini
uploadBtn.addEventListener('click', () => {
    // Kita buat sebuah elemen input file secara virtual (tersembunyi)
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Hanya menerima file gambar

    // Saat pengguna sudah memilih file, jalankan kode di dalamnya
    fileInput.onchange = (event) => {
        // Ambil file yang dipilih
        const file = event.target.files[0];
        
        // Jika tidak ada file yang dipilih, hentikan proses
        if (!file) return;

        // Gunakan FileReader API untuk membaca file gambar
        const reader = new FileReader();
        reader.readAsDataURL(file);

        // Setelah file selesai dibaca, tampilkan di workspace
        reader.onload = function() {
    // Hapus tulisan "Upload fotomu di sini"
    imageWorkspace.innerHTML = ''; 

    // Buat elemen <img> baru
    const img = document.createElement('img');
    img.src = reader.result; // Sumber gambar adalah file yang dibaca

    // Atur agar gambar pas di dalam workspace
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.borderRadius = '12px';

    // Masukkan gambar ke dalam workspace
    imageWorkspace.appendChild(img);
};

    // Picu klik pada input file yang tersembunyi
    fileInput.click();
}
});