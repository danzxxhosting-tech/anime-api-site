const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const pantunPath = path.resolve('data', 'pantun.json');
  try {
    const file = fs.readFileSync(pantunPath, 'utf8');
    const pantuns = JSON.parse(file);
    res.status(200).json(pantuns);
  } catch (e) {
    res.status(500).json({ error: 'Gagal membaca pantun.' });
  }
};
