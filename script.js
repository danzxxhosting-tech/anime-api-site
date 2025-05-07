async function loadQuotes() {
  const res = await fetch("quotes.json");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";
  data.forEach((item, i) => {
    const quoteBlock = document.createElement("div");
    quoteBlock.className = "item";
    quoteBlock.innerHTML = `
      <p>"${item.quote}"<br><span>- ${item.anime}</span></p>
      <button onclick="copyToClipboard('${window.location.origin}/quotes.json#${i}')">📋 Copy API URL</button>
    `;
    output.appendChild(quoteBlock);
  });
}

async function loadStickers() {
  const res = await fetch("stickers.json");
  const data = await res.json();
  const output = document.getElementById("output");
  output.innerHTML = "";
  data.forEach((url, i) => {
    const stickerBlock = document.createElement("div");
    stickerBlock.className = "item";
    stickerBlock.innerHTML = `
      <img src="${url}" alt="sticker" class="sticker-img"/>
      <button onclick="copyToClipboard('${url}')">📋 Copy URL</button>
    `;
    output.appendChild(stickerBlock);
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => alert("URL copied!"))
    .catch(err => console.error("Copy failed", err));
}
