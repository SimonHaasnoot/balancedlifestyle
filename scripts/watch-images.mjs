// Watch for new/changed images and optimize them automatically during dev.
// Uses chokidar to watch public/images/ and generates optimized WebP versions.
import sharp from 'sharp';
import { stat, mkdir } from 'node:fs/promises';
import { join, relative, parse } from 'node:path';
import chokidar from 'chokidar';

const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/optimized';
const WIDTHS = [640, 1024, 1920];
const QUALITY = 80;

async function optimizeImage(inputPath) {
    const rel = relative(INPUT_DIR, inputPath);
    const { dir, name } = parse(rel);
    const outDir = join(OUTPUT_DIR, dir);
    await mkdir(outDir, { recursive: true });

    const image = sharp(inputPath);
    const meta = await image.metadata();
    const originalWidth = meta.width || 1920;

    for (const width of WIDTHS) {
        const targetWidth = Math.min(width, originalWidth);
        const outPath = join(outDir, `${name}-${width}.webp`);
        await sharp(inputPath)
            .resize(targetWidth, null, { withoutEnlargement: true })
            .webp({ quality: QUALITY })
            .toFile(outPath);
    }
    console.log(`  ✓ optimized: ${rel}`);
}

async function needsOptimization(inputPath) {
    const rel = relative(INPUT_DIR, inputPath);
    const { dir, name } = parse(rel);
    const outPath = join(OUTPUT_DIR, dir, `${name}-${WIDTHS[0]}.webp`);
    try {
        const srcStat = await stat(inputPath);
        const outStat = await stat(outPath);
        return srcStat.mtimeMs > outStat.mtimeMs;
    } catch {
        return true; // output doesn't exist
    }
}

console.log('👁  Watching images for changes...\n');

const watcher = chokidar.watch(INPUT_DIR, {
    ignored: [
        '**/optimized/**',
        /(^|[/\\])\../,
    ],
    persistent: true,
    ignoreInitial: false,
});

const queue = [];
let processing = false;

async function processQueue() {
    if (processing) return;
    processing = true;
    while (queue.length > 0) {
        const file = queue.shift();
        try {
            if (await needsOptimization(file)) {
                await optimizeImage(file);
            }
        } catch (err) {
            console.error(`  ✗ ${relative(INPUT_DIR, file)}: ${err.message}`);
        }
    }
    processing = false;
}

function enqueue(filePath) {
    if (!/\.(jpe?g|png)$/i.test(filePath)) return;
    if (!queue.includes(filePath)) {
        queue.push(filePath);
    }
    processQueue();
}

watcher.on('add', enqueue);
watcher.on('change', enqueue);
