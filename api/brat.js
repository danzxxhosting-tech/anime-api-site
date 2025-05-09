const { createCanvas, registerFont } = require('canvas');

module.exports = async (req, res) => {
  const { text = 'Brat' } = req.query;

  const width = 512;
  const height = 512;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Optional: font custom
  // registerFont('/path/to/font.ttf', { family: 'MyFont' });

  // Background putih polos
  ctx.fillStyle = '#ffffff'; // white background
  ctx.fillRect(0, 0, width, height);

  // Teks di tengah
  ctx.font = 'bold 40px Sans';
  ctx.fillStyle = '#000000'; // black text
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Kirim hasil PNG
  res.setHeader('Content-Type', 'image/png');
  canvas.createPNGStream().pipe(res);
};
