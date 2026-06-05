import fs from 'fs/promises';
import sharp from 'sharp';

const MAX_WIDTH = 1920;

async function optimizeImages() {
  const files = process.argv.slice(2);
  for (const file of files) {
    if (!file.match(/\.(png|jpe?g)$/i)) continue;

    console.log(`Optimizing: ${file}`);
    try {
      const buffer = await fs.readFile(file);
      const metadata = await sharp(buffer).metadata();
      
      let img = sharp(buffer);
      if (metadata.width && metadata.width > MAX_WIDTH) {
        img = img.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }

      if (file.toLowerCase().endsWith('.png')) {
        img = img.png({ quality: 80, compressionLevel: 9, effort: 7 });
      } else {
        img = img.jpeg({ quality: 80, mozjpeg: true });
      }

      const outputBuffer = await img.toBuffer();
      
      // Only overwrite if it actually saved space (margin of 2KB)
      if (outputBuffer.length < buffer.length - 2048) {
        await fs.writeFile(file, outputBuffer);
        const savings = ((1 - outputBuffer.length / buffer.length) * 100).toFixed(1);
        console.log(`✅ Optimized ${file}: saved ${savings}% (${(buffer.length / 1024).toFixed(1)}KB -> ${(outputBuffer.length / 1024).toFixed(1)}KB)`);
      } else {
        console.log(`⏩ Skipped ${file}: already optimized or minimal gains`);
      }
    } catch (err) {
      console.error(`❌ Failed to optimize ${file}:`, err.message);
    }
  }
}

optimizeImages();
