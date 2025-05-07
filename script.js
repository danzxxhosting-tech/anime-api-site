const output = document.getElementById('output');
const apiUrlText = document.getElementById('apiUrlText');

function showApiUrl(url) {
  apiUrlText.textContent = url;
  apiUrlText.style.color = '#4CAF50';
  apiUrlText.style.fontWeight = 'bold';
}

function clearOutput() {
  output.innerHTML = '';
}

function loadQuotes(anime) {
  const url = `/api/quotes`;
  showApiUrl(window.location.origin + url);
  fetch(url)
    .then(res => res.json())
    .then(data => {
      clearOutput();
      data.forEach(quote => {
        const div = document.createElement('div');
        div.className = 'quote-box';
        div.innerHTML = `
          <p><strong>${quote.character}</strong> (${quote.anime})</p>
          <p>"${quote.quote}"</p>
        `;
        output.appendChild(div);
      });
    })
    .catch(err => {
      output.innerHTML = `<p class="error">Gagal memuat quotes: ${err.message}</p>`;
    });
}

function loadStickers() {
  const url = `/api/stickers`;
  showApiUrl(window.location.origin + url);
  fetch(url)
    .then(res => res.json())
    .then(data => {
      clearOutput();
      data.forEach(sticker => {
        const div = document.createElement('div');
        div.className = 'sticker-box';
        div.innerHTML = `
          <p><strong>${sticker.name}</strong></p>
          <img src="${sticker.url}" alt="${sticker.name}" class="sticker-img"/>
        `;
        output.appendChild(div);
      });
    })
    .catch(err => {
      output.innerHTML = `<p class="error">Gagal memuat stiker: ${err.message}</p>`;
    });
}

function loadImages() {
  const url = `/api/images`;
  showApiUrl(window.location.origin + url);
  fetch(url)
    .then(res => res.json())
    .then(data => {
      clearOutput();
      data.forEach(image => {
        const div = document.createElement('div');
        div.className = 'image-box';
        div.innerHTML = `
          <p><strong>${image.title}</strong></p>
          <img src="${image.url}" alt="${image.title}" class="anime-img"/>
        `;
        output.appendChild(div);
      });
    })
    .catch(err => {
      output.innerHTML = `<p class="error">Gagal memuat gambar: ${err.message}</p>`;
    });
}
