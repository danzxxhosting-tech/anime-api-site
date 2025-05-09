const { createCanvas, loadImage } = require('canvas');
const path = require('path');

module.exports = async (req, res) => {
  const { text = 'Brat', bg = '1' } = req.query;

  const width = 512;
  const height = 512;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  try {
    // Load background image
    const bgPath = path.join(__dirname, '/assets/images/bg1.png, bg2.jpg', 'assets', 'images', `images${images}.jpg`);
    const background = await loadImage(bgPath);
    ctx.drawImage(background, 0, 0, width, height);

    // Draw text
    ctx.font = 'bold 40px Sans';
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.textAlign = 'center';

    ctx.strokeText(text, width / 2, height / 2);
    ctx.fillText(text, width / 2, height / 2);

    // Send image
    res.setHeader('Content-Type', 'image/png');
    canvas.createPNGStream().pipe(res);

  } catch (e) {
    res.status(500).json({ error: 'Failed to generate image', message: e.message });
  }
};
