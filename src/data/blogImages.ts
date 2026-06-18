/**
 * Slimme, unieke afbeeldingkeuze voor blogs.
 *
 * Doel:
 *  - Geen enkele blog deelt zijn header-afbeelding met een andere blog.
 *  - Geen blog gebruikt een afbeelding die elders op de website al getoond wordt
 *    (home, personal training, over ons, studio, community, etc.).
 *
 * Bestaande frontmatter `image` wordt gerespecteerd zolang die uniek is én niet
 * elders op de site voorkomt. Botsingen of duplicaten worden automatisch en
 * deterministisch vervangen door een ongebruikte foto uit de pool — zo krijgen
 * ook toekomstige (automatisch gegenereerde) blogs vanzelf een eigen beeld.
 */

/** Afbeeldingen die al ergens anders op de site staan — nooit voor blogs gebruiken. */
const SITE_IMAGES: ReadonlySet<string> = new Set([
    '/images/pt/pt1.jpg',
    '/images/pt/pt-1.jpg',
    '/images/pt/pt-carousel-2.jpg',
    '/images/pt/pt-carousel-3.jpg',
    '/images/2026/2026-1.jpg',
    '/images/2026/2026-3.jpg',
    '/images/2026/2026-4.jpg',
    '/images/2026/2026-5.jpg',
    '/images/2026/2026-6.jpg',
    '/images/2026/2026-07.jpg',
    '/images/2026/2026-08.jpg',
    '/images/2026/2026-09.jpg',
    '/images/2026/2026-10.jpg',
    '/images/2026/2026-11.jpg',
    '/images/2026/2026-12.jpg',
    '/images/2026/2026-13.jpg',
    '/images/2026/2026-14.jpg',
    '/images/2026/2026-15.jpg',
    '/images/2026/2026-16.jpg',
    '/images/2026/2026-17.jpg',
    '/images/2026/2026-18.jpg',
    '/images/2026/2026-23.jpg',
    '/images/2026/2026-30.jpg',
    '/images/2026/2026-40.jpg',
    '/images/2026/2026-41.jpg',
    '/images/2026/2026-42.jpg',
    '/images/2026/2026-50.jpg',
    '/images/2026/2026-51.jpg',
    '/images/2026/2026-52.jpg',
    '/images/2026/2026-53.jpg',
    '/images/2026/2026-54.jpg',
    '/images/2026/2026-80.jpg',
    '/images/2026/2026-community-1.jpg',
    '/images/2026/2026-community-3.jpg',
    '/images/2026/2026-community-4.jpg',
    '/images/2026/2026-contact-1.jpg',
    '/images/2026/2026-pt-1.jpg',
    '/images/2026/2026-pt-2.jpg',
    '/images/2026/2026-pt-3.jpg',
    '/images/2026/2026-pt-4.jpg',
    '/images/2026/2026-sem-1.jpg',
    '/images/2026/2026-sem-2.jpg',
    '/images/2026/2026-sem-3.jpg',
    '/images/2026/2026-tim-1.jpg',
    '/images/2026/2026-tim-2.jpg',
    '/images/2026/2026-tim-3.jpg',
]);

/**
 * Pool van sfeervolle foto's die nergens anders op de site gebruikt worden.
 * Eerst de losse genummerde shots, daarna een ruime selectie uit de fotoshoot
 * voor variatie. Alle bestanden bestaan in `public/images/2026/`.
 */
const BLOG_IMAGE_POOL: readonly string[] = [
    '/images/2026/2026-2.jpg',
    '/images/2026/2026-19.jpg',
    '/images/2026/2026-20.jpg',
    '/images/2026/2026-21.jpg',
    '/images/2026/2026-22.jpg',
    '/images/2026/2026-31.jpg',
    '/images/2026/2026-32.jpg',
    '/images/2026/2026-33.jpg',
    '/images/2026/2026-34.jpg',
    '/images/2026/2026-55.jpg',
    '/images/2026/2026-70.jpg',
    '/images/2026/2026-community-2.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-11.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-14.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-18.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-22.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-24.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-27.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-30.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-34.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-37.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-41.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-44.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-50.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-53.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-56.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-59.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-62.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-68.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-72.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-75.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-78.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-82.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-85.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-89.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-93.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-96.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-99.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-105.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-110.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-115.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-120.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-127.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-132.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-138.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-144.jpg',
    '/images/2026/EmmilyB_SemBalancedLifestyle-150.jpg',
];

/** Stabiele hash, zodat een slug altijd dezelfde plek in de pool kiest. */
function hashSlug(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        hash = (hash * 31 + slug.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}

interface BlogLike {
    id: string;
    data: { image?: string };
}

const slugOf = (post: BlogLike) => post.id.replace(/\.(md|mdx)$/, '');

/**
 * Bepaalt voor een hele blogcollectie een unieke afbeelding per blog.
 * Geef altijd de volledige collectie mee, zodat uniekheid gegarandeerd is.
 */
export function getBlogImageMap(posts: BlogLike[]): Map<string, string> {
    // Alfabetisch op slug -> deterministisch en stabiel als er blogs bijkomen.
    const sorted = [...posts].sort((a, b) => slugOf(a).localeCompare(slugOf(b)));
    const used = new Set<string>();
    const map = new Map<string, string>();

    // 1) Respecteer goede frontmatter: uniek én niet elders op de site gebruikt.
    for (const post of sorted) {
        const image = post.data.image;
        if (image && !SITE_IMAGES.has(image) && !used.has(image)) {
            used.add(image);
            map.set(slugOf(post), image);
        }
    }

    // 2) Wijs de rest een ongebruikte foto uit de pool toe (hash + lineair zoeken).
    for (const post of sorted) {
        const slug = slugOf(post);
        if (map.has(slug)) continue;

        const start = hashSlug(slug) % BLOG_IMAGE_POOL.length;
        let chosen: string | undefined;
        for (let i = 0; i < BLOG_IMAGE_POOL.length; i++) {
            const candidate = BLOG_IMAGE_POOL[(start + i) % BLOG_IMAGE_POOL.length];
            if (!used.has(candidate)) {
                chosen = candidate;
                break;
            }
        }
        // Pool uitgeput (zeer veel blogs): val terug op een poolbeeld op slug-index.
        const image = chosen ?? BLOG_IMAGE_POOL[start];
        used.add(image);
        map.set(slug, image);
    }

    return map;
}

/** Gemak: de afbeelding voor één blog binnen de hele collectie. */
export function getBlogImage(slug: string, posts: BlogLike[]): string {
    return getBlogImageMap(posts).get(slug) ?? BLOG_IMAGE_POOL[0];
}
