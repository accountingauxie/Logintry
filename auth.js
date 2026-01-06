// Konfigurasi URL Halaman Login (Sesuaikan dengan nama repo kamu)
// Jika link kamu: https://accountingauxie.github.io/Auxilium-Portal-Sukses-Jaya/
const LOGIN_PAGE = "/Auxilium-Portal-Sukses-Jaya/index.html"; 

function checkAuth(requiredPermission) {
    const sessionData = localStorage.getItem('userSession');

    // 1. Cek apakah user sudah login?
    if (!sessionData) {
        alert("Anda belum login! Silakan login terlebih dahulu.");
        window.location.href = LOGIN_PAGE;
        return;
    }

    const user = JSON.parse(sessionData);

    // 2. Cek apakah user punya hak akses spesifik untuk halaman ini?
    // requiredPermission adalah nama kolom di Sheet (misal: 'orderPenjualan')
    // Kita cek apakah nilainya TRUE (boolean atau string "TRUE")
    const isAllowed = user.akses[requiredPermission];
    
    if (isAllowed !== true && isAllowed !== "TRUE" && isAllowed !== "true") {
        alert("AKSES DITOLAK: Anda tidak memiliki izin untuk mengakses halaman ini.");
        window.location.href = LOGIN_PAGE;
        return;
    }

    // 3. Jika lolos pengecekan, tampilkan konten halaman
    // (Kita set body jadi visible karena defaultnya kita hide agar tidak kedip)
    document.body.style.display = 'block';
}
