import React from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    sizes?: string;
    loading?: 'lazy' | 'eager';
    fetchPriority?: 'high' | 'low' | 'auto';
    style?: React.CSSProperties;
    className?: string;
    width?: number | string;
    height?: number | string;
}

const WIDTHS = [640, 1024, 1920];

/**
 * Generates WebP srcSet for optimized images.
 * Expects files at /images/optimized/<path>/<name>-<width>.webp
 */
function getWebPSrcSet(src: string): string {
    // /images/2026/2026-1.jpg → dir=2026, name=2026-1
    const match = src.match(/^\/images\/(.+)\/([^/]+)\.(jpe?g|png)$/i);
    if (!match) return '';
    const [, dir, name] = match;
    return WIDTHS.map(w => `/images/optimized/${dir}/${name}-${w}.webp ${w}w`).join(', ');
}

function getFallbackSrcSet(src: string): string {
    // For browsers that don't support WebP, use the original at 1x
    return '';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    sizes = '100vw',
    loading = 'lazy',
    fetchPriority,
    style,
    className,
    width,
    height,
}) => {
    const webpSrcSet = getWebPSrcSet(src);

    if (!webpSrcSet) {
        // Fallback: no optimized version available, render plain img with best practices
        return (
            <img
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                {...(fetchPriority ? { fetchPriority } : {})}
                style={style}
                className={className}
                width={width}
                height={height}
            />
        );
    }

    return (
        <picture>
            <source
                type="image/webp"
                srcSet={webpSrcSet}
                sizes={sizes}
            />
            <img
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                {...(fetchPriority ? { fetchPriority } : {})}
                style={style}
                className={className}
                width={width}
                height={height}
            />
        </picture>
    );
};
