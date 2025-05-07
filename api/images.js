
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesPath = path.resolve('data', 'images.json');
  const imagesData = fs.readFileSync(imagesPath, 'utf-8');
  const images = JSON.parse(imagesData);
  res.status(200).json(images);
}
