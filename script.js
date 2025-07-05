function showApi(endpoint) {
  const fullUrl = `https://animeapi.site${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  const display = document.getElementById('api-display');
  
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
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.copy-btn');
    btn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
    btn.style.background = '#4CAF50';
    
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-copy"></i> Salin URL';
      btn.style.background = '';
    }, 2000);
  });
}
