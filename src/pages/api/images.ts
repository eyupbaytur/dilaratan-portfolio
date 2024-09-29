// /pages/api/images.ts
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDir = path.join(process.cwd(), 'public/images');
  const imageFiles = fs.readdirSync(imagesDir);
  
  res.status(200).json(imageFiles.map(file => `/images/${file}`));
}
