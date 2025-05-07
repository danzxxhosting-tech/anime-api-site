// Fungsi untuk memuat quotes berdasarkan kategori
async function loadQuotes(anime = "") {
  const res = await fetch("/api/quotes");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  // Jika kategori anime dipilih, filter berdasarkan anime tersebut
  const filteredData = anime
    ? data.filter(item => item.anime.toLowerCase() === anime.toLowerCase())
    : data;

  // Menampilkan data yang sudah difilter
  filteredData.forEach((item) => {
    const quoteBlock = document.createElement("div");
    quoteBlock.className = "item";
    quoteBlock.innerHTML = `
      <p>"${item.quote}"</p>
      <p><strong>${item.character}</strong> - <em>${item.anime}</em></p>
    `;
    output.appendChild(quoteBlock);
  });
}

// Fungsi untuk memuat sticker berdasarkan kategori
async function loadStickers(anime = "") {
  const res = await fetch("/api/stickers");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  // Jika kategori anime dipilih, filter berdasarkan anime tersebut
  const filteredData = anime
    ? data.filter(item => item.anime.toLowerCase() === anime.toLowerCase())
    : data;

  // Menampilkan data yang sudah difilter
  filteredData.forEach((item) => {
    const stickerBlock = document.createElement("div");
    stickerBlock.className = "item";
    stickerBlock.innerHTML = `
      <img src="${item.url}" alt="sticker" class="sticker-img"/>
      <p><strong>${item.character}</strong> - <em>${item.anime}</em></p>
    `;
    output.appendChild(stickerBlock);
  });
}

// Fungsi untuk memuat gambar berdasarkan kategori anime
async function loadImages(anime = "") {
  const res = await fetch("/api/images");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  // Jika kategori anime dipilih, filter berdasarkan anime tersebut
  const filteredData = anime
    ? data.filter(item => item.includes(anime.toLowerCase()))
    : data;

  // Menampilkan gambar yang sudah difilter
  filteredData.forEach((image) => {
    const imgBlock = document.createElement("div");
    imgBlock.className = "item";
    imgBlock.innerHTML = `<img src="${image}" alt="image" class="img-item" />`;
    output.appendChild(imgBlock);
  });
}

// Fungsi untuk menampilkan URL API
function showApiUrl(apiType) {
  let apiUrl = "";

  switch(apiType) {
    case 'quotes':
      apiUrl = "/api/quotes";
      break;
    case 'stickers':
      apiUrl = "/api/stickers";
      break;
    case 'images':
      apiUrl = "/api/images";
      break;
  }

  document.getElementById("apiUrlText").textContent = apiUrl;
  document.getElementById("apiUrlOutput").style.display = 'block';
}

// Event listener untuk tombol load quotes berdasarkan anime
document.getElementById("narutoBtn").addEventListener("click", function() {
  loadQuotes("Naruto");
});

document.getElementById("attackOnTitanBtn").addEventListener("click", function() {
  loadQuotes("Attack on Titan");
});

// Event listener untuk tombol load stickers berdasarkan anime
document.getElementById("narutoStickerBtn").addEventListener("click", function() {
  loadStickers("Naruto");
});

document.getElementById("attackOnTitanStickerBtn").addEventListener("click", function() {
  loadStickers("Attack on Titan");
});

// Event listener untuk tombol load images berdasarkan anime
document.getElementById("narutoImgBtn").addEventListener("click", function() {
  loadImages("Naruto");
});

document.getElementById("attackOnTitanImgBtn").addEventListener("click", function() {
  loadImages("Attack on Titan");
});

// Event listener untuk tombol Get API URL
document.getElementById("getQuotesApiUrlBtn").addEventListener("click", function() {
  showApiUrl('quotes');
});

document.getElementById("getStickersApiUrlBtn").addEventListener("click", function() {
  showApiUrl('stickers');
});

document.getElementById("getImagesApiUrlBtn").addEventListener("click", function() {
  showApiUrl('images');
});
