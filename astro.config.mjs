import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://www.lifestylepersonaltraining-zeist.nl',
    output: 'static',
    integrations: [
        react(),
        mdx(),
        sitemap({
            filter: (page) => !page.includes('/bedankt') && !page.includes('/404'),
        }),
    ],
    vite: {
        ssr: {
            noExternal: ['@mui/*', '@emotion/*'],
        },
    },
    compressHTML: true,
});
