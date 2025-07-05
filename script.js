// Toggle tema
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
function showCopyNotification(message = 'URL berhasil disalin!') {
  const notification = document.createElement('div');
  notification.className = 'copy-notification';
  notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
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
    <div class="api-buttons">
      <button class="copy-btn" onclick="copyToClipboard('${fullUrl}')">
        <i class="fas fa-copy"></i> Salin URL
      </button>
      <button class="test-btn" onclick="testEndpoint('${endpoint}')">
        <i class="fas fa-play"></i> Test Endpoint
      </button>
    </div>
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
  
  // Quotes
  if (endpoint.includes('naruto')) {
    dummyData = {
      quote: "Percaya pada dirimu sendiri! Percayalah pada kekuatanmu sendiri!",
      character: "Naruto Uzumaki",
      anime: "Naruto Shippuden"
    };
  } 
  else if (endpoint.includes('onepiece')) {
    dummyData = {
      quote: "Orang yang tidak bisa bersedia untuk mempertaruhkan nyawanya demi kata-katanya sendiri, tidak pantas disebut sebagai pria!",
      character: "Roronoa Zoro",
      anime: "One Piece"
    };
  }
  else if (endpoint.includes('aot')) {
    dummyData = {
      quote: "Jika kamu tidak bertaruh, kamu tidak bisa menang!",
      character: "Eren Yeager",
      anime: "Attack on Titan"
    };
  }
  else if (endpoint.includes('quotes')) {
    dummyData = {
      quote: "Terkadang kita harus melakukan apa yang diperlukan, bukan apa yang kita inginkan.",
      character: "Kakashi Hatake",
      anime: "Naruto"
    };
  }
  
  // Pantun
  else if (endpoint.includes('pantun')) {
    dummyData = {
      pantun: "Pohon kelapa tumbuh menjulang, dibawa perahu si anak dayang",
      jawaban: "kelapa"
    };
  }
  
  // Stiker
  else if (endpoint.includes('stickers')) {
    if (endpoint.includes('naruto')) {
      dummyData = {
        url: "https://animeapi.site/stickers/naruto/1.png",
        pack: "Naruto Pack Vol.1",
        character: "Naruto Uzumaki"
      };
    }
    else if (endpoint.includes('onepiece')) {
      dummyData = {
        url: "https://animeapi.site/stickers/onepiece/5.png",
        pack: "One Piece Pack Vol.3",
        character: "Monkey D. Luffy"
      };
    }
    else {
      dummyData = {
        url: "https://animeapi.site/stickers/random/42.png",
        pack: "Random Pack",
        character: "Goku"
      };
    }
  }
  
  // Gambar
  else if (endpoint.includes('images')) {
    if (endpoint.includes('naruto')) {
      dummyData = {
        url: "https://animeapi.site/images/naruto/12.jpg",
        resolution: "1920x1080",
        character: "Sasuke Uchiha"
      };
    }
    else if (endpoint.includes('aot')) {
      dummyData = {
        url: "https://animeapi.site/images/aot/8.jpg",
        resolution: "3840x2160",
        character: "Levi Ackerman"
      };
    }
    else {
      dummyData = {
        url: "https://animeapi.site/images/random/99.jpg",
        resolution: "1920x1080",
        character: "Rimuru Tempest"
      };
    }
  }
  
  // Karakter
  else if (endpoint.includes('characters')) {
    if (endpoint.includes('naruto')) {
      dummyData = {
        name: "Naruto Uzumaki",
        anime: "Naruto",
        village: "Konohagakure",
        abilities: ["Rasengan", "Shadow Clone Jutsu", "Sage Mode"],
        description: "Seekor rubah ekor sembilan yang menjadi Hokage Ketujuh Konohagakure."
      };
    }
    else if (endpoint.includes('demon-slayer')) {
      dummyData = {
        name: "Tanjiro Kamado",
        anime: "Demon Slayer",
        organization: "Demon Slayer Corps",
        abilities: ["Water Breathing", "Hinokami Kagura"],
        description: "Seorang pembasmi iblis yang berusaha mengubah adik perempuannya kembali menjadi manusia."
      };
    }
    else {
      dummyData = {
        name: "Gojo Satoru",
        anime: "Jujutsu Kaisen",
        organization: "Tokyo Jujutsu High",
        abilities: ["Limitless", "Six Eyes", "Domain Expansion"],
        description: "Penyihir terkuat dan guru di Tokyo Jujutsu High."
      };
    }
  }
  
  // Info Anime
  else if (endpoint.includes('anime/info')) {
    if (endpoint.includes('naruto')) {
      dummyData = {
        title: "Naruto Shippuden",
        episodes: 500,
        status: "Completed",
        genres: ["Action", "Adventure", "Fantasy"],
        rating: 8.3,
        synopsis: "Kisah Naruto Uzumaki, ninja muda dari Desa Konoha..."
      };
    }
    else if (endpoint.includes('one-piece')) {
      dummyData = {
        title: "One Piece",
        episodes: 1000,
        status: "Ongoing",
        genres: ["Action", "Adventure", "Comedy"],
        rating: 8.7,
        synopsis: "Petualangan Monkey D. Luffy dan kru bajak lautnya mencari harta karun legendaris One Piece..."
      };
    }
  }
  
  // Wallpaper
  else if (endpoint.includes('wallpapers')) {
    if (endpoint.includes('4k')) {
      dummyData = {
        url: "https://animeapi.site/wallpapers/4k/15.jpg",
        resolution: "3840x2160",
        anime: "Demon Slayer",
        characters: ["Tanjiro Kamado", "Nezuko Kamado"]
      };
    }
    else if (endpoint.includes('landscape')) {
      dummyData = {
        url: "https://animeapi.site/wallpapers/landscape/8.jpg",
        resolution: "1920x1080",
        anime: "Your Name",
        scene: "Komet Tiamat"
      };
    }
    else {
      dummyData = {
        url: "https://animeapi.site/wallpapers/random/33.jpg",
        resolution: "1920x1080",
        anime: "Attack on Titan",
        characters: ["Eren Yeager"]
      };
    }
  }
  
  // Generator
  else if (endpoint.includes('generator')) {
    if (endpoint.includes('quote')) {
      dummyData = {
        image_url: "https://animeapi.site/generated/quote/42.png",
        quote: "Hidup bukan tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan dirimu sendiri.",
        character: "Lelouch Lamperouge",
        anime: "Code Geass"
      };
    }
    else if (endpoint.includes('meme')) {
      dummyData = {
        image_url: "https://animeapi.site/generated/meme/77.png",
        template: "Distracted Boyfriend",
        top_text: "Shonen Jump",
        bottom_text: "Manhwa Webtoon"
      };
    }
    else {
      dummyData = {
        image_url: "https://animeapi.site/generated/character/19.png",
        character: "Rem",
        anime: "Re:Zero",
        style: "Watercolor"
      };
    }
  }
  
  // Default
  else {
    dummyData = {
      message: "Data dari API akan muncul di sini",
      endpoint: endpoint,
      timestamp: new Date().toISOString()
    };
  }
  
  dataPreview.innerHTML = `
    <h3>Preview Data <i class="fas fa-chevron-down"></i></h3>
    <div class="data-preview">${JSON.stringify(dummyData, null, 2)}</div>
    <button class="copy-btn" onclick="copyToClipboard('${JSON.stringify(dummyData, null, 2)}')">
      <i class="fas fa-copy"></i> Salin Data
    </button>
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
  animateValue(endpointsCount, 0, 42, 1000);
  animateValue(usersCount, 0, 12850, 1000);
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

// Fungsi pencarian
function searchAnime() {
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    // Encode query untuk URL
    const encodedQuery = encodeURIComponent(query);
    const endpoint = `/search?q=${encodedQuery}`;
    showApi(endpoint);
  } else {
    showCopyNotification('Silakan masukkan kata kunci pencarian');
  }
}

// Fungsi untuk test endpoint
async function testEndpoint(endpoint) {
  try {
    // Menampilkan loading
    const display = document.getElementById('api-display');
    const originalContent = display.innerHTML;
    display.innerHTML = `<div class="loading"><i class="fas fa-spinner fa-spin"></i> Menguji endpoint...</div>`;
    
    // Simulasi request API (dalam implementasi nyata, ini akan diganti dengan fetch)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Hasil simulasi
    const fullUrl = `https://animeapi.site${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
    const dummyResponse = {
      status: "success",
      message: "Endpoint berhasil diuji!",
      endpoint: endpoint,
      response_time: "42ms",
      data: {
        sample: "Data contoh dari API"
      }
    };
    
    const dataPreview = document.getElementById('api-data-preview');
    dataPreview.innerHTML = `
      <h3>Hasil Test Endpoint</h3>
      <div class="data-preview">${JSON.stringify(dummyResponse, null, 2)}</div>
      <button class="copy-btn" onclick="copyToClipboard('${JSON.stringify(dummyResponse, null, 2)}')">
        <i class="fas fa-copy"></i> Salin Hasil
      </button>
    `;
    
    // Kembalikan konten asli
    display.innerHTML = originalContent;
    showCopyNotification('Endpoint berhasil diuji!');
    
  } catch (error) {
    const display = document.getElementById('api-display');
    display.innerHTML = `<div class="loading"><i class="fas fa-exclamation-circle"></i> Error: Gagal menguji endpoint</div>`;
    setTimeout(() => {
      display.innerHTML = originalContent;
    }, 2000);
    console.error(error);
  }
}

// Fungsi untuk beralih tab
function switchTab(tabId) {
  // Sembunyikan semua tab konten
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Tampilkan tab yang dipilih
  document.getElementById(tabId).classList.add('active');
  
  // Update tab navigasi
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.dataset.tab === tabId) {
      tab.classList.add('active');
    }
  });
}

// Fitur live search saat mengetik
document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchAnime();
  }
});

// Inisialisasi statistik saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  // Aktifkan tab pertama
  switchTab('features');
  
  // Tambahkan event listener untuk tab
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchTab(tab.dataset.tab);
    });
  });
  
  // Inisialisasi statistik
  updateStats();
  
  // Set animasi untuk stat-card
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
  
  // Set animasi untuk feature-section
  const featureSections = document.querySelectorAll('.feature-section');
  featureSections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Inisialisasi tombol scroll to top
  initScrollToTop();
});

// Fungsi untuk inisialisasi tombol scroll to top
function initScrollToTop() {
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.id = 'scroll-to-top';
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  document.body.appendChild(scrollToTopBtn);
  
  // Tampilkan/sembunyikan tombol berdasarkan scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
}

// Fungsi untuk menampilkan contoh penggunaan
function showExample(exampleId) {
  const examples = document.querySelectorAll('.example-card');
  examples.forEach(example => {
    example.style.display = 'none';
  });
  
  document.getElementById(exampleId).style.display = 'block';
  }
