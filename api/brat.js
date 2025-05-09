const { createCanvas } = require('canvas');
const sharp = require('sharp');

module.exports = async (req, res) => {
  try {
    const { text = 'Brat' } = req.query;

    const width = 512;
    const height = 512;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background putih
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Teks tengah
    ctx.font = 'bold 40px Sans';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

    const buffer = canvas.toBuffer('image/png');

    const webpBuffer = await sharp(buffer)
      .webp({ quality: 100 })
      .toBuffer();

    res.setHeader('Content-Type', 'image/webp');
    res.setHeader('Content-Disposition', 'inline; filename=brat.webp');
    return res.end(webpBuffer);

  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Gagal membuat stiker', detail: err.message });
  }
};
