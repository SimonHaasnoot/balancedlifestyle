import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

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
        }),
    ],
    vite: {
        ssr: {
            noExternal: ['@mui/*', '@emotion/*'],
        },
    },
    compressHTML: true,
});
