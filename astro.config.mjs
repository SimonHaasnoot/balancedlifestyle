import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Map elke blog-URL naar de publicatiedatum uit de frontmatter,
// zodat de sitemap een <lastmod> per blogpost kan tonen.
const blogDir = fileURLToPath(new URL('./src/content/blog', import.meta.url));
const blogLastmod = new Map();
for (const file of readdirSync(blogDir)) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const raw = readFileSync(`${blogDir}/${file}`, 'utf-8');
    const match = raw.match(/^date:\s*(.+)$/m);
    if (!match) continue;
    const slug = file.replace(/\.(md|mdx)$/, '');
    blogLastmod.set(
        `/blogs/${slug}/`,
        new Date(match[1].trim().replace(/^["']|["']$/g, '')).toISOString()
    );
}

export default defineConfig({
    site: 'https://lifestylepersonaltraining-zeist.nl',
    output: 'static',
    trailingSlash: 'always',
    integrations: [
        react(),
        mdx(),
        sitemap({
            filter: (page) =>
                !page.includes('/bedankt') &&
                !page.includes('/404') &&
                !page.includes('/over-sem'),
            serialize: (item) => {
                const { pathname } = new URL(item.url);
                const lastmod = blogLastmod.get(pathname);
                if (lastmod) item.lastmod = lastmod;
                return item;
            },
        }),
    ],
    vite: {
        ssr: {
            noExternal: ['@mui/*', '@emotion/*'],
        },
    },
    compressHTML: true,
});
