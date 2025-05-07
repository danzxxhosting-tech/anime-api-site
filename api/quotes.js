
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const quotesPath = path.resolve('data', 'quotes.json');
  const quotesData = fs.readFileSync(quotesPath, 'utf-8');
  const quotes = JSON.parse(quotesData);
  res.status(200).json(quotes);
}
