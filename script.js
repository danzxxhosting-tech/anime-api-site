async function loadQuotes() {
  const res = await fetch("/api/quotes");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((item, i) => {
    const quoteBlock = document.createElement("div");
    quoteBlock.className = "item";
    quoteBlock.innerHTML = `
      <p>"${item.quote}"</p>
      <p><strong>${item.character}</strong> - <em>${item.anime}</em></p>
      <button onclick="window.location.href='/api/quotes'">🌐 View API URL</button>
    `;
    output.appendChild(quoteBlock);
  });
}

async function loadStickers() {
  const res = await fetch("/api/stickers");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";

  data.forEach((item, i) => {
    const stickerBlock = document.createElement("div");
    stickerBlock.className = "item";
    stickerBlock.innerHTML = `
      <img src="${item.url}" alt="sticker" class="sticker-img"/>
      <p><strong>${item.character}</strong> - <em>${item.anime}</em></p>
      <button onclick="window.location.href='/api/stickers'">🌐 View API URL</button>
    `;
    output.appendChild(stickerBlock);
  });
}
