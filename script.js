// Toggle theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cek tema dari localStorage
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.className = 'fas fa-moon';
  } else {
    icon.className = 'fas fa-sun';
  }
}

// Fungsi untuk menampilkan notifikasi salin
function showCopyNotification() {
  const notification = document.createElement('div');
  notification.className = 'copy-notification';
  notification.textContent = 'URL berhasil disalin!';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

// Fungsi showApi yang diperbarui
function showApi(endpoint) {
  const fullUrl = `https://animeapi.site${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  const display = document.getElementById('api-display');
  const dataPreview = document.getElementById('api-data-preview');
  
  display.innerHTML = `
    <h3>API Endpoint</h3>
    <div class="api-url">${fullUrl}</div>
    <button class="copy-btn" onclick="copyToClipboard('${fullUrl}')">
      <i class="fas fa-copy"></i> Salin URL
    </button>
    <div class="api-example">
      <p>Contoh penggunaan:</p>
      <pre>fetch('${fullUrl}')
  .then(response => response.json())
  .then(data => console.log(data));</pre>
    </div>
  `;
  
  display.classList.add('fade-in');
  setTimeout(() => display.classList.remove('fade-in'), 500);
  
  // Tampilkan preview data
  showDataPreview(endpoint);
  
  // Update statistik
  updateStats();
}

// Fungsi untuk menampilkan preview data
function showDataPreview(endpoint) {
  const dataPreview = document.getElementById('api-data-preview');
  
  // Data dummy berdasarkan endpoint
  let dummyData = {};
  if (endpoint.includes('naruto')) {
    dummyData = {
      quote: "Percaya pada dirimu sendiri! Percayalah pada kekuatanmu sendiri!",
      character: "Naruto Uzumaki",
      anime: "Naruto Shippuden"
    };
  } else if (endpoint.includes('pantun')) {
    dummyData = {
      pantun: "Pohon kelapa tumbuh menjulang, dibawa perahu si anak dayang",
      jawaban: "kelapa"
    };
  } else if (endpoint.includes('stickers')) {
    dummyData = {
      url: "https://animeapi.site/stickers/naruto/1.png",
      pack: "Naruto Pack"
    };
  } else if (endpoint.includes('images')) {
    dummyData = {
      url: "https://animeapi.site/images/aot/1.jpg",
      source: "Attack on Titan"
    };
  } else {
    dummyData = {
      message: "Data dari API akan muncul di sini"
    };
  }
  
  dataPreview.innerHTML = `
    <h3>Preview Data</h3>
    <div class="data-preview">${JSON.stringify(dummyData, null, 2)}</div>
  `;
  
  dataPreview.classList.add('show');
}

// Fungsi copyToClipboard yang diperbarui
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showCopyNotification();
  });
}

// Fungsi untuk mengupdate statistik
function updateStats() {
  const endpointsCount = document.getElementById('endpoints-count');
  const usersCount = document.getElementById('users-count');
  const responseTime = document.getElementById('response-time');
  const uptime = document.getElementById('uptime');
  
  // Animasi statistik
  animateValue(endpointsCount, 0, 15, 1000);
  animateValue(usersCount, 0, 1200, 1000);
  animateValue(responseTime, 0, 42, 1000);
  
  // Animasi khusus untuk uptime
  let current = 0;
  const target = 99.8;
  const increment = target / 100;
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(interval);
      current = target;
    }
    uptime.textContent = current.toFixed(1) + '%';
  }, 10);
}

// Fungsi untuk animasi angka
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    
    if (element === document.getElementById('response-time')) {
      element.textContent = value + 'ms';
    } else {
      element.textContent = value > 1000 ? (value/1000).toFixed(1) + 'K' : value;
    }
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Inisialisasi statistik saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
});
