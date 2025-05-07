
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const stickersPath = path.resolve('data', 'stickers.json');
  const stickersData = fs.readFileSync(stickersPath, 'utf-8');
  const stickers = JSON.parse(stickersData);
  res.status(200).json(stickers);
}
