// Konfigurasi URL Halaman Login Utama
// Pastikan path ini sesuai dengan struktur folder GitHub Pages kamu
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

    // 2. Cek apakah user punya hak akses spesifik?
    // requiredPermission adalah nama property di object akses (misal: 'orderPenjualan')
    const isAllowed = user.akses[requiredPermission];
    
    // Validasi nilai TRUE (bisa boolean true, string "TRUE", atau string "true")
    if (isAllowed !== true && isAllowed !== "TRUE" && isAllowed !== "true") {
        alert("AKSES DITOLAK: Anda tidak memiliki izin untuk mengakses halaman ini.");
        window.location.href = LOGIN_PAGE;
        return;
    }

    // 3. Jika lolos, tampilkan konten halaman
    // (Default body biasanya di-hide via CSS biar tidak kedip, lalu di-unhide di sini)
    document.body.style.display = 'block';
}
