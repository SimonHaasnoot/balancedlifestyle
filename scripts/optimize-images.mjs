// Image optimization script
// Generates WebP versions at multiple widths for responsive images.
// Run: npm run optimize-images
// Input:  public/images/ (jpg, jpeg, png)
// Output: public/images/optimized/
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, relative, parse } from 'node:path';

const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/optimized';
const WIDTHS = [640, 1024, 1920];
const QUALITY = 80;

async function* walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'optimized') continue; // skip output dir
            yield* walk(fullPath);
        } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
            yield fullPath;
        }
    }
}

async function optimizeImage(inputPath) {
    const rel = relative(INPUT_DIR, inputPath);
    const { dir, name } = parse(rel);
    const outDir = join(OUTPUT_DIR, dir);
    await mkdir(outDir, { recursive: true });

    const image = sharp(inputPath);
    const meta = await image.metadata();
    const originalWidth = meta.width || 1920;

    const results = [];
    for (const width of WIDTHS) {
        if (width > originalWidth * 1.1) continue; // don't upscale
        const outPath = join(outDir, `${name}-${width}.webp`);
        await sharp(inputPath)
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toFile(outPath);

        const info = await stat(outPath);
        results.push({ width, size: info.size });
    }
    return results;
}

async function main() {
    console.log('🖼  Optimizing images...\n');
    let count = 0;
    let savedBytes = 0;

    for await (const file of walk(INPUT_DIR)) {
        const originalSize = (await stat(file)).size;
        const rel = relative(INPUT_DIR, file);

        try {
            const results = await optimizeImage(file);
            count++;
            const largest = results[results.length - 1];
            if (largest) {
                const saved = originalSize - largest.size;
                savedBytes += saved;
            }
            const sizes = results.map(r => `${r.width}px:${Math.round(r.size / 1024)}KB`).join(', ');
            console.log(`  ✓ ${rel} → ${sizes}`);
        } catch (err) {
            console.error(`  ✗ ${rel}: ${err.message}`);
        }
    }

    console.log(`\n✅ ${count} images optimized`);
    console.log(`💾 ~${Math.round(savedBytes / 1024 / 1024)}MB saved (largest WebP vs original)`);
}

main().catch(console.error);
