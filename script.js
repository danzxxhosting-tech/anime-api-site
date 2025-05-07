async function loadQuotes() {
  const res = await fetch("quotes.json");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((item, i) => {
    const quoteBlock = document.createElement("div");
    quoteBlock.className = "item";
    quoteBlock.innerHTML = `
      <p>"${item.quote}"</p>
      <p><strong>${item.character}</strong> - <em>${item.anime}</em></p>
      <button onclick="window.location.href='https://anime-api-site.vercel.app/api/quotes'">🌐 View API URL</button>
    `;
    output.appendChild(quoteBlock);
  });
}

async function loadAnimeImages() {
  const res = await fetch("images.json");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((url, i) => {
    const imageBlock = document.createElement("div");
    imageBlock.className = "item";
    imageBlock.innerHTML = `
      <img src="${url}" alt="anime image" class="sticker-img"/>
      <button onclick="window.location.href='https://anime-api-site.vercel.app/api/images'">🌐 View API URL</button>
    `;
    output.appendChild(imageBlock);
  });
}

async function loadStickers() {
  const res = await fetch("stickers.json");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((item, i) => {
    const stickerBlock = document.createElement("div");
    stickerBlock.className = "item";
    stickerBlock.innerHTML = `
      <img src="${item.url}" alt="sticker" class="sticker-img"/>
      <p><strong>${item.character}</strong> - <em>${item.anime}</em></p>
      <button onclick="window.location.href='https://anime-api-site.vercel.app/api/stickers'">🌐 View API URL</button>
    `;
    output.appendChild(stickerBlock);
  });
}
