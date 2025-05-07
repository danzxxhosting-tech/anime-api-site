// Base URL dari deploy Vercel atau localhost jika testing lokal
const baseURL = "https://anime-api-site.vercel.app/api/";

/**
 * Fungsi untuk menampilkan URL API di bawah tombol
 * @param {string} path - path API seperti 'quotes/naruto'
 */
function showApi(path) {
  const apiDisplay = document.getElementById('api-display');
  const fullUrl = `${baseURL}${path}`;

  // Menampilkan link API yang bisa diklik
  apiDisplay.innerHTML = `
    <p><strong>📡 URL API:</strong></p>
    <a href="${fullUrl}" target="_blank" class="api-link">${fullUrl}</a>
  `;
}
