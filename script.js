document.getElementById('quoteButton').addEventListener('click', getAnimeQuote);
document.getElementById('stickerButton').addEventListener('click', getAnimeSticker);

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

async function getAnimeQuote() {
  const response = await fetch('./quotes.json');
  const data = await response.json();
  const random = data[Math.floor(Math.random() * data.length)];
  const quoteUrl = location.origin + '/quotes.json';

  document.getElementById('quoteText').innerText = random.text;
  document.getElementById('characterName').innerText = random.character;
  document.getElementById('animeName').innerText = random.anime;

  const quoteUrlButton = document.getElementById('quoteUrlButton');
  const copyQuoteUrlButton = document.getElementById('copyQuoteUrlButton');
  quoteUrlButton.style.display = 'inline-block';
  copyQuoteUrlButton.style.display = 'inline-block';

  quoteUrlButton.onclick = () => window.open(quoteUrl, '_blank');
  copyQuoteUrlButton.onclick = () => {
    copyToClipboard(quoteUrl);
    alert('Quote URL copied to clipboard!');
  };
}

async function getAnimeSticker() {
  const response = await fetch('./stickers.json');
  const data = await response.json();
  const random = data[Math.floor(Math.random() * data.length)];
  const stickerUrl = location.origin + '/stickers.json';

  document.getElementById('stickerImage').src = random.url;
  document.getElementById('stickerImage').style.display = 'block';
  document.getElementById('stickerCharacterName').innerText = random.character;
  document.getElementById('stickerAnimeName').innerText = random.anime;

  const stickerUrlButton = document.getElementById('stickerUrlButton');
  const copyStickerUrlButton = document.getElementById('copyStickerUrlButton');
  stickerUrlButton.style.display = 'inline-block';
  copyStickerUrlButton.style.display = 'inline-block';

  stickerUrlButton.onclick = () => window.open(stickerUrl, '_blank');
  copyStickerUrlButton.onclick = () => {
    copyToClipboard(stickerUrl);
    alert('Sticker URL copied to clipboard!');
  };
}